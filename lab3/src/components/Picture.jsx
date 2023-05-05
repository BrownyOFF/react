import React from "react";

const Picture = ({ title, url }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img className="image-box" src={url} alt="img" />
    </div>
  );
};

export default Picture;
