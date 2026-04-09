import { cookies } from "next/headers";

const HEXA_API = process.env.HEXA_API_URL || "https://api.gethexa.ai";

/**
 * POST /api/auth/register
 *
 * Proxies the signup request to the Hexa AI backend.
 * The Hexa /auth/signup endpoint requires: firstName, lastName, email, password, confirmPassword.
 * Since our frontend currently only sends email + password, we derive firstName
 * from the email prefix and set lastName to a default value.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, firstName, lastName, confirmPassword } = body;

    // --- Validation ---
    if (!email || !password) {
      return Response.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return Response.json(
        { error: "Password must be at least 8 characters" },
        { status: 400 }
      );
    }

    // Build payload — use provided names or derive from email
    const payload = {
      firstName: firstName || email.split("@")[0],
      lastName: lastName || "User",
      email,
      password,
      confirmPassword: confirmPassword || password,
    };

    // --- Forward to Hexa API ---
    const hexaRes = await fetch(`${HEXA_API}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const hexaData = await hexaRes.json();

    if (!hexaRes.ok) {
      return Response.json(
        { error: hexaData.message || "Registration failed" },
        { status: hexaRes.status }
      );
    }

    // --- Store JWT token if returned ---
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

    return Response.json(
      {
        message: "Account created successfully",
        user: hexaData.user || { email },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Register Error:", err);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
