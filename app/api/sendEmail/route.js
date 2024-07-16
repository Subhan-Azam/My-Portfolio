const { NextResponse } = require("next/server");
import nodemailer from "nodemailer";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const name = body.name;
    const email = body.email;
    const subject = body.subject;
    const msg = body.msg;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "User Email",
      html: `<div>
        <b>Name: </b>${name} <br />
        <b>Email: </b>${email}<br />
        <b>Subject: </b>${subject}<br />
        <b>Message: </b>${msg}
      </div>`,
    };
    console.log("mailOptions :>>", mailOptions);

    const sendMail = await transporter.sendMail(mailOptions);
    console.log("sendMail :>>", sendMail);

    return NextResponse.json({
      message: "data POST successfully",
      data: {
        name,
        email,
        subject,
        msg,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
};
