"use client";
import "./contactMe.css";
import HeaderBtn from "../headerBtn/headerBtn";
import { useState } from "react";
import AlertError from "../alertError/AlertError";
import AlertSuccess from "../alertSuccess/AlertSuccess";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
     
      if (!name || !email || !subject || !msg) {
        // <AlertError />;
        return console.log("data not send");
      }

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        msg: msg,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("/api/sendEmail", requestOptions);

      alert("Successfully, Email sended");
      setName("");
      setEmail("");
      setSubject("");
      setMsg("");
    } catch (error) {
      console.log("error in sending email", error);
    }
  };

  return (
    <div className="scroll-effect-contact-2 contact_inputs">
      <form onSubmit={onSubmitHandler}>
        <input
          // autoComplete="off"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Your Name*"
          type="text"
          required
        />

        <input
          // autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Your Email*"
          type="email"
          required
        />
        <input
          // autoComplete="off"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
          placeholder="Subject*"
          type="text"
          required
        />
        <textarea
          autoComplete="off"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
          placeholder="Message*"
          required
        ></textarea>
        <HeaderBtn type="submit" title="Submit" />
      </form>
    </div>
  );
}
