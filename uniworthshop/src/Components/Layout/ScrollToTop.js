import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever pathname changes
  }, [pathname]);

  return null;
};

export default ScrollToTop;
