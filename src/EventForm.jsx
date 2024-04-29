import React, { useState } from 'react';

function EventForm({ onAddEvent }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [note, setNote] = useState('');
  const [notificationTime, setNotificationTime] = useState('');
  const [customNotificationTime, setCustomNotificationTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      date: new Date(date),
      title,
      startTime,
      endTime,
      note,
      notificationTime,
      customNotificationTime,
    };
    onAddEvent(newEvent);
    setTitle('');
    setDate('');
    setStartTime('');
    setEndTime('');
    setNote('');
    setNotificationTime('');
    setCustomNotificationTime('');
  };

  return (
    <div className="my-4">
      <h2 className="text-2xl text-blue-950 bg-zinc-300 p-1 font-bold font-serif  mb-5">Create Event</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 p-2 mb-2 w-full"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-gray-300 p-2 mb-2 w-full"
        />
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="border border-gray-300 p-2 mb-2 w-full"
        />
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="border border-gray-300 p-2 mb-2 w-full"
        />
        <textarea
          placeholder="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="border border-gray-300 p-2 mb-2 w-full"
        ></textarea>
        <label className="block mb-2">Notification Time:</label>
        <select
          value={notificationTime}
          onChange={(e) => setNotificationTime(e.target.value)}
          className="border border-gray-300 p-2 mb-2 w-full"
        >
          <option value="">Select Notification Time</option>
          <option value="15">15 minutes before</option>
          <option value="60">1 hour before</option>
          <option value="1440">1 day before</option>
          <option value="custom">Select a specific date & time</option>
        </select>
        {notificationTime === 'custom' && (
          <input
            type="datetime-local"
            value={customNotificationTime}
            onChange={(e) => setCustomNotificationTime(e.target.value)}
            className="border border-gray-300 p-2 mb-2 w-full"
          />
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full"
        >
          Create Event
        </button>
      </form>
    </div>
  );
}

export default EventForm;
