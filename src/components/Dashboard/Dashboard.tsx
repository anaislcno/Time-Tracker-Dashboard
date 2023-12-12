import { useState } from "react";
import UserCard from "../UserCard/UserCard";
import TrackerList from "../TrackerList/TrackerList";

const Dashboard = () => {
  // const [selectedTimeframe, setSelectedTimeframe] = useState<string>("Weekly");
  // const handleTimeframeChange = (timeframe: string) => {
  //   selectedTimeframe(timeframe);
  // };

  return (
    <div>
      <UserCard />
      <TrackerList />
    </div>
  );
};

export default Dashboard;
