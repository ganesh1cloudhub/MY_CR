import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DashboardMyApprovalsOne = React.lazy(() =>
  import("pages/DashboardMyApprovalsOne")
);
const DashboardMyApprovals = React.lazy(() =>
  import("pages/DashboardMyApprovals")
);
const Preview = React.lazy(() => import("pages/Preview"));
const DashboardMyCR = React.lazy(() => import("pages/DashboardMyCR"));
const ConfigureAzure = React.lazy(() => import("pages/ConfigureAzure"));
const Configure = React.lazy(() => import("pages/Configure"));
const BasicDetails = React.lazy(() => import("pages/BasicDetails"));
const DashboardMyCRnodata = React.lazy(() =>
  import("pages/DashboardMyCRnodata")
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardMyCRnodata />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/basicdetails" element={<BasicDetails />} />
          <Route path="/configure" element={<Configure />} />
          
          <Route path="/configureazure" element={<ConfigureAzure />}/>
          <Route path="/dashboardmycr" element={<DashboardMyCR />} />
          <Route path="/preview" element={<Preview />} />
          <Route
            path="/dashboardmyapprovals"
            element={<DashboardMyApprovals />}
          />
          <Route
            path="/dashboardmyapprovalsone"
            element={<DashboardMyApprovalsOne />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
