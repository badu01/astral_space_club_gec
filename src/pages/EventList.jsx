/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useParams } from "react-router-dom";
import EventListCard from "../components/EventListCard/EventListCard";
import { filteredEvents } from "../utils/EventsFilter";

function EventList(props) {
  const { type } = props
  const eventsToShow = filteredEvents(type);

  return (
    <>
      <section
        id="event_list"
        className="h-screen w-screen bg-[#0B0B0B] text-white font-space overflow-hidden"
      >
        <div className="flex flex-row justify-between">
          <div className={`flex w-16 justify-center ${type === 'all' ? 'pb-6' : type === 'upcoming'  ? 'pb-20' : "pb-16"} items-end lg:justify-end lg:p-14 lg:pb-20 border-r border-gray-400/50 lg:max-w-3xl lg:w-3xl h-[95vh]`}>
            <h1 className="font-bold text-3xl lg:text-6xl lg:mb-8 -rotate-90 text-nowrap lg:rotate-0 lg:text-wrap">
              {type}.
            </h1>
          </div>
          <div className=" w-full p-2 grid lg:grid-cols-3 pb-4 lg:pb-11 gap-3 no-scrollbar overflow-y-scroll justify-between max-h-[95vh] lg:max-h-[95vh]">
            {eventsToShow.map((events, index) => (
              <EventListCard
                key={events.id}
                name={events.name}
                desc={events.description}
                dates={events.dates}
                link={events.registrationLink}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default EventList;
