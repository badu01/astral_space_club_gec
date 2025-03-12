import {events} from './dummyEvents'

const today = new Date().toISOString().split("T")[0];


export const filteredEvents = (type) => {
  return events.filter((event) => {
    const eventDates = event.dates.map((date) => new Date(date));
    if (type === "ongoing") {
      return eventDates.some((date) => date.toISOString().split("T")[0] === today);
    } else if (type === "upcoming") {
      return eventDates.some((date) => date > new Date(today));
    }
    return true;
  });
};
