const HEXA_API = process.env.HEXA_API_URL || "https://api.gethexa.ai";

/**
 * POST /api/auth/reset-password
 *
 * Proxies the reset-password request to the Hexa AI backend.
 * Requires: token, password, confirmPassword.
 */
export async function POST(request: Request) {
  try {
    const { token, password, confirmPassword } = await request.json();

    // --- Validation ---
    if (!token) {
      return Response.json(
        { error: "Reset token is missing or invalid" },
        { status: 400 }
      );
    }

    if (!password) {
      return Response.json(
        { error: "New password is required" },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return Response.json(
        { error: "Password must be at least 8 characters" },
        { status: 400 }
      );
    }

    // --- Forward to Hexa API ---
    const hexaRes = await fetch(`${HEXA_API}/auth/reset-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token,
        password,
        confirmPassword: confirmPassword || password,
      }),
    });

    const hexaData = await hexaRes.json();

    if (!hexaRes.ok) {
      return Response.json(
        { error: hexaData.message || "Failed to reset password" },
        { status: hexaRes.status }
      );
    }

    return Response.json({
      message: "Password has been reset successfully",
    });
  } catch {
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
