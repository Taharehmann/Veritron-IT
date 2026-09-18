// Netlify Event Function: automatically triggered on every form submission
// Handles sending a branded autoresponder confirmation email to the submitter via Brevo API

export async function handler(event) {
  // Only process if body exists
  if (!event.body) {
    return { statusCode: 400, body: "No event body received" };
  }

  try {
    const { payload } = JSON.parse(event.body);
    const data = payload?.data || {};

    const name = data.name || "there";
    const email = data.email;
    const service = data.service || "IT Consultation";
    const company = data.company || "";
    const phone = data.phone || "";
    const message = data.message || "";

    // If no email was provided in the submission, do nothing
    if (!email) {
      console.log("No recipient email found in submission data.");
      return { statusCode: 200, body: "No email provided" };
    }

    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.SENDER_EMAIL;
    const senderName = process.env.SENDER_NAME || "Veritron IT Solutions";
    const replyToEmail = process.env.REPLY_TO_EMAIL || senderEmail;

    if (!apiKey || !senderEmail) {
      console.warn("BREVO_API_KEY or SENDER_EMAIL environment variable is missing.");
      return {
        statusCode: 200,
        body: "Brevo credentials not configured yet in Netlify environment variables.",
      };
    }

    // Modern branded HTML email template
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>We received your request</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f17; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f8fafc;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0b0f17; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 580px; background-color: #111827; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);">
          
          <!-- Top Accent Line -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #00f0ff, #38bdf8, #2563eb);"></td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding: 32px 32px 24px; border-bottom: 1px solid rgba(255, 255, 255, 0.07);">
              <div style="font-size: 13px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #00f0ff; margin-bottom: 6px;">
                VERITRON IT SOLUTIONS
              </div>
              <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff; line-height: 1.3;">
                We've received your request!
              </h1>
            </td>
          </tr>

          <!-- Main Body -->
          <tr>
            <td style="padding: 32px; color: #94a3b8; font-size: 15px; line-height: 1.6;">
              <p style="margin-top: 0; color: #f1f5f9; font-size: 16px;">
                Hi <strong>${name}</strong>,
              </p>
              <p>
                Thank you for requesting a <strong>Free IT Health Check</strong>. Our engineering team has received your submission and is reviewing your requirements.
              </p>
              <p>
                We will get back to you shortly (usually within a few business hours) with our findings and a tailored action plan for your business.
              </p>

              <!-- Submission Details Card -->
              <table role="presentation" width="100%" style="margin: 28px 0; background-color: rgba(30, 41, 59, 0.5); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 18px 20px;">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #38bdf8; margin-bottom: 12px;">
                      Your Request Summary
                    </div>
                    <div style="font-size: 14px; color: #cbd5e1; margin-bottom: 8px;">
                      <span style="color: #64748b;">Service:</span> <strong>${service}</strong>
                    </div>
                    ${
                      company
                        ? `<div style="font-size: 14px; color: #cbd5e1; margin-bottom: 8px;">
                            <span style="color: #64748b;">Company:</span> <strong>${company}</strong>
                          </div>`
                        : ""
                    }
                    ${
                      phone
                        ? `<div style="font-size: 14px; color: #cbd5e1; margin-bottom: 8px;">
                            <span style="color: #64748b;">Phone:</span> ${phone}
                          </div>`
                        : ""
                    }
                    ${
                      message
                        ? `<div style="font-size: 13px; color: #94a3b8; margin-top: 10px; padding-top: 10px; border-top: 1px dashed rgba(255, 255, 255, 0.08);">
                            <span style="color: #64748b; display: block; margin-bottom: 4px;">Your Notes:</span> "${message}"
                          </div>`
                        : ""
                    }
                  </td>
                </tr>
              </table>

              <p style="margin-bottom: 0;">
                If your inquiry is urgent or you need immediate assistance, please feel free to call our direct line at 
                <a href="tel:61450513399" style="color: #00f0ff; text-decoration: none; font-weight: 600;">+61 450 513 399</a> or reply directly to this email.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 32px; background-color: #0d121c; border-top: 1px solid rgba(255, 255, 255, 0.07); text-align: center; color: #64748b; font-size: 12px; line-height: 1.5;">
              <p style="margin: 0 0 6px; font-weight: 600; color: #94a3b8;">
                Veritron IT Solutions
              </p>
              <p style="margin: 0;">
                Email: <a href="mailto:info@veritron.com.au" style="color: #38bdf8; text-decoration: none;">info@veritron.com.au</a> • Phone: <a href="tel:61450513399" style="color: #38bdf8; text-decoration: none;">+61 450 513 399</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Send email via Brevo REST API
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: senderName,
          email: senderEmail,
        },
        to: [
          {
            email: email,
            name: name,
          },
        ],
        replyTo: {
          email: replyToEmail,
          name: senderName,
        },
        subject: "We received your request — Veritron IT Solutions",
        htmlContent: htmlContent,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Brevo API error:", response.status, errorText);
      return {
        statusCode: 500,
        body: `Brevo sending failed: ${errorText}`,
      };
    }

    const result = await response.json();
    console.log("Confirmation email sent successfully via Brevo:", result);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Confirmation email sent", messageId: result.messageId }),
    };
  } catch (err) {
    console.error("Error processing form submission:", err);
    return {
      statusCode: 500,
      body: err.message,
    };
  }
}
