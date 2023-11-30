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
};

const TrackerCard = ({ data }: CardProps) => {
  const { title, timeframes } = data;
  const { current: currentHours, previous: previousHours } = timeframes.weekly;

  return (
    <div className="tracker-card">
      <div className="background">
        <img src="" />
      </div>
      <div className="tracker-infos">
        <div>
          <h2>{title}</h2>
          <p>{`${currentHours}hrs`}</p>
        </div>
        <div className="tracker-infos__blue">
          <p>...</p>
          <p>{`Last Week - ${previousHours}hrs`}</p>
        </div>
      </div>
    </div>
  );
};

export default TrackerCard;
