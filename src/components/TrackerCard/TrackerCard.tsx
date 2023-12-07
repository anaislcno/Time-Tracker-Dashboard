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
};

const TrackerCard = ({ data, color }: CardProps) => {
  const colorCard = { color };
  const { title, timeframes } = data;
  const { current: currentHours, previous: previousHours } = timeframes.weekly;

  return (
    <div className={`tracker-card ${colorCard.color}`}>
      <div className="background">{/* <img src="" /> */}</div>
      <div className="tracker-infos">
        <div>
          <h2>{title}</h2>
          <p className="tracker-hours">{`${currentHours}hrs`}</p>
        </div>
        <div className="tracker-infos__blue">
          <p className="dot-cta">...</p>
          <p>{`Last Week - ${previousHours}hrs`}</p>
        </div>
      </div>
    </div>
  );
};

export default TrackerCard;
