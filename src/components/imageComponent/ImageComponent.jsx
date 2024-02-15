import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

const ImageComponent = ({ src, hash, alt, style, width, height }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      <div className="py-[.5rem]">
        <Blurhash
          hash={hash}
          width={width}
          height={height}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          style={{ display: !imageLoaded ? "block" : "none" }}
        />
      </div>
      <img
        src={src}
        alt={alt}
        className={style}
        loading="lazy"
        style={{ display: imageLoaded ? "flex" : "none" }}
      />
    </>
  );
};

export default ImageComponent;
