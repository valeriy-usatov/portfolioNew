import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import Email from '@/components/Email';



const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: any, res: any) {
  const { email, subject, message }: { email: string; subject: string; message: string } =
    await req.json();
  console.log(email, subject, message);

  try {
    const data = await resend.emails.send({
      from: 'Valeriy <onboarding@resend.dev>',
      to: ['valeriy-usatov@yandex.ru'],
      subject: `${subject}`,
      html: `<p>Вам сообщения: <h2>${message}</h2> от почты ${email}</p>`,
      
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
