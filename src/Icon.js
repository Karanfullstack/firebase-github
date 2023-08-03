import React, {useState} from "react";

const Icon = ({icon, data}) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <span
      className={`icon ${hovered ? "iconHovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon === "user" && <span>Username: {data}</span>}
      {icon === "email" && <span>Email: {data}</span>}
      {icon === "phone" && <span>Phone: {data}</span>}
    </span>
  );
};

export default Icon;
