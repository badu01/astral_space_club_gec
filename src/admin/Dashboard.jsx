import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import {
  fetchEvents,
  deleteEvent,
} from "../services/supabaseEvents";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  // Load events on page load
  useEffect(() => {
    const loadEvents = async () => {
      const data = await fetchEvents();
      setEvents(data);
    };
    loadEvents();
  }, []);

  // Handle updating an event
  const handleUpdate = async (event) => {
    // const updatedName = prompt("Enter new event name:");
    // if (updatedName) {
    //   const success = await updateEvent(id, { name: updatedName });
    //   if (success) {
    //     setEvents(
    //       events.map((event) =>
    //         event.id === id ? { ...event, name: updatedName } : event
    //       )
    //     );
    //   }
    // }

    navigate('/update',{state:{eventdata:event}})
  };

  // Handle deleting an event
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      const success = await deleteEvent(id);
      if (success) {
        setEvents(events.filter((event) => event.id !== id));
      }
    }
  };

  return (
    <div className="min-h-screen font-space bg-[#0B0B0B] font-space text-white">
      <div className="p-6 flex justify-between items-center">
        <h1 className="text-3xl text-white font-bold">Dashboard</h1>
        <button
          onClick={() => {
            navigate("/addevent");
          }}
          className="flex gap-2 bg-[#A64AED] items-center px-2 py-1.5 rounded-sm"
        >
          <Plus></Plus>
          <h1>Add Event</h1>
        </button>
      </div>
      <div className="px-6">
        <div>
          <h1>all events</h1>
        </div>
        <div className="pt-4">
          {events.map((evnt) => (
            <div key={evnt.id} className="">
              <div className="w-full">
                <img
                  src={evnt.posterImage}
                  alt="Preview"
                  className="w-full h-full inset-0  rounded-lg"
                />
              </div>
              <div className="py-3">
                <h1 className="text-2xl">{evnt.name}</h1>
                <h1>{evnt.description}</h1>
                <h1>{evnt.dates}</h1>
                <h1>{evnt.registrationLink}</h1>
                <div className=" flex justify-between gap-2 py-2">
                  <button
                    className="h-8 w-full rounded-sm bg-gray-700 text-red-400 items-center"
                    onClick={() => handleDelete(evnt.id)}
                  >
                    delete
                  </button>
                  <button
                    className="h-8 w-full rounded-sm bg-gray-700 text-green-300 items-center"
                    onClick={() => handleUpdate(evnt)}
                  >
                    update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
