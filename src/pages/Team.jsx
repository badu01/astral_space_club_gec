function Team() {
  return (
    <section
      id="events"
      className="h-screen w-screen bg-[#0B0B0B] text-white font-space overflow-hidden "
    >
      <div className="flex flex-row justify-between overflow-hidden">
        <div className="flex w-16 pb-28 justify-center items-end lg:justify-end lg:p-14 lg:pb-20 border-r border-gray-400/50 lg:max-w-3xl lg:w-3xl h-screen">
          <h1 className="font-bold text-3xl lg:text-6xl lg:mb-8 -rotate-90 text-nowrap lg:rotate-0 lg:text-wrap">
            the team.
          </h1>
        </div>
        <div className=" w-full pl-10 py-10 flex flex-col lg:flex-col overflow-auto no-scrollbar justify-between max-h-[95vh] lg:max-h-[90vh]">
          <div className="h-fit">
            <h1 className="text-4xl mb-6 font-medium">core team</h1>
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="team_card">
                <div
                  className="h-72 w-64 bg-cover my-3 bg-center grayscale hover:grayscale-0 transition-all duration-100"
                  style={{
                    backgroundImage:
                      "url(https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D)",
                  }}
                ></div>
                <h1 className="text-2xl">Badusha Pareed</h1>
                <h1 className="text-gray-400">creative lead</h1>
              </div>
              <div className="team_card">
                <div
                  className="h-72 w-64 bg-cover my-3 bg-center grayscale hover:grayscale-0 transition-all duration-100"
                  style={{
                    backgroundImage:
                      "url(https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D)",
                  }}
                ></div>
                <h1 className="text-2xl">Badusha Pareed</h1>
                <h1 className="text-gray-400">creative lead</h1>
              </div>
            </div>
          </div>

          <div className="h-fit mt-7">
            <h1 className="text-4xl mb-6 font-medium">supporting team</h1>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="team_card">
                <div
                  className="h-56 w-48 bg-cover my-3 bg-center grayscale hover:grayscale-0 transition-all duration-100"
                  style={{
                    backgroundImage:
                      "url(https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D)",
                  }}
                ></div>
                <h1 className="text-xl">Badusha Pareed</h1>
                <h1 className="text-gray-400">creative lead</h1>
              </div>
              <div className="team_card">
                <div
                  className="h-56 w-48 bg-cover my-3 bg-center grayscale hover:grayscale-0 transition-all duration-100"
                  style={{
                    backgroundImage:
                      "url(https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D)",
                  }}
                ></div>
                <h1 className="text-xl">Badusha Pareed</h1>
                <h1 className="text-gray-400">creative lead</h1>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Team;
