const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { Resend } = require("resend");
const { getEmailTemplate, getPlainTextEmail } = require("./emailTemplate");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 4000;

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Get environment configuration
const NODE_ENV = process.env.NODE_ENV?.trim() || "Development";
const isDevelopment = NODE_ENV === "Development";
const isProduction = NODE_ENV === "Production";

// Determine sender email based on environment
const FROM_EMAIL = isDevelopment
  ? "onboarding@resend.dev"
  : process.env.RESEND_FROM_EMAIL;

const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL;

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests from development and production domains
    const allowedOrigins = [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000",
      "https://booktaxsolution.com",
      "https://www.booktaxsolution.com",
    ];

    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Email API is running",
    environment: NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "BookTaxSolutions Email API",
    version: "1.0.0",
    endpoints: {
      health: "/api/health",
      sendEmail: "/api/send-email",
    },
  });
});

// Send email endpoint
app.post("/api/send-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required fields",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address format",
      });
    }

    // Name validation (min 2 characters)
    if (name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: "Name must be at least 2 characters long",
      });
    }

    // Message validation (min 10 characters)
    if (message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        message: "Message must be at least 10 characters long",
      });
    }

    console.log("📧 Sending email...");
    console.log(`   From: ${FROM_EMAIL}`);
    console.log(`   To: ${RECEIVER_EMAIL}`);
    console.log(`   Environment: ${NODE_ENV}`);
    console.log(`   Sender Name: ${name}`);
    console.log(`   Sender Email: ${email}`);

    // Generate email content
    const htmlContent = getEmailTemplate(name, email, message, NODE_ENV);
    const textContent = getPlainTextEmail(name, email, message, NODE_ENV);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [RECEIVER_EMAIL],
      subject: `New Contact Form Submission from ${name}`,
      html: htmlContent,
      text: textContent,
      reply_to: email, // Allow direct reply to the sender
    });

    if (error) {
      console.error("❌ Resend API error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to send email. Please try again later.",
        error: error.message,
      });
    }

    console.log("✅ Email sent successfully!");
    console.log(`   Email ID: ${data.id}`);

    res.json({
      success: true,
      message: "Email sent successfully!",
      emailId: data.id,
    });
  } catch (error) {
    console.error("❌ Server error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
      error: error.message,
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
    path: req.path,
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);

  // CORS error handling
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({
      success: false,
      message: "CORS error: Origin not allowed",
    });
  }

  res.status(500).json({
    success: false,
    message: "An unexpected error occurred",
    error: err.message,
  });
});

// Start server
app.listen(PORT, () => {
  console.log("\n" + "=".repeat(60));
  console.log("📧 BookTaxSolutions Email API Server");
  console.log("=".repeat(60));
  console.log(`✅ Server running on: http://localhost:${PORT}`);
  console.log(`🌍 Environment: ${NODE_ENV}`);
  console.log(`📤 Sender Email: ${FROM_EMAIL}`);
  console.log(`📬 Receiver Email: ${RECEIVER_EMAIL}`);
  console.log("=".repeat(60));
  console.log("\n🔗 Available endpoints:");
  console.log(`   GET  /api/health      - Health check`);
  console.log(`   POST /api/send-email  - Send contact form email`);
  console.log("\n✨ Ready to handle requests!\n");
});

module.exports = app;
