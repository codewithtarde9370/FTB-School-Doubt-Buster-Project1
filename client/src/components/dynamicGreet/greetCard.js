import React, { useEffect, useState } from 'react';
import './greetCard.css';
import logo from './logo.png'

function GreetingCard() {
    const [greeting, setGreeting] = useState("");
    const [time, setTime] = useState("");
    const [greetDate, setGreetDate] = useState("");

    useEffect(() => {
        const updateTimeAndGreeting = () => {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const formattedHours = hours % 12 || 12;
            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
            const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
            const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const dateString = `${day}/${month}/${year}`;

            let greetingMessage = "";
            if (hours >= 5 && hours < 12) {
                greetingMessage = "Good Morning!";
            } else if (hours >= 12 && hours < 17) {
                greetingMessage = "Good Afternoon!";
            } else if (hours >= 17 && hours < 22) {
                greetingMessage = "Good Evening!";
            } else {
                greetingMessage = "Good Night!";
            }

            setTime(timeString);
            setGreetDate(dateString);
            setGreeting(greetingMessage);
        };

        updateTimeAndGreeting();
        const interval = setInterval(updateTimeAndGreeting, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="greeting-header">
            <img src={logo} height={'50px'}/>
            <div className="greeting-content">
                <h1 className="greet">{greeting}</h1>
                <div className="time-date-wrapper">
                    <h4 className="time">{time}</h4>
                    <span className="separator">|</span>
                    <h4 className="date">{greetDate}</h4>
                </div>
            </div>
        </header>
    );
}

export default GreetingCard;
