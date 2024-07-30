import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const EventCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4580/api/getAllEvents')
      .then(response => {
        console.log('Fetched Events:', response.data.data);
        const mappedEvents = response.data.data.map(event => ({
          id: event._id,
          title: event.title,
          start: new Date(event.date + 'T' + event.time),
          end: new Date(new Date(event.date + 'T' + event.time).getTime() + 60 * 60 * 1000),
          location: event.location,
          description: event.description
        }));
        console.log('Mapped Events:', mappedEvents);
        setEvents(mappedEvents);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <h1>Event Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '90vh' }}
      />
    </div>
  );
};

export default EventCalendar;