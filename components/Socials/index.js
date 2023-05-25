import React from "react";
import Button from "../Button";

import myData from "../../myData";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex`}>
      {myData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
