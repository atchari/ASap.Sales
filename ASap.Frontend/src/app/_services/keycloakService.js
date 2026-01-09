import Keycloak from 'keycloak-js';

// Keycloak configuration from environment variables
const keycloakConfig = {
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
};

// Create Keycloak instance
let keycloakInstance = null;
let isInitialized = false;

export const getKeycloakInstance = () => {
  if (!keycloakInstance) {
    keycloakInstance = new Keycloak(keycloakConfig);
  }
  return keycloakInstance;
};

// Initialize Keycloak
export const initKeycloak = async (onAuthSuccess, onAuthError) => {
  const keycloak = getKeycloakInstance();

  // Prevent multiple initialization
  if (isInitialized) {
    console.log('Keycloak already initialized');
    return { authenticated: keycloak.authenticated, keycloak };
  }

  try {
    const authenticated = await keycloak.init({
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
      pkceMethod: 'S256',
      checkLoginIframe: false,
    });

    isInitialized = true;
    console.log(`Keycloak initialized. Authenticated: ${authenticated}`);

    // Setup token refresh
    if (authenticated) {
      setupTokenRefresh(keycloak);
    }

    // Keycloak events
    keycloak.onAuthSuccess = () => {
      console.log('Authentication successful');
      if (onAuthSuccess) onAuthSuccess(keycloak);
    };

    keycloak.onAuthError = (error) => {
      console.error('Authentication error:', error);
      if (onAuthError) onAuthError(error);
    };

    keycloak.onAuthRefreshSuccess = () => {
      console.log('Token refresh successful');
    };

    keycloak.onAuthRefreshError = () => {
      console.error('Token refresh failed');
      keycloak.logout();
    };

    keycloak.onTokenExpired = () => {
      console.log('Token expired, refreshing...');
      keycloak.updateToken(70).catch(() => {
        console.error('Failed to refresh token');
        keycloak.logout();
      });
    };

    return { authenticated, keycloak };
  } catch (error) {
    console.error('Failed to initialize Keycloak:', error);
    isInitialized = false; // Reset on error
    throw error;
  }
};

// Setup automatic token refresh
const setupTokenRefresh = (keycloak) => {
  // Refresh token every 60 seconds (if expiring within 70 seconds)
  setInterval(() => {
    keycloak
      .updateToken(70)
      .then((refreshed) => {
        if (refreshed) {
          console.log('Token refreshed');
        }
      })
      .catch(() => {
        console.error('Failed to refresh token');
        keycloak.logout();
      });
  }, 60000); // Check every minute
};

// Login function
export const login = async () => {
  const keycloak = getKeycloakInstance();
  try {
    await keycloak.login();
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

// Logout function
export const logout = async () => {
  const keycloak = getKeycloakInstance();
  try {
    await keycloak.logout({
      redirectUri: window.location.origin,
    });
  } catch (error) {
    console.error('Logout failed:', error);
    throw error;
  }
};

// Get user info
export const getUserInfo = async () => {
  const keycloak = getKeycloakInstance();
  if (keycloak.authenticated) {
    try {
      return await keycloak.loadUserInfo();
    } catch (error) {
      console.error('Failed to load user info:', error);
      return null;
    }
  }
  return null;
};

// Check if user has role
export const hasRole = (role) => {
  const keycloak = getKeycloakInstance();
  return keycloak.hasRealmRole(role);
};

// Get token
export const getToken = () => {
  const keycloak = getKeycloakInstance();
  return keycloak.token;
};

// Update token
export const updateToken = async (minValidity = 70) => {
  const keycloak = getKeycloakInstance();
  try {
    const refreshed = await keycloak.updateToken(minValidity);
    return refreshed;
  } catch (error) {
    console.error('Failed to update token:', error);
    throw error;
  }
};
