import React from "react";

interface Props {
  color?: string;
  border?: string; // e.g. "12px"
  children: React.ReactNode;
  shadow?: boolean;
  width?: string; // e.g. "160px"
  className?: string;
}

export const Card = ({
  color = "white",
  border = "12px",
  children,
  shadow = true,
  width = "500px",
  className = "",
}: Props) => {
  return (
    <div
      className={`overflow-hidden ${shadow ? "shadow-md" : ""} shrink-0 ${className}`}
      style={{
        backgroundColor: color,
        borderRadius: border,
        width: width,
      }}
    >
      {children}
    </div>
  );
};

