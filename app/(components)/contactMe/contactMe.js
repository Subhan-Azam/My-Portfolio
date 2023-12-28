// "use client";
// import HeaderBtn from "../headerBtn/headerBtn";
// import "./contactMe.css";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "@/config/firebase";
// import { useState } from "react";

// export default function ContactMe() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [msg, setMsg] = useState("");

//   const onClickHandler = async () => {
//     let userData = {
//       name,
//       email,
//       subject,
//       msg,
//     };

//     try {
//       const collectionName = collection(db, "userInfo");
//       await addDoc(collectionName, userData);
//       console.log("Document written with ID: ");
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   };

//   return (
//     <>
//       <div className="contact_inputs">
//         <form
//           onSubmit={onClickHandler}
//           action="mailto:youremail@example.com"
//           method="post"
//           enctype="text/plain"
//         >
//           <input
//             autoComplete="off"
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Your Name*"
//             type="text"
//             required
//           />

//           <input
//             autoComplete="off"
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Your Email*"
//             type="email"
//             required
//           />

//           <input
//             autoComplete="off"
//             onChange={(e) => setSubject(e.target.value)}
//             placeholder="Subject"
//             type="text"
//             required
//           />

//           <textarea
//             onChange={(e) => setMsg(e.target.value)}
//             placeholder="Message"
//             required
//           ></textarea>

//           <HeaderBtn type="submit" title="Submit" />
//         </form>
//       </div>
//     </>
//   );
// }

"use client";
import HeaderBtn from "../headerBtn/headerBtn";
import "./contactMe.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useState } from "react";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  const onClickHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission

    let userData = {
      name,
      email,
      subject,
      msg,
    };

    try {
      const collectionRef = collection(db, "userInfo"); // Use collection reference
      await addDoc(collectionRef, userData); // Add document to the collection
      console.log("Document written");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="contact_inputs">
      <form onSubmit={onClickHandler}>
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
