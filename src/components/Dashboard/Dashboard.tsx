import UserCard from "../UserCard/UserCard";
import TrackerList from "../TrackerList/TrackerList";
import { useState } from "react";

const Dashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>("weekly");

  const handleTimeframeChange = (timeframe: string) => {
    setSelectedTimeframe(timeframe);
  };

  return (
    <div>
      <UserCard handleTimeframeChange={handleTimeframeChange} />
      <TrackerList selectedTimeframe={selectedTimeframe} />
    </div>
  );
};

export default Dashboard;
