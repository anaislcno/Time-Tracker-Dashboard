import UserCard from "../UserCard/UserCard";
import TrackerList from "../TrackerList/TrackerList";
import { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>("weekly");

  const handleTimeframeChange = (timeframe: string) => {
    setSelectedTimeframe(timeframe);
  };

  return (
    <div className="container">
      <UserCard
        handleTimeframeChange={handleTimeframeChange}
        selectedTimeframe={selectedTimeframe}
      />
      <TrackerList selectedTimeframe={selectedTimeframe} />
    </div>
  );
};

export default Dashboard;
