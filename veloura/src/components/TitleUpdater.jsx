import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* =============== 1. ROUTE TITLE MAPPING - MAPS ROUTES TO PAGE TITLES =============== */
const routeTitles = {
  "/": "Veloura – Modern Fashion Store",
  "/collection": "Veloura – Collection",
  "/about": "Veloura – About Us",
  "/contact": "Veloura – Contact",
  "/cart": "Veloura – Your Cart",
  "/login": "Veloura – Login",
};

const TitleUpdater = () => {
  /* =============== 2. GET CURRENT ROUTE =============== */
  const location = useLocation();

  /* =============== 3. SIDE EFFECT (UPDATE DOCUMENT TITLE) - RUNS ON ROUTE CHANGE =============== */
  useEffect(() => {
    let title = routeTitles[location.pathname];

    /* -------- HANDLE DYNAMIC ROUTES -------- */
    if (!title) {
      if (location.pathname.startsWith("/product")) {
        title = "Veloura – Product Details";
      } else {
        title = "Page Not Found";
      }
    }

    /* -------- SET DOCUMENT TITLE -------- */
    document.title = title;
  }, [location.pathname]);

  return null; // NO UI RENDERING
};

export default TitleUpdater;

/* =========================================================
   COMPONENT SUMMARY

   1. THIS COMPONENT DYNAMICALLY UPDATES THE BROWSER TAB TITLE.

   2. CORE LOGIC:
      - MATCHES CURRENT ROUTE WITH routeTitles OBJECT
      - HANDLES DYNAMIC ROUTES (e.g., /product/:id)
      - FALLBACK TO "Page Not Found" IF NO MATCH

   3. SIDE EFFECT:
      - USES useEffect() TO UPDATE document.title

   4. DEPENDENCY:
      - RUNS ONLY WHEN location.pathname CHANGES

   5. DESIGN:
      - NO UI (RETURNS null)
      - PURE UTILITY COMPONENT

   6. BENEFITS:
      - IMPROVES SEO
      - IMPROVES USER EXPERIENCE (CLEAR TAB NAMES)

========================================================= */
