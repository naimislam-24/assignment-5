import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo-text.png";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center container mx-auto mt-8 relative">
        <img src={Logo} alt="Logo Img" />

        <ul className="hidden md:flex gap-6 items-center">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex gap-6 items-center">
          <button className="">Sign In</button>
          <button className="bg-[#D91B7E] py-2 px-6 rounded-2xl text-red-50">
            Sign Up
          </button>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <ul className="absolute top-full left-0 w-full flex flex-col gap-4 items-center md:hidden bg-white py-6 shadow-md">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        )}
      </div>
    </div>
  );
}
