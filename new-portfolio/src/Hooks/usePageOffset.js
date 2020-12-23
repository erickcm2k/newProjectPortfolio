import { useState, useEffect } from "react";

const usePageOffset = () => {
  const [offset, setOffset] = useState({
    y: window.pageYOffset,
    x: window.pageXOffset,
  });

  useEffect(() => {
    const handleOffsetChange = () => {
      setOffset({
        y: window.pageYOffset,
        x: window.pageXOffset,
      });
    };

    window.addEventListener("scroll", handleOffsetChange);

    handleOffsetChange();

    return () => window.removeEventListener("scroll", handleOffsetChange);
  }, []);

  return offset;
};

export default usePageOffset;
