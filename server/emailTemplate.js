const getEmailTemplate = (name, email, message, environment) => {
  const currentDate = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f5f5f5;
            padding: 20px;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 30px;
            text-align: center;
        }
        .header h1 {
            color: #ffffff;
            font-size: 28px;
            font-weight: 700;
            margin: 0;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 14px;
            margin-top: 8px;
        }
        .content {
            padding: 40px 30px;
        }
        .info-card {
            background-color: #f9fafb;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
            border-left: 4px solid #667eea;
        }
        .info-label {
            color: #6b7280;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            font-weight: 600;
            margin-bottom: 8px;
        }
        .info-value {
            color: #111827;
            font-size: 16px;
            font-weight: 500;
            word-wrap: break-word;
        }
        .info-value a {
            color: #667eea;
            text-decoration: none;
        }
        .info-value a:hover {
            text-decoration: underline;
        }
        .message-content {
            color: #374151;
            font-size: 15px;
            line-height: 1.7;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        .metadata {
            background: linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%);
            border-radius: 12px;
            padding: 20px;
            margin-top: 30px;
            border: 1px solid #dbeafe;
        }
        .metadata-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }
        .metadata-row:last-child {
            margin-bottom: 0;
        }
        .metadata-label {
            color: #1e40af;
            font-size: 13px;
            font-weight: 600;
        }
        .metadata-value {
            color: #3b82f6;
            font-size: 13px;
        }
        .footer {
            background-color: #f9fafb;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
        }
        .footer p {
            color: #6b7280;
            font-size: 12px;
            margin: 0;
        }
        .footer-logo {
            color: #667eea;
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 10px;
        }
        .divider {
            height: 1px;
            background: linear-gradient(to right, transparent, #e5e7eb, transparent);
            margin: 25px 0;
        }
        @media only screen and (max-width: 600px) {
            body {
                padding: 10px;
            }
            .content {
                padding: 30px 20px;
            }
            .header {
                padding: 30px 20px;
            }
            .header h1 {
                font-size: 24px;
            }
            .metadata-row {
                flex-direction: column;
                align-items: flex-start;
            }
            .metadata-value {
                margin-top: 5px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <h1>📬 New Contact Form Submission</h1>
            <p>You have received a new message from your website</p>
        </div>

        <!-- Content -->
        <div class="content">
            <!-- Name -->
            <div class="info-card">
                <div class="info-label">👤 Full Name</div>
                <div class="info-value">${name}</div>
            </div>

            <!-- Email -->
            <div class="info-card">
                <div class="info-label">📧 Email Address</div>
                <div class="info-value">
                    <a href="mailto:${email}">${email}</a>
                </div>
            </div>

            <div class="divider"></div>

            <!-- Message -->
            <div class="info-card">
                <div class="info-label">💬 Message</div>
                <div class="message-content">${message}</div>
            </div>

            <!-- Metadata -->
            <div class="metadata">
                <div class="metadata-row">
                    <span class="metadata-label">🌐 Environment:</span>
                    <span class="metadata-value">${environment}</span>
                </div>
                <div class="metadata-row">
                    <span class="metadata-label">📅 Received At:</span>
                    <span class="metadata-value">${currentDate}</span>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <div class="footer-logo">BookTaxSolutions</div>
            <p>This email was sent from your contact form at booktaxsolution.com</p>
            <p style="margin-top: 10px; color: #9ca3af;">
                Please respond to this inquiry at your earliest convenience.
            </p>
        </div>
    </div>
</body>
</html>
  `;
};

// Plain text version for email clients that don't support HTML
const getPlainTextEmail = (name, email, message, environment) => {
  const currentDate = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  });

  return `
NEW CONTACT FORM SUBMISSION
===========================

You have received a new message from your website.

CONTACT DETAILS
---------------
Name: ${name}
Email: ${email}

MESSAGE
-------
${message}

METADATA
--------
Environment: ${environment}
Received At: ${currentDate}

---
This email was sent from BookTaxSolutions contact form at booktaxsolution.com
  `;
};

module.exports = {
  getEmailTemplate,
  getPlainTextEmail,
};
