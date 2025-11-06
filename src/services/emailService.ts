interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
  emailId?: string;
}

// Get the API URL based on environment
const getApiUrl = (): string => {
  // Check if we're in production or development
  const hostname = window.location.hostname;

  if (hostname === "localhost" || hostname === "127.0.0.1") {
    // Development environment
    return "http://localhost:4000";
  } else {
    // Production environment
    return "https://booktaxsolution.com";
  }
};

export const sendContactEmail = async (
  formData: ContactFormData
): Promise<EmailResponse> => {
  try {
    const apiUrl = getApiUrl();

    console.log("Sending email to:", `${apiUrl}/api/send-email`);

    const response = await fetch(`${apiUrl}/api/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("API error:", data);
      throw new Error(data.message || "Failed to send email");
    }

    return {
      success: true,
      message: data.message || "Email sent successfully!",
      emailId: data.emailId,
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
