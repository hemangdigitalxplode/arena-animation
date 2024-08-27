import { useEffect } from "react";

const FaviconSetter = ({ url }) => {
  useEffect(() => {
    const setFavicon = () => {
      const favicon = document.querySelector('link[rel="icon"]');
      favicon.href = url;
    };

    setFavicon();
  }, [url]);

  return null;
};

export default FaviconSetter;
