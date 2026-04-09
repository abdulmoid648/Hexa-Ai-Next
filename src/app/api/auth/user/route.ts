import { cookies } from "next/headers";

const HEXA_API = process.env.HEXA_API_URL || "https://api.gethexa.ai";

/**
 * GET /api/auth/user
 *
 * Returns the currently authenticated user by calling /auth/me
 * on the Hexa backend using the stored JWT cookie.
 */
export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
      return Response.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    // --- Forward to Hexa API ---
    const hexaRes = await fetch(`${HEXA_API}/auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const hexaData = await hexaRes.json();

    if (!hexaRes.ok) {
      return Response.json(
        { error: hexaData.message || "Session expired" },
        { status: hexaRes.status }
      );
    }

    return Response.json({
      user: hexaData,
    });
  } catch (err) {
    console.error("Get User Error:", err);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
