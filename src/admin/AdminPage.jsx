import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import AdminDashboard from "./Dashboard";
import AdminAuth from "./AdminAuth";

function AdminPage() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
    };

    checkAuth();

    // Listen for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth event:", event);
      setSession(session); // Ensure UI updates
    });

    // Cleanup listener on unmount
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (session === null) {
    return <AdminAuth />;
  }

  return <AdminDashboard />;
}

export default AdminPage;
