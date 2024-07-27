import "./globals.css";
// import { Inter } from 'next/font/google'
import Footer from "./(components)/footer/footer";
import Navbar from "./(components)/navbar/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <script src="https://unpkg.com/scrollreveal"></script> */}
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      /> */}
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
