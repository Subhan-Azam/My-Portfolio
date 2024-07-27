import Header from "./(components)/header/header";
import Heading from "./(components)/heading/heading";
import ServicesCard from "./(components)/servicesCard/servicesCard";
import ContactMe from "./(components)/contactMe/contactMe";

import img1 from "../public/assets/html-tag.png";
import img2 from "../public/assets/fuul-stack-development.png";
import img3 from "../public/assets/clean-code-removebg-preview.png";
import img4 from "../public/assets/download__1_-removebg-preview.png";
import img5 from "../public/assets/responsive-design.png";
import img6 from "../public/assets/download-removebg-preview.png";
import MyLocation from "./(components)/myLocation/myLocation";

export default function Home() {
  return (
    <>
      <div className="mainPage" id="header">
        <Header />

        <section id="services" className="mb-28 text-white body-font">
          <div className="container px-5 mx-auto">
            <Heading
              title="Servi"
              title2="ces"
              para="I Provide you many services as you see in bottom"
            />

            <div className="flex flex-wrap">
              <ServicesCard
                title="Front-End Development"
                paragraph="Creating user interfaces and experiences using HTML, CSS, and JavaScript. Frameworks React and Next js."
                src={img1}
              />
              <ServicesCard
                title="Full-Stack Development"
                paragraph="Offering comprehensive solutions covering both front-end and back-end aspects.
                "
                src={img2}
              />
              <ServicesCard
                title="Semantic and Readable Code"
                paragraph="Emphasize writing code that's easy to understand and follows industry best practices and standards.
              "
                src={img3}
              />
              <ServicesCard
                title="CMS Expertise"
                paragraph=" Mention proficiency in content management systems like Sanity, ContentFull, or others."
                src={img4}
              />
              <ServicesCard
                title="Responsive Design"
                paragraph="Ensuring websites are optimized for various devices and screen sizes."
                src={img5}
              />
              <ServicesCard
                title="SEO Best Practices"
                paragraph="Implementing strategies for improved search engine visibility."
                src={img6}
              />
            </div>
          </div>
        </section>

        <div id="contact">
          <Heading
            title="Cont"
            title2="act"
            para="You can contact me by inputs or by email"
          />

          <div className="flex flex-wrap items-center justify-around">
            <MyLocation />
            <ContactMe />
          </div>
          
        </div>
      </div>
    </>
  );
}
