import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      // State
      isAuthenticated: false,
      user: null,
      token: null,
      refreshToken: null,
      keycloak: null,
      isInitializing: true,

      // Actions
      setKeycloak: (keycloak) => set({ keycloak }),

      setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),

      setUser: (user) => set({ user }),

      setTokens: (token, refreshToken) => set({ token, refreshToken }),

      login: async () => {
        const { keycloak } = get();
        if (keycloak) {
          try {
            await keycloak.login();
          } catch (error) {
            console.error('Login failed:', error);
          }
        }
      },

      logout: async () => {
        const { keycloak } = get();
        if (keycloak) {
          try {
            // Clear state first
            set({
              isAuthenticated: false,
              user: null,
              token: null,
              refreshToken: null,
            });
            // Then logout from Keycloak
            await keycloak.logout({
              redirectUri: window.location.origin,
            });
          } catch (error) {
            console.error('Logout failed:', error);
          }
        }
      },

      updateToken: async () => {
        const { keycloak } = get();
        if (keycloak) {
          try {
            const refreshed = await keycloak.updateToken(70);
            if (refreshed) {
              set({
                token: keycloak.token,
                refreshToken: keycloak.refreshToken,
              });
              console.log('Token refreshed successfully');
            }
            return refreshed;
          } catch (error) {
            console.error('Failed to refresh token:', error);
            get().logout();
            return false;
          }
        }
        return false;
      },

      setInitializing: (isInitializing) => set({ isInitializing }),

      initialize: (keycloak) => {
        if (keycloak.authenticated) {
          set({
            isAuthenticated: true,
            user: {
              id: keycloak.tokenParsed?.sub,
              username: keycloak.tokenParsed?.preferred_username,
              email: keycloak.tokenParsed?.email,
              name: keycloak.tokenParsed?.name,
              roles: keycloak.tokenParsed?.realm_access?.roles || [],
            },
            token: keycloak.token,
            refreshToken: keycloak.refreshToken,
            keycloak,
            isInitializing: false,
          });
        } else {
          set({
            isAuthenticated: false,
            user: null,
            token: null,
            refreshToken: null,
            keycloak,
            isInitializing: false,
          });
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        // Only persist minimal data, not keycloak instance
        isAuthenticated: state.isAuthenticated,
        user: state.user,
      }),
    }
  )
);
