import React from "react";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";

function Header() {
  return (
    <header className="flex justify-between items-center px-2">
      <h1 className="text-xl xl:text-2xl font-space-mono">R0B0TX.io</h1>
      <div className="flex items-center space-x-4">
        <a href="https://github.com/iamr0b0tx" target="_blank">
          <ImGithub />
        </a>
        <a href="https://x.com/iamr0b0tx" target="_blank">
          <FaXTwitter />
        </a>
        <a href="https://www.linkedin.com/in/abduladeneye" target="_blank">
          <FaLinkedin />
        </a>
        <a
          href="https://docs.google.com/document/d/15VVa6s9F93BHqvV32snvaTsLStccDNZpMsnEHUoAOeo/edit?tab=t.0#heading=h.tuvb5o6toa41"
          target="_blank"
          className="bg-green-500 p-2 xl:p-2 rounded-lg text-sm xl:text-lg"
        >
          {" "}
          Resume
        </a>
      </div>
    </header>
  );
}

export default Header;
