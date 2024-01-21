import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

const ImageComponent = ({ src, hash, alt, style }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <div className="rounded-lg">
      <Blurhash
        hash={hash}
        width={200}
        height={200}
        resolutionX={32}
        resolutionY={32}
        punch={1}
        style={{ display: !imageLoaded ? "block" : "none" }}
      />
      <img
        src={src}
        alt={alt}
        className={style}
        loading="lazy"
        decoding="async"
        style={{ display: imageLoaded ? "block" : "none" }}
      />
    </div>
  );
};

export default ImageComponent;
