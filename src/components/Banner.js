import React, { Children } from "react";

const Banner = ({ background, size, filter, className, children }) => {
  const bannerStyle = {
    background: background,
    height: size,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "15px",
    filter: filter,
    marginTop: "50px",
    marginBottom: "50px",
  };

  return (
    <div className={`banner ${className}`} style={bannerStyle}>
      <h1>{children}</h1>
    </div>
  );
};

export default Banner;
