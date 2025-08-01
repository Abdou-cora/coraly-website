import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const useDirection = () => {
  const { lng } = useParams(); 

  useEffect(() => {
    const html = document.documentElement;

    if (lng === "ar") {
      html.setAttribute("dir", "rtl");
      html.setAttribute("lang", "ar");
    } else {
      html.setAttribute("dir", "ltr");
      html.setAttribute("lang", lng || "en");
    }
  }, [lng]);
};
