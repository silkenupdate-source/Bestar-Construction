import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, projectType, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !projectType || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Email, Phone, Project Type, and Message)." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Log inquiry for server records
    console.log("[Quotation Inquiry Received]:", {
      name,
      email,
      phone,
      company: company || "N/A",
      projectType,
      message,
      submittedAt: new Date().toISOString(),
    });

    // Optional email dispatch hook if backend provider (e.g. Resend, SendGrid, Formspree) is configured
    const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "bestarconstructioninfo@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Bestar Website <onboarding@resend.dev>",
            to: [notificationEmail],
            reply_to: email,
            subject: `New Construction Inquiry: ${name} (${projectType})`,
            html: `
              <h2>New Project Quotation Request</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Company:</strong> ${company || "N/A"}</p>
              <p><strong>Project Type:</strong> ${projectType}</p>
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            `,
          }),
        });
      } catch (emailError) {
        console.error("Failed to dispatch email via Resend:", emailError);
        // Do not fail the client request if email dispatch encounters network issues
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting Bestar Construction. Your quotation request has been received. Our engineering team will review your specifications and contact you promptly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please try again or contact us directly via phone or WhatsApp." },
      { status: 500 }
    );
  }
}
