import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/basicdetails">BasicDetails</Link>
        </li>
        <li>
          <Link to="/configure">Configure</Link>
        </li>
        <li>
          <Link to="/configurevolume">ConfigureVolume</Link>
        </li>
        
        <li>
          <Link to="/dashboardmycr">DashboardMyCR</Link>
        </li>
        <li>
          <Link to="/preview">Preview</Link>
        </li>
        <li>
          <Link to="/dashboardmyapprovals">DashboardMyApprovals</Link>
        </li>
        <li>
          <Link to="/dashboardmyapprovalsone">DashboardMyApprovalsOne</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
