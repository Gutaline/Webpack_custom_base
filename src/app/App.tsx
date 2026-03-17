import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import { Navbar } from "widget/Navbar";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { useTheme } from "shared/lib/hooks/useTheme";

import "shared/config/i18n/i18n";
import "./styles/index.scss";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Suspense fallback="Loading App">
        <Navbar />

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routeConfig.map((item) => (
              <Route path={item.path} element={item.element} />
            ))}
          </Routes>
        </Suspense>
      </Suspense>
    </div>
  );
};
