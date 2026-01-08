import { App as AppAntd } from "antd";
import { RouterProvider } from "react-router-dom";
import { AppLayout } from "./_components/AppLayout";
import { AppProvider } from "./_components/AppProvider";
import { AppTranslation } from "./_components/AppTranslation/AppTranslation";
import { locales } from "./_components/AppTranslation/data";
import { AuthProvider } from "./_components/AuthProvider";
import { LAYOUTS } from "./_layouts";
import { router } from "./_routes";

export default function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <AppLayout defaultLayout={LAYOUTS.DEFAULT}>
          <AppTranslation locales={locales} defaultLocale={locales[0]}>
            <AppAntd>
              <RouterProvider router={router} />
            </AppAntd>
          </AppTranslation>
        </AppLayout>
      </AppProvider>
    </AuthProvider>
  );
}
