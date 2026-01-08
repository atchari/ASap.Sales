import { useAuth } from "@/_components/AuthProvider/hooks";
import { ASSET_IMAGES } from "@/_utilities/paths";
import { Image } from "antd";
import React from "react";
import { Navigate } from "react-router-dom";
const withAuth = (Component) => {
  return (props) => {
    const { isAuthenticated, loading } = useAuth();
    if (loading) {
      return (
        <div className="loader">
          <Image src={`${ASSET_IMAGES}/loader.svg`} alt="wieldy-loader" />
        </div>
      );
    }

    if (!isAuthenticated) {
      return <Navigate to="/auth/login-1" />;
    }

    return <Component {...props} />;
  };
};

export default withAuth;
