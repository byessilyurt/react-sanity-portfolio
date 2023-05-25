import React from "react";
import Button from "../Button";

const Socials = ({ className, socials }) => {
  return (
    <div className={`${className} flex`}>
      {socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
