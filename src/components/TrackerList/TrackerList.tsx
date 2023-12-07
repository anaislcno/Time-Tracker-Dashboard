import data from "./../../data/data.json";
import TrackerCard from "../TrackerCard/TrackerCard";

enum CategoryColor {
  orange = "orange",
  blue = "blue",
  red = "red",
  green = "green",
  violet = "violet",
  yellow = "yellow",
  default = "default",
}

function getColorById(title: string): CategoryColor {
  switch (title) {
    case "Work":
      return CategoryColor.orange;
    case "Play":
      return CategoryColor.blue;
    case "Study":
      return CategoryColor.red;
    case "Exercise":
      return CategoryColor.green;
    case "Social":
      return CategoryColor.violet;
    case "Self Care":
      return CategoryColor.yellow;
    default:
      return CategoryColor.default;
  }
}

const TrackerCardList = () => {
  console.log(data);
  return (
    <div>
      {data.map((item, index) => (
        <TrackerCard key={index} data={item} color={getColorById(item.title)} />
      ))}
    </div>
  );
};

export default TrackerCardList;
