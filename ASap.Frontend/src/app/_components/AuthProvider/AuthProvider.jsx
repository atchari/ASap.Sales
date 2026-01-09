import React from "react";
import { initKeycloak } from "@/_services/keycloakService";
import { useAuthStore } from "@/_stores/authStore";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
  const {
    isAuthenticated,
    isInitializing,
    login: storeLogin,
    logout: storeLogout,
    initialize,
    setInitializing,
  } = useAuthStore();

  const [loading, setLoading] = React.useState(true);
  const initRef = React.useRef(false);

  React.useEffect(() => {
    // Prevent double initialization in React StrictMode
    if (initRef.current) return;
    initRef.current = true;

    const initAuth = async () => {
      try {
        setLoading(true);
        setInitializing(true);

        const { authenticated, keycloak } = await initKeycloak(
          (kc) => {
            // onAuthSuccess
            initialize(kc);
          },
          (error) => {
            // onAuthError
            console.error('Keycloak auth error:', error);
            setInitializing(false);
          }
        );

        initialize(keycloak);
      } catch (error) {
        console.error('Failed to initialize authentication:', error);
        setInitializing(false);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = React.useCallback(async () => {
    await storeLogin();
  }, [storeLogin]);

  const logout = React.useCallback(async () => {
    await storeLogout();
  }, [storeLogout]);

  const authValues = React.useMemo(
    () => ({
      isAuthenticated,
      loading: loading || isInitializing,
      login,
      logout,
    }),
    [isAuthenticated, loading, isInitializing, login, logout]
  );

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
}
