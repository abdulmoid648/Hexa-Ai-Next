import { cookies } from "next/headers";

const HEXA_API = process.env.HEXA_API_URL || "https://api.gethexa.ai";

/**
 * POST /api/auth/login
 *
 * Proxies the login request to the Hexa AI backend.
 * On success, stores the JWT access_token in an httpOnly cookie.
 */
export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // --- Validation ---
    if (!email || !password) {
      return Response.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // --- Forward to Hexa API ---
    const hexaRes = await fetch(`${HEXA_API}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const hexaData = await hexaRes.json();

    if (!hexaRes.ok) {
      return Response.json(
        { error: hexaData.message || "Invalid credentials" },
        { status: hexaRes.status }
      );
    }

    // --- Store JWT token in secure cookie ---
    const token = hexaData.access_token || hexaData.token;

    if (token) {
      const cookieStore = await cookies();
      cookieStore.set("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
    }

    return Response.json({
      message: "Logged in successfully",
      user: hexaData.user || { email },
    });
  } catch (err) {
    console.error("Login Error:", err);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
