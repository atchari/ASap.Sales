import { AppLayoutProvider } from "./AppLayoutProvider";
const AppLayout = ({ children, defaultLayout }) => {
  return (
    <AppLayoutProvider defaultLayout={defaultLayout}>
      {children}
    </AppLayoutProvider>
  );
};

export { AppLayout };
