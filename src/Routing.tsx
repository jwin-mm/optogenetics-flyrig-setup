import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import PageWrapper from './components/PageWrapper'
import RigInstructions from './pages/RigInstructions';
import Bill from './pages/Bill';
import Contact from './pages/Contact';
import Guide from './pages/ExperimentGuide';
import FAQ from './pages/FAQ';
import SWDocumenatation from './pages/SWDocumentation';
import SWInstallation from './pages/SWInstallation';
import SWManual from './pages/SWManual';

const routes = [
  { path: "/", component: <RigInstructions /> },
  { path: "/rig-instructions", component: <RigInstructions /> },
  { path: "/bill", component: <Bill /> },
  { path: "/experiment-guide", component: <Guide /> },
  { path: "/sw-documentation", component: <SWDocumenatation /> },
  { path: "/sw-installation", component: <SWInstallation /> },
  { path: "/sw-manual", component: <SWManual /> },
  { path: "/faq", component: <FAQ /> },
  { path: "/contact", component: <Contact /> },
];

const Routing: React.FC = () => {
  return (
    <BrowserRouter basename="/optogenetics-flyrig-setup">
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<PageWrapper>{route.component}</PageWrapper>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
