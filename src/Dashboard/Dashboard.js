import React from "react";
import "./Dashboard.css";
import Card from "./Card";
import Sidebar from "../Sidebar/Sidebar";

 const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      {/* <Sidebar /> */}
      <div className="dashboard-container">
        <Card title="Java" content="This is the content of card 1." />
        <Card title="Springboot" content="This is the content of card 2." />
        <Card title="DSA" content="This is the content of card 3." />
        <Card title="Microservices" content="This is the content of card 4." />
      </div>
    </div>
  );
};

export default Dashboard;