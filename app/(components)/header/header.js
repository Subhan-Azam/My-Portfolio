"use client";
import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Image from "next/image";
import HeaderBtn from "../headerBtn/headerBtn";
import "./header.css";
import SocialMedia from "../socialMedia/SocialMedia";

export default function Header() {
  const [text, setText] = useState("");
  const phrases = ["Mern Stack Developer     ", "Ui/Ux Designer     "];
  const speed = 100;
  const eraseDelay = 1500;

  useEffect(() => {
    let currentIndex = 0;
    let currentText = "";
    let isDeleting = false;
    let typingSpeed = speed;

    const type = () => {
      const currentPhrase = phrases[currentIndex];
      if (!isDeleting) {
        currentText = currentPhrase.substring(0, currentText.length + 1);
        setText(currentText);
        if (currentText === currentPhrase) {
          isDeleting = true;
          typingSpeed = speed;
        }
      } else {
        currentText = currentPhrase.substring(0, currentText.length - 1);
        setText(currentText);
        if (currentText === "") {
          isDeleting = false;
          currentIndex = (currentIndex + 1) % phrases.length;
          typingSpeed = speed;
        }
      }
      setTimeout(type, typingSpeed);
    };

    setTimeout(type, speed);
  }, []);

  return (
    <section id="about" className="flex items-center text-gray-600 body-font">
      <div className="container myHeader text-white mx-auto flex px-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="typingAnimation ">
            <div>
              <p className="font-serif text-2xl font-bold mb-3">
                Hello It's Me
              </p>
              <h1 className="font-bold font-serif text-5xl sm:text-6xl md:text-6xl lg:text-5xl xl:text-6xl">
                Subhan Azam
              </h1>
            </div>

            <div className="flex mt-5">
              <p className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-3xl title-font mb-4 mr-3 font-bold">
                I am
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-3xl title-font mb-4 text-purple-600 font-bold">
                {text}
              </h2>
              <span className="cursor">&nbsp;</span>
            </div>
          </div>

          <p className="my-5 font-serif leading-relaxed font-2xl">
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </p>

          <div>
            <SocialMedia />
          </div>
          
          <div className="flex justify-center">
            <Link
              href="https://drive.google.com/file/d/1xs5Z3v6yR5VKdqvwdLVmlek-att5IWGD/view?usp=sharing"
              target="_blank"
            >
              <HeaderBtn title="My Resume" />
            </Link>
          </div>
        </div>

        <div className="floatImage lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div className="header_img">
            <Image
              style={{ marginBottom: 80 }}
              src="/assets/myImg.png"
              width={400}
              height={350}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
