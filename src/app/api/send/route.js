import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY);
console.log("FROM_EMAIL:", process.env.FROM_EMAIL);


export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log("Received data:", email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>¡Gracias por contactarme!</p>
          <p>Mensaje enviado:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
