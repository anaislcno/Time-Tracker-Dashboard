import data from "./../../data/data.json";
import TrackerCard from "../TrackerCard/TrackerCard";

const TrackerCardList = () => {
  console.log(data);
  return (
    <div>
      {data.map((item, index) => (
        <TrackerCard key={index} data={item} />
      ))}
    </div>
  );
};

export default TrackerCardList;
