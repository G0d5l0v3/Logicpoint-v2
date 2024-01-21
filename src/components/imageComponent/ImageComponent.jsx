import React, { useState, useEffect } from "react";

const ImageComponent = ({src, key, alt, style}) => {
  return (
    <img
      key={key}
      src={src}
      alt={alt}
      className={style}
      loading="lazy"
      decoding="async"
    />
  );
};

export default ImageComponent;
