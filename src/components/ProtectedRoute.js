import { Navigate } from "./Navigate";
import { useAuth } from "../context/AuthContext";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <h1>Loading</h1>;

  const toLogin = () => {
    return <Navigate to="/login"></Navigate>;
  };
  if (!user) return toLogin();

  return <>{children}</>;
}
