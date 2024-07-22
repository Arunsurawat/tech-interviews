import React, { useState, useEffect } from "react";
import Alarm from "./Alarm";

const AlarmManager = () => {
  const [alarms, setAlarms] = useState([]);
  const [time, setTime] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [ringing, setRinging] = useState(null);

  const addAlarm = () => {
    setAlarms([...alarms, { time, dayOfWeek, snoozeCount: 0, isActive: true }]);
  };

  const deleteAlarm = (index) => {
    const newAlarms = alarms.filter((_, i) => i !== index);
    setAlarms(newAlarms);
    if (ringing && ringing.index === index) {
      setRinging(null);
    }
  };

  const snoozeAlarm = (index) => {
    const newAlarms = alarms.map((alarm, i) => {
      if (i === index) {
        const [hours, minutes] = alarm.time.split(":").map(Number);
        const newTime = new Date();
        newTime.setHours(hours);
        newTime.setMinutes(minutes + (alarm.snoozeCount + 1) * 5);
        return {
          ...alarm,
          time: newTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          snoozeCount: alarm.snoozeCount + 1,
        };
      }
      return alarm;
    });
    setAlarms(newAlarms);
    setRinging(null); // Stop ringing
  };

  useEffect(() => {
    const checkAlarms = () => {
      const currentTime = new Date();
      const currentDay = currentTime.toLocaleDateString("en-US", {
        weekday: "long",
      });
      const currentTimeStr = currentTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });


     
      
      alarms.forEach((alarm, index) => {
        console.log("alarm ==>",alarm )
        console.log("currentTimeStr ==>", currentTimeStr);
        console.log("currentDay ==>", currentDay);
        
        if (
          alarm.time == currentTimeStr &&
          alarm.dayOfWeek == currentDay &&
          alarm.isActive
        ) {
                  console.log({ alarm });
             console.log({ currentTimeStr });
             console.log({ currentDay });
          setRinging({ ...alarm, index });
        }
      });
    };

    const timer = setInterval(checkAlarms, 1000);
    return () => clearInterval(timer);
  }, [alarms]);

  return (
    <div>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <input
        type="text"
        placeholder="Day of the week"
        value={dayOfWeek}
        onChange={(e) => setDayOfWeek(e.target.value)}
      />
      <button onClick={addAlarm}>Add Alarm</button>

      {ringing && (
        <div>
          <strong>ALARM RINGING!</strong>
          <div>Time: {ringing.time}</div>
          <div>Day: {ringing.dayOfWeek}</div>
          <button onClick={() => snoozeAlarm(ringing.index)}>Snooze</button>
          <button onClick={() => deleteAlarm(ringing.index)}>Stop</button>
        </div>
      )}

      <div>
        {alarms.map((alarm, index) => (
          <Alarm
            key={index}
            time={alarm.time}
            dayOfWeek={alarm.dayOfWeek}
            snoozeCount={alarm.snoozeCount}
            onDelete={() => deleteAlarm(index)}
            onSnooze={() => snoozeAlarm(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AlarmManager;
