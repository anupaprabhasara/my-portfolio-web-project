import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useRoutePersistence() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("lastRoute", location.pathname);
  }, [location]);

  useEffect(() => {
    const lastRoute = localStorage.getItem("lastRoute");
    if (lastRoute && location.pathname === "/") {
      navigate(lastRoute, { replace: true });
    }
  }, [navigate, location.pathname]);
}
