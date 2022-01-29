import React from 'react';

import EventCalendar from 'react-event-calendar';

const CalendarComponent = () => {
  const events = [
    {
      start: '2015-07-20',
      end: '2015-07-02',
      eventClasses: 'optionalEvent',
      title: 'test event',
      description: 'This is a test description of an event',
    },
    {
      start: '2015-07-19',
      end: '2015-07-25',
      title: 'test event',
      description: 'This is a test description of an event',
      data: 'you can add what ever random data you may want to use later',
    },
  ];
  return <EventCalendar month={7} year={2015} events={events} />;
};

export default CalendarComponent;
