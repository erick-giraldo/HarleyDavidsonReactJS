import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
export function Navigate({ to, replace, state }) {
  const navigate = useNavigate();
  const navigateRef = useRef(navigate);
  useEffect(() => {
    navigateRef.current = navigate;
  }, [navigate]);

  useEffect(() => {
    navigateRef.current(to, { replace, state });
  }, [to, replace, state]);

  return null;
}
