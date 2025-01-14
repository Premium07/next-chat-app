import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full">
      <p className="text-center py-2 text-white text-sm lg:text-lg">
        <span className="lg:font-semibold ">
          By : CodeMinister - (Full Stack Developer)
        </span>{" "}
        ❤️ &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
