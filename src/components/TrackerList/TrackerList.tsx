import data from "./../../data/data.json";
import TrackerCard from "../TrackerCard/TrackerCard";
import { useState } from "react";

enum CategoryColor {
  work = "work",
  play = "play",
  study = "study",
  exercise = "exercise",
  social = "social",
  selfcare = "selfcare",
  default = "default",
}

function getColorById(title: string): CategoryColor {
  switch (title) {
    case "Work":
      return CategoryColor.work;
    case "Play":
      return CategoryColor.play;
    case "Study":
      return CategoryColor.study;
    case "Exercise":
      return CategoryColor.exercise;
    case "Social":
      return CategoryColor.social;
    case "Self Care":
      return CategoryColor.selfcare;
    default:
      return CategoryColor.default;
  }
}

enum CategoryImg {
  work = "work",
  play = "play",
  study = "study",
  exercise = "exercise",
  social = "social",
  selfcare = "selfcare",
  default = "default",
}

function getImgById(title: string): CategoryImg {
  switch (title) {
    case "Work":
      return CategoryImg.work;
    case "Play":
      return CategoryImg.play;
    case "Study":
      return CategoryImg.study;
    case "Exercise":
      return CategoryImg.exercise;
    case "Social":
      return CategoryImg.social;
    case "Self Care":
      return CategoryImg.selfcare;
    default:
      return CategoryImg.default;
  }
}

const TrackerCardList = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedTimeframe, setSelectedTimeframe] = useState("weekly");
  console.log(data);
  return (
    <div>
      {data.map((item, index) => (
        <TrackerCard
          key={index}
          data={item}
          color={getColorById(item.title)}
          img={getImgById(item.title)}
          selectedTimeframe={selectedTimeframe}
        />
      ))}
    </div>
  );
};

export default TrackerCardList;
