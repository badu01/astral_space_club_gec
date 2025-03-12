import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { insertEvent } from "../services/supabaseEvents";

function AddEvent() {
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    dates: "",
    registrationLink: "",
    posterFile: null,
  });

  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEventData({ ...eventData, posterFile: file });

      // Generate preview URL
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // 🔹 Ensure user is authenticated before uploading
    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData.session) {
      alert("You must be logged in to upload images.");
      return;
    }
  
    if (!eventData.posterFile) {
      alert("Please upload a poster image.");
      return;
    }
  
    try {
      const fileName = `${Date.now()}-${eventData.name}`;
  
      const { error: fileError } = await supabase.storage
        .from("poster-sample")
        .upload(`private/${fileName}`, eventData.posterFile, { cacheControl: "3600", upsert: false });
  
      if (fileError) {
        console.error("Error uploading file:", fileError);
        alert("File upload failed!");
        return;
      }
  
      // 🔹 Get the correct public URL
      const { data: urlData } = supabase.storage.from("poster-sample").getPublicUrl(`private/${fileName}`);
      const publicUrl = urlData.publicUrl;
      
      
      if (!publicUrl) {
        console.error("Failed to get image URL");
        return;
      }
  
      // 🔹 Store event details in database
      const { error } = await insertEvent({
        name: eventData.name,
        description: eventData.description,
        dates: eventData.dates.split(",").map((date) => date.trim()),
        registrationLink: eventData.registrationLink,
        posterImage: publicUrl,
      })
  
      if (error) {
        console.error("Error adding event:", error);
      } else {
        alert("Event Added Successfully!");
      }
    } catch (error) {
      console.error("Unexpected Error:", error);
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0B0B0B] font-space text-white">
      <div className="p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Add Event</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Event Name"
            className="p-3 rounded bg-gray-700 focus:outline-none"
            onChange={(e) =>
              setEventData({ ...eventData, name: e.target.value })
            }
          />
          <textarea
            placeholder="Description"
            className="p-3 rounded bg-gray-700 focus:outline-none"
            onChange={(e) =>
              setEventData({ ...eventData, description: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Dates (comma-separated)"
            className="p-3 rounded bg-gray-700 focus:outline-none"
            onChange={(e) =>
              setEventData({ ...eventData, dates: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Registration Link"
            className="p-3 rounded bg-gray-700 focus:outline-none"
            onChange={(e) =>
              setEventData({ ...eventData, registrationLink: e.target.value })
            }
          />

          { !preview &&
            <div className="rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="w-full">
                  <div className="relative h-48 rounded-lg border-2 border-blue-500 bg-gray-700 flex justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className="absolute flex flex-col items-center">
                      <img
                        alt="File Icon"
                        className="mb-3 size-20"
                        src="https://img.icons8.com/?size=100&id=glkcCL95mj1v&format=png&color=000000"
                      />
                      <span className="block text-gray-500 font-semibold">
                        Drag &amp; drop your poster here
                      </span>
                      <span className="block text-gray-400 font-normal mt-1">
                        or click to upload
                      </span>
                    </div>

                    <input
                      className="h-full w-full opacity-0 cursor-pointer"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          }
          {preview && (
            <div className="w-full">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full inset-0  rounded-lg"
              />
            </div>
          )}
          <button
            type="submit"
            className="bg-[#A64AED] p-3 rounded-lg text-white hover:bg-blue-500 transition"
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEvent;
