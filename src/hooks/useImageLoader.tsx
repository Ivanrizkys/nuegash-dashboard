import { useEffect, useState } from "react";

const useImageLoader = (imageSrc: string): boolean => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = imageSrc;
  }, [imageSrc]);

  return imageLoaded;
};

export default useImageLoader;
