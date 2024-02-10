import React from "react";

const Button = ({
  label,
  backgroundColor = "red",
  size = "md",
  onClick,
}: {
  label: string;
  backgroundColor: string;
  size: string;
  onClick: () => {};
}) => {
  let scale = 1;
  if (size === "sm") scale = 0.5;
  if (size === "lg") scale = 1.5;
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    color: "white",
  };
  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
};

export default Button;
