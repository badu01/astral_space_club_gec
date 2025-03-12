import { supabase } from "../utils/supabaseClient";


export const fetchEvents = async () => {
  const { data, error } = await supabase.from("sample-events").select("*");
  if (error) {
    console.error("Error fetching events:", error);
    return [];
  }
  return data;
};


export const insertEvent = async (eventData) => {
  const { error } = await supabase.from("sample-events").insert([eventData]);
  if (error) {
    console.error("Error inserting event:", error);
    return false;
  }
  return true;
};


export const updateEvent = async (id, updatedData) => {
  const { error } = await supabase.from("sample-events").update(updatedData).eq("id", id);
  if (error) {
    console.error("Error updating event:", error);
    return false;
  }
  return true;
};


export const deleteEvent = async (id) => {
  const { error } = await supabase.from("sample-events").delete().eq("id", id);
  if (error) {
    console.error("Error deleting event:", error);
    return false;
  }
  return true;
};
