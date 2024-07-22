import React from "react";

const Alarm = ({ time, dayOfWeek, onDelete, onSnooze, snoozeCount }) => {
  return (
    <div>
      <span>
        Alarm set for {time} on {dayOfWeek}
      </span>
      {snoozeCount > 0 && <button onClick={onSnooze} disabled={snoozeCount >= 3}>
        Snooze
      </button>}
      <button onClick={onDelete}>Delete</button>
      <span>Snooze count: {snoozeCount}</span>
    </div>
  );
};

export default Alarm;
