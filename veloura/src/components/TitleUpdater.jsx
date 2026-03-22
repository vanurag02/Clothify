import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const routeTitles = {
  "/": "Veloura – Modern Fashion Store",
  "/collection": "Veloura – Collection",
  "/about": "Veloura – About Us",
  "/contact": "Veloura – Contact",
  "/cart": "Veloura – Your Cart",
};

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    let title = routeTitles[location.pathname];

    if (!title) {
      if (location.pathname.startsWith("/product")) {
        title = "Veloura – Product Details";
      } else {
        title = "Page Not Found";
      }
    }

    document.title = title;
  }, [location]);

  return null;
};

export default TitleUpdater;
