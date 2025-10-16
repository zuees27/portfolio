"use server"

import nodemailer from "nodemailer"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or custom SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    console.log(transporter);
    

    // Send email
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `📬 ${subject}`,
      text: message,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h3>New Message from ${name}</h3>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p>${message}</p>
        </div>
      `,
    })

    return { success: true }
  } catch (error: any) {
    console.error("Email error:", error)
    return { success: false, error: error.message }
  }
}
