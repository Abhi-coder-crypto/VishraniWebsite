import nodemailer from "nodemailer";

const RECEIVER_EMAIL = "abhijeet18012001@gmail.com";

function getEmailTemplate(name: string, email: string, message: string): string {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0f172a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="min-height: 100vh;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%); padding: 40px 40px 30px; border-radius: 16px 16px 0 0; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                Vishrani Computech
              </h1>
              <p style="margin: 8px 0 0; color: rgba(255,255,255,0.8); font-size: 14px;">
                New Contact Form Submission
              </p>
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="background-color: #1e293b; padding: 40px;">
              
              <!-- Alert Box -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="background: rgba(124, 58, 237, 0.1); border-left: 4px solid #7c3aed; padding: 16px 20px; border-radius: 0 8px 8px 0;">
                    <p style="margin: 0; color: #a78bfa; font-size: 14px; font-weight: 600;">
                      📬 You have received a new message from your website!
                    </p>
                  </td>
                </tr>
              </table>
              
              <!-- Sender Info Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0f172a; border-radius: 12px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                          <p style="margin: 0 0 4px; color: rgba(255,255,255,0.5); font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">From</p>
                          <p style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 600;">${name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 16px;">
                          <p style="margin: 0 0 4px; color: rgba(255,255,255,0.5); font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                          <a href="mailto:${email}" style="color: #06b6d4; font-size: 16px; text-decoration: none; font-weight: 500;">${email}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Message Box -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0f172a; border-radius: 12px;">
                <tr>
                  <td style="padding: 24px;">
                    <p style="margin: 0 0 12px; color: rgba(255,255,255,0.5); font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                    <p style="margin: 0; color: #e2e8f0; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>
              
              <!-- Reply Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 30px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: Your inquiry to Vishrani Computech" 
                       style="display: inline-block; background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 14px; font-weight: 600; letter-spacing: 0.5px;">
                      Reply to ${name}
                    </a>
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #0f172a; padding: 24px 40px; border-radius: 0 0 16px 16px; border-top: 1px solid rgba(255,255,255,0.05);">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="text-align: center;">
                    <p style="margin: 0 0 8px; color: rgba(255,255,255,0.4); font-size: 12px;">
                      ${currentDate}
                    </p>
                    <p style="margin: 0; color: rgba(255,255,255,0.3); font-size: 11px;">
                      83 L. L. Shah Marg, Dana Bunder, Masjid (E), Mumbai 400 009, India
                    </p>
                    <p style="margin: 8px 0 0; color: rgba(255,255,255,0.3); font-size: 11px;">
                      © ${new Date().getFullYear()} Vishrani Computech. All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function sendContactEmail(name: string, email: string, message: string): Promise<boolean> {
  try {
    // Check if SMTP credentials are configured
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.log("SMTP credentials not configured. Email would be sent to:", RECEIVER_EMAIL);
      console.log("Message from:", name, email);
      console.log("To enable email sending, add SMTP_USER and SMTP_PASS environment variables.");
      return true; // Return true so form still works
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"Vishrani Computech Website" <${smtpUser}>`,
      to: RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: getEmailTemplate(name, email, message),
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to:", RECEIVER_EMAIL);
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
}
