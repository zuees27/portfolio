"use server"

export async function submitContactForm(formData: FormData) {
  console.log(formData);
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!name || !email || !subject || !message) {
    return { success: false, error: "All fields are required" }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: "Invalid email address" }
  }

  try {
    // Here you would typically send the email using a service like:
    // - Resend
    // - SendGrid
    // - Nodemailer
    // - Or any other email service

    // For now, we'll simulate a successful submission
    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return { success: false, error: "Failed to send message" }
  }
}
