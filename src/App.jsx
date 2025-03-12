import BottomNav from "./components/NavBar/NavBar";
import About from "./pages/About";
import AllEvents from "./pages/Events";
import Hero from "./pages/Hero";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Team from "./pages/Team";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import EventList from "./pages/EventList";
import NotFound from "./pages/NotFound";
import AddEvent from "./admin/AddEvent";
import AdminPage from "./admin/AdminPage";
import UpdateEvent from "./admin/updateEvent";
//import RoundCursor from "./components/RoundCursor/RoundCursor";

const validEventTypes = ["all", "ongoing", "upcoming"];


function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<AllEvents />} />
            <Route path="/team" element={<Team />} />
            {validEventTypes.map((type) => (
              <Route
                key={type}
                path={`/events/${type}`}
                element={<EventList type={type} />}
              />
            ))}
            <Route path="/404" element={<NotFound/>} />
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/addevent" element={<AddEvent/>} />
            <Route path="/update" element={<UpdateEvent/>} />
            <Route path="/events/*" element={<Navigate to='/404' replace/>}/>
            <Route path="*" element={<Navigate to='/404' replace/>}/>
          </Routes>
        </div>
        <BottomNav />
        <SplashCursor />
        {/* <RoundCursor/> */}
      </div>
    </Router>
  );
}

export default App;
