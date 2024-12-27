import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import LoginButton from "./components/UI/LoginButton";
import Image from "next/image";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  const background = {
    backgroundImage: "url('/images/john-mcarthur-nX-hT9lR5QA-unsplash.jpg')",
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    height: "100vh", 
};
  return (
    <html lang="en">
      <body
        className=" flex flex-col relative items-center"
        style={background}
      >
        <LoginButton/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}


