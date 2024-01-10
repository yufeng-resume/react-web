import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children?: React.ReactNode;
  imagePath?: string;
  className?: string;
}

export const ImagePreview = ({ children, imagePath, className }: Props) => {
  const hoverDiv = useRef<HTMLImageElement | null>(null);
  const triggerElement = useRef<HTMLDivElement | null>(null);
  const [imageSrc, setImageSrc] = useState<string | undefined>();
  const imageWidth = 700;
  const imageHeight = 700;

  useEffect(() => {
    if (imagePath) {
      import(`src/assets/images/${imagePath}`)
        .then((image) => {
          setImageSrc(image.default);
        })
        .catch((error) => {
          console.error(`Error loading image at ${imagePath}:`, error);
        });
    }
  }, [imagePath]);

  useEffect(() => {
    if (triggerElement.current) {
      triggerElement.current.addEventListener('mouseover', function (e) {
        if (hoverDiv.current) {
          hoverDiv.current.style.display = 'block';
        }
      });
      triggerElement.current.addEventListener('mousemove', function (e) {
        if (hoverDiv.current) {
          hoverDiv.current.style.left = e.clientX - imageWidth / 2 + 'px';
          hoverDiv.current.style.top = e.clientY - imageHeight / 2 + 'px';
        }
      });
      triggerElement.current.addEventListener('mouseout', function () {
        if (hoverDiv.current) {
          hoverDiv.current.style.display = 'none';
        }
      });
    }
  }, []);

  return (
    <div>
      <div className={className} ref={triggerElement}>
        {children}
      </div>
      {imageSrc && (
        <img
          ref={hoverDiv}
          style={{
            pointerEvents: 'none',
            position: 'fixed',
            display: 'none',
            width: `${imageWidth}px`,
            height: `${imageHeight}px`,
          }}
          src={imageSrc}
          alt="Hover"
        />
      )}
    </div>
  );
};
