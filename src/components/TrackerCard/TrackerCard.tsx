import "./TrackerCard.css";

type TimeProps = {
  current: number;
  previous: number;
};

type DataItem = {
  title: string;
  timeframes: {
    daily: TimeProps;
    weekly: TimeProps;
    monthly: TimeProps;
  };
};

type CardProps = {
  data: DataItem;
  color: string;
  img: string;
  selectedTimeframe: string;
  setSelectedTimeframe: (timeframe: string) => void;
};

const TrackerCard = ({
  data,
  color,
  img,
  selectedTimeframe,
  setSelectedTimeframe,
}: CardProps) => {
  const colorCard = { color };
  const imgCard = { img };
  const { title, timeframes } = data;
  const selectedTimeframeData =
    timeframes[selectedTimeframe as keyof typeof timeframes];
  const { current: currentHours, previous: previousHours } =
    selectedTimeframeData;

  return (
    <div className={`tracker-card ${colorCard.color}`}>
      <div className={`background ${imgCard.img}`}></div>
      <div className="tracker-infos">
        <div>
          <h2>{title}</h2>
          <p className="tracker-hours">{`${currentHours}hrs`}</p>
        </div>
        <div className="tracker-infos__blue">
          <p className="dot-cta">&middot;&middot;&middot;</p>
          <p>{`Last Week - ${previousHours}hrs`}</p>
        </div>
      </div>
    </div>
  );
};

export default TrackerCard;
