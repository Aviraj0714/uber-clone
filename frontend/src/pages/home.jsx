import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import Locationpanel from '../components/locationpanel';
const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panel = useRef(null);
  const panelcloseRef = useRef(null)

  useEffect(() => {
    // GSAP animation when panelOpen state changes
    if (panelOpen) {
      gsap.to(panel.current, {
        height: '70%',
        duration: 0.5,
        ease: 'power2.out',
      }),gsap.to(panelcloseRef.current,{
        opacity:1
      })
    } else {
      gsap.to(panel.current, {
        height: '0%',
        duration: 0.5,
        ease: 'power2.in',
      }),gsap.to(panelcloseRef.current,{
        opacity:0
      })
    }
  }, [panelOpen]);

  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission
    setPanelOpen(!panelOpen); // Toggle panel state
  };

  return (
    <div className="h-screen relative">
      {/* Logo */}
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber Logo"
      />

      {/* Background Image */}
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt="Background"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-end top-0 h-screen absolute w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5 ref={panelcloseRef} onClick={()=>{
            setPanelOpen(false)
          }} className='absolute opacity-0 top-6 text-2xl right-6'>
            <i className='ri-arrow-down-wide-line'></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a Trip</h4>
          <form onSubmit={submitHandler}>
            {/* Pickup Input */}
            <div className="line absolute h-16 w-1 top-[43%] rounded-full left-10 bg-black"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eeee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pickup-location"
            />

            {/* Destination Input */}
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eeee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        {/* Animated Panel */}
        <div
          ref={panel}
          className="h-0  bg-white transition-all duration-500 overflow-hidden"
        >
          <Locationpanel></Locationpanel>
         
        </div>
      </div>
    </div>
  );
};

export default Home;
