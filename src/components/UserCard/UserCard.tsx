import "./UserCard.css";
import UserImg from "./../../assets/images/image-jeremy.png";

const UserCard = ({
  handleTimeframeChange,
}: {
  handleTimeframeChange: (timeframe: string) => void;
}) => {
  return (
    <div className="user-container">
      <div className="user-infos">
        <img className="user-infos__img" src={UserImg} alt="user image" />
        <div className="user-infos__text">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="timeline">
        <h3
          className="btn-timeframe"
          onClick={() => handleTimeframeChange("daily")}
        >
          Daily
        </h3>
        <h3
          className="btn-timeframe"
          onClick={() => handleTimeframeChange("weekly")}
        >
          Weekly
        </h3>
        <h3
          className="btn-timeframe"
          onClick={() => handleTimeframeChange("monthly")}
        >
          Monthly
        </h3>
      </div>
    </div>
  );
};

export default UserCard;
