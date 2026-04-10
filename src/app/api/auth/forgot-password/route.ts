const HEXA_API = process.env.HEXA_API_URL || "https://api.gethexa.ai";

/*POST /api/auth/forgot-password*/

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // --- Validation ---
    if (!email) {
      return Response.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // --- Forward to Hexa API ---
    const hexaRes = await fetch(`${HEXA_API}/auth/forgot-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const hexaData = await hexaRes.json();

    if (!hexaRes.ok) {
      return Response.json(
        { error: hexaData.message || "Failed to send reset email" },
        { status: hexaRes.status }
      );
    }

    return Response.json({
      message: "Successfully! An email has been sent to you with a reset link.",
    });
  } catch (err) {
    console.error("Forgot Password Error:", err);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
