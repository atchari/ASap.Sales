import { useAuth } from "@/_components/AuthProvider/hooks";
import { useAuthStore } from "@/_stores/authStore";
import { ASSET_IMAGES } from "@/_utilities/paths";
import { Image } from "antd";
import React from "react";

const withAuth = (Component) => {
  return (props) => {
    const { isAuthenticated, loading } = useAuth();
    const { login } = useAuthStore();
    const [isRedirecting, setIsRedirecting] = React.useState(false);

    React.useEffect(() => {
      if (!loading && !isAuthenticated && !isRedirecting) {
        setIsRedirecting(true);
        // Trigger Keycloak login
        login();
      }
    }, [loading, isAuthenticated, login, isRedirecting]);

    if (loading || isRedirecting) {
      return (
        <div className="loader">
          <Image src={`${ASSET_IMAGES}/loader.svg`} alt="wieldy-loader" />
        </div>
      );
    }

    if (!isAuthenticated) {
      return (
        <div className="loader">
          <Image src={`${ASSET_IMAGES}/loader.svg`} alt="wieldy-loader" />
        </div>
      );
    }

    return <Component {...props} />;
  };
};

export default withAuth;
