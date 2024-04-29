import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

const holidaysData = [
  { date: new Date(2024, 3, 12) },
  { date: new Date(2024, 3, 13) },
  { date: new Date(2024, 4, 1) },
];

const isHoliday = (date) => {
  return holidaysData.some((holiday) => isSameDay(holiday.date, date));
};

const isSameDay = (date1, date2) => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

function Calender({ events, setEvents }) {
  const [dateState, setDateState] = useState(new Date());

  const changeDate = (date) => {
    setDateState(date);
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      let content = null;
      const eventsForDate = events.filter((event) => isSameDay(event.date, date));
      if (eventsForDate.length > 0) {
        content = (
          <div className="flex flex-col items-center">
            {eventsForDate.map((event, index) => (
              <div key={index} className="bg-green-500 rounded-full p-1 text-center mb-1">
                <span className="sr-only">{event.title}</span>
              </div>
            ))}
          </div>
        );
      } else if (isHoliday(moment(date).toDate())) {
        content = (
          <div className="bg-red-500 rounded-full p-1 text-center">
            <span className="sr-only">{moment(date).format('MMMM Do YYYY')}</span>
          </div>
        );
      }
      return content;
    }
  };

  return (
    <div className='mb-4 flex justify-center '>
      <ReactCalendar
        value={dateState}
        onChange={changeDate}
        tileContent={tileContent}
      />
    </div>
  );
}

export default Calender;
