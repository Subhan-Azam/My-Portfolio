"use client";
import "./contactMe.css";
import HeaderBtn from "../headerBtn/headerBtn";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebase";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("Data added");

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
  };

  return (
    <div className="contact_inputs">
      <form onSubmit={onSubmitHandler}>
        <input
          autoComplete="off"
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
          autoComplete="off"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
          placeholder="Subject"
          type="text"
          required
        />
        <textarea
          autoComplete="off"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
          placeholder="Message"
          required
        ></textarea>
        <HeaderBtn type="submit" title="Submit" />
      </form>
    </div>
  );
}
