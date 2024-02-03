// "use client";
// import "./contactMe.css";
// import HeaderBtn from "../headerBtn/headerBtn";
// import { useState } from "react";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "@/config/firebase";

// export default function ContactMe() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [msg, setMsg] = useState("");

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     let userData = {
//       name,
//       email,
//       subject,
//       msg,
//     };

//     try {
//       const docRef = collection(db, "User Detail");
//       await addDoc(docRef, userData);
//       e.preventDefault;
//     } catch (error) {
//       console.error(error);
//     }

//     let { name, email, subject, msg } = state;
//     name = name.trim();
//     email = email.trim();
//     subject = subject.trim();
//     msg = msg.trim();

//     if (name.length !== "" && name == 0 - 9) {
//       return alert("Enter Your correct Name");
//     } else if (email.length <= 10) {
//       return alert("Enter Your correct Email");
//     } else if (subject.length !== "") {
//       return alert("Enter Your correct Subject");
//     } else if (msg.length !== "") {
//       return alert("Enter Your correct Message");
//     } else {
//       return alert("invalid Inputs");
//     }
//   };

//   return (
//     <div className="contact_inputs">
//       <form onSubmit={onSubmitHandler}>
//         <input
//           autoComplete="off"
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Your Name*"
//           type="text"
//           required
//         />
//         ;
//         <input
//           autoComplete="off"
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Your Email*"
//           type="email"
//           required
//         />
//         <input
//           autoComplete="off"
//           onChange={(e) => setSubject(e.target.value)}
//           placeholder="Subject"
//           type="text"
//           required
//         />
//         <textarea
//           autoComplete="off"
//           onChange={(e) => setMsg(e.target.value)}
//           placeholder="Message"
//           required
//         ></textarea>
//         <HeaderBtn type="submit" title="Submit" />
//       </form>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebase";
import HeaderBtn from "../headerBtn/headerBtn";
import "./contactMe.css";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    let userData = {
      name,
      email,
      subject,
      msg,
    };

    try {
      const docRef = collection(db, "UserDetail"); // Collection name should match Firestore collection
      await addDoc(docRef, userData);
      // Handle success or any further actions after Firestore write
    } catch (error) {
      console.error(error);
      // Handle error
    }

    // Validation logic (modify as per your requirements)
    if (name.trim() === "") {
      alert("Enter Your correct Name");
    } else if (email.trim().length <= 10) {
      alert("Enter Your correct Email");
    } else if (subject.trim() === "") {
      alert("Enter Your correct Subject");
    } else if (msg.trim() === "") {
      alert("Enter Your correct Message");
    }
  };

  return (
    <div className="contact_inputs">
      <form onSubmit={onSubmitHandler}>
        <input
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name*"
          type="text"
          required
        />
        <input
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email*"
          type="email"
          required
        />
        <input
          autoComplete="off"
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          type="text"
          required
        />
        <textarea
          autoComplete="off"
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Message"
          required
        ></textarea>
        <HeaderBtn type="submit" title="Submit" />
      </form>
    </div>
  );
}
