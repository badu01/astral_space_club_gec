import { NavLink,useLocation, useNavigate } from "react-router-dom";

function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation();
  const page = location.pathname;
  const isHome = page === '/';
  return (
    <>
      <nav className={`hidden ${isHome ? "bg-transparent" : "bg-[#0B0B0B]"} ${page === '/404' || page ===  '/admin' || page === '/addevent' ? 'lg:hidden' : 'flex'} fixed bottom-0 left-0 w-full border-t border-t-gray-400/50 text-white p-4 md:flex justify-between items-center md:justify-between px-10 py-2 gap-10 font-space z-50`}>
        <img src={`${import.meta.env.BASE_URL}space_club_logo.png`} className="h-14"  alt="space club logo" />
        <div className="flex gap-12">

        <NavLink to="/" className="nav-item">
          <h1 className={`text-xl ${page === '/' ? 'font-bold text-[#EC74FF]' : 'font-thin'} `}>home</h1>
        </NavLink>
        <NavLink to="/about" className="nav-item">
        <h1 className={`text-xl ${page === '/about' ? 'font-bold text-[#EC74FF]' : 'font-thin'} `}>about</h1>
        </NavLink>
        <NavLink to="/events" className="nav-item">
        <h1 className={`text-xl ${page === '/events' ? 'font-bold text-[#EC74FF]' : 'font-thin'} `}>events</h1>
        </NavLink>
        <NavLink to="/team" className="nav-item">
        <h1 onDoubleClick={()=>{navigate("/admin")
        }} className={`text-xl ${page === '/team' ? 'font-bold text-[#EC74FF]' : 'font-thin'} `}>team</h1>
        </NavLink>
        </div>
        
      </nav>

      <nav className={`fixed ${isHome ? "bg-transparent" : "bg-[#0B0B0B]"} ${page === '/404' || page === '/admin' || page === '/addevent'? 'hidden' : 'flex'}  bottom-0 pb-2 border-t border-t-gray-400/50 pt-2 left-0 w-full h-fit text-white px-5 flex justify-between md:hidden font-space`}>
        <NavLink
          to="/"
          className="nav-item col-start-1 row-start-1 justify-self-start"
        >
          <h1 className={`text-lg ${page === '/' ? 'font-bold ' : 'font-thin'} `}>home</h1>
        </NavLink>
        <NavLink
          to="/about"
          className="nav-item col-start-2 row-start-1 justify-self-end"
        >
          <h1 className={`text-lg ${page === '/about' ? 'font-bold ' : 'font-thin'} `}>about</h1>
        </NavLink>
        <NavLink
          to="/events"
          className="nav-item col-start-1 row-start-2 justify-self-start"
        >
          <h1 className={`text-lg ${page === '/events' ? 'font-bold ' : 'font-thin'} `}>events</h1>
        </NavLink>
        <NavLink
          to="/team"
          className="nav-item col-start-2 row-start-2 justify-self-end"
        >
          <h1 className={`text-lg ${page === '/team' ? 'font-bold ' : 'font-thin'} `}>team</h1>
        </NavLink>
      </nav>
    </>
  );
}

export default BottomNav;
