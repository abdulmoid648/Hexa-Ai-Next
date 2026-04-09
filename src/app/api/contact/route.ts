const HEXA_API = process.env.HEXA_API_URL || "https://api.gethexa.ai";

/**
 * POST /api/contact
 *
 * Proxies the contact/connect-us form to the Hexa AI backend.
 * Maps frontend field names to the API's expected schema.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      companySize,
      useCase,
      implementation,
      agentsCount,
      message,
      referralSource,
    } = body;

    // --- Validation ---
    if (!firstName || !lastName || !email) {
      return Response.json(
        { error: "First name, last name, and email are required" },
        { status: 400 }
      );
    }

    // Build payload matching the Hexa API schema
    const payload: Record<string, string> = {
      firstName,
      lastName,
      email,
    };

    // Only include optional fields if they have values
    if (companySize) payload.companySize = companySize;
    if (useCase) payload.useCase = useCase;
    if (implementation) payload.implementation = implementation;
    if (agentsCount) payload.agentsCount = agentsCount;
    if (message) payload.message = message;
    if (referralSource) payload.referralSource = referralSource;

    // --- Forward to Hexa API ---
    const hexaRes = await fetch(`${HEXA_API}/connect-us`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const hexaData = await hexaRes.json();

    if (!hexaRes.ok) {
      return Response.json(
        { error: hexaData.message || "Failed to submit form" },
        { status: hexaRes.status }
      );
    }

    return Response.json(
      { message: "Form submitted successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Contact Form Error:", err);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
