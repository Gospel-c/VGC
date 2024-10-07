import { useState, useEffect } from 'react';
import background from "../../assets/img/islamic-bg.png";
import solarTicket from "../../assets/img/solar-ticket.png"
import mosque from "../../assets/img/ph_mosque-thin.png"
import calender from "../../assets/img/uit_calender.png"
import "./countdown.css";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className='countdown-container' style={{ 
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }}>
        <div className='countdown-text'>
            <h2>We would see you in</h2>
            <div className='venue'>
                <div>
                    <img src={mosque} alt="mosque image" />
                    <p>VGC Mosque</p>
                </div>
                <div>
                    <img src={calender} alt="calender" />
                    <p>28th Dec 2024</p>
                </div>
            </div>
            <button className="cta-btn2">Get your Ticket! <img className="cta-btn2-img" src={solarTicket} alt="" /></button>
        </div>
        <div className="countdown">
            <div className="time">
                <div className="time-block">
                <span className="time-value">{timeLeft.days || 0}</span>
                <span className="time-label">Days</span>
                </div>
                <div className="time-block">
                <span className="time-value">{timeLeft.hours || 0}</span>
                <span className="time-label">Hours</span>
                </div>
                <div className="time-block">
                <span className="time-value">{timeLeft.minutes || 0}</span>
                <span className="time-label">Minutes</span>
                </div>
                <div className="time-block">
                <span className="time-value">{timeLeft.seconds || 0}</span>
                <span className="time-label">Seconds</span>
                </div>
            </div>
            {Object.keys(timeLeft).length === 0 && (
                <span className="countdown-ended">Time's up!</span>
            )}
        </div>
    </div>
  );
};

export default Countdown;
