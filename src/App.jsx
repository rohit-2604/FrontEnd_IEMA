import { ArrowUp, ChevronRight, Menu, Play } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="bg-[#5E52B8] text-white min-h-screen p-6 ">
      <div className='bg-[#0A0E1A] text-white min-h-2 p-8 border border-[#1d164e] rounded-3xl'>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {/* Header */}
        <div className="col-span-full flex justify-between items-center mb-6 pt-4">

          <div className="text-4xl font-bold text-purple-400 pt-6">S</div>
          <Menu className="text-gray-400  " />
        {/* Main content */}
        </div>
        <div className="col-span-full lg:col-span-2 lg:row-span-2 flex flex-col justify-center  shadow-lg  shadow-[rgba(89,82,142,0.5)] bg-custom-gradient h-102 rounded-3xl ">
          <div className='pt-52 '>
          <h1 className="text-5xl font-bold mb-4  ">
          <span className="text-5xl font-bold pl-6">Chart Your </span>
          <span className="text-5xl font-bold flex pl-6">Course with </span>
          <span className="text-5xl font-bold pl-6">Sway Funded </span>
             
            </h1>
          <p className="text-gray-400 mb-6 pl-6">Where Every Move Counts</p>
          <div className='pl-6'>

          <button className="bg-[#5749C4] text-white py-2 px-4 rounded-full w-max  ">
            Take a challenge
          </button>
          </div>
          </div>
         
        </div>

        {/* Access card and Revenue graph */}
        <div className="col-span-full md:col-span-1 space-y-6">
          {/* Access card */}
          <div className="bg-[#5749C4] rounded-3xl p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-key-round"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/></svg>
              </div>
              <ChevronRight className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Access</h2>
              <p className="text-sm text-purple-200">
                Exclusive Affiliate Dashboard equipped with live tracking and advanced analytics features
              </p>
            </div>
          </div>

          {/* Revenue graph */}
          <div className="bg-[#252543] rounded-3xl p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-gray-400 text-sm">Complete revenue</p>
                <p className="text-2xl font-bold">2024 year</p>
              </div>
              <div className="bg-green-500 text-black text-sm py-1 px-2 rounded-full flex items-center">
                <ArrowUp className="w-4 h-4 mr-1" />
                4.73%
              </div>
            </div>
            <div className="h-40 bg-purple-900 rounded-lg"></div>
          </div>
        </div>

        {/* Achievable Targets */}
        <div className="col-span md:col-span-1 bg-[#252543] rounded-3xl p-6 flex flex-col justify-between md:row-span-2 shadow-lg  shadow-[rgba(89,82,142,0.5)]  ">
          <div className="bg-[#252543] rounded-
          2xl  flex flex-col justify-between bg-custom-gradient h-102 rounded-3xl   ">
            <div className='bg-custom-gradient h-102 rounded-3xl '>
              <div className="flex justify-between items-center mb-6  ">
                <h3 className="text-xl font-bold p-6">Achievable Targets</h3>
                <Play className="text-white " />
              </div>
              <p className="text-sm text-gray-400 mb-6 p-6">
                Set and conquer goals effortlessly. Achieve success with realistic targets goals effortlessly. Achieve success with realistic targets
              </p>
            <div className="flex justify-between items-center pt-20 p-6">
              <div className="w-16 h-1 bg-purple-600 rounded-full "></div>
              <p className="text-sm text-gray-400  ">1/4</p>
            </div>
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Profitable traders */}

            {/* More stats */}
            <div className="bg-[#18192E] rounded-3xl p-6 overflow-hidden">
              <h3 className="text-4xl font-bold mb-2 bg-[#18192E] rounded-3xl justify-start">$934m</h3>
              <p className="text-gray-400 text-sm bg-[#18192E]">Revenue trading capital by Sway people</p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-500 -ml-2 first:ml-0"></div>
                ))}
                <div className="w-8 h-8 rounded-full bg-purple-600 -ml-2 flex items-center justify-center">
                  <span className="text-xs">+99</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center overflow-hidden">
              <div className="relative w-32 h-32 ">
                <svg className="w-full h-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#e6e6e6" strokeWidth="2"></circle>
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="100 100" strokeDashoffset="5"></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-500">95%</span>
                </div>
              </div>
              <p className="text-blue-500 text-center mt-4">
                Profitable traders<br />in 1st year
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-[#252543] rounded-3xl p-6">
          <h3 className="text-4xl font-bold mb-2">102k</h3>
          <p className="text-gray-400 text-sm">People in Sway community</p>
          <div className="flex mt-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gray-500 -ml-2 first:ml-0"></div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}