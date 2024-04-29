import React, { useState } from 'react';
import Calendar from './Calendar';
import EventForm from './EventForm';

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-md">
        <h2 className="text-6xl font-bold mb-4 text-green-700 m-2 bg-gray-300 p-3 pl-4 text-center font-serif ">Calendar</h2>
        <Calendar events={events} />
        <EventForm onAddEvent={addEvent} />
        
      </div>
    </div>
  );
}

export default App;
