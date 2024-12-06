/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/captaincontext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Captainsignup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState(''); // State for vehicle type

  const { setCaptian } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType.toLowerCase(), // Convert to lowercase for backend compatibility
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captain/register`,
        captainData
      );
      if (response.status === 201) {
        const data = response.data;
        setCaptian(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captainhome');
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        console.error('Error:', error.response.data.message);
        alert(error.response.data.message[0]?.msg || 'Something went wrong!');
      } else {
        console.error('Error:', error.message);
        alert('Unable to register. Please try again.');
      }
    }

    // Reset form fields
    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-20 mb-6"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your Name?</h3>
          <div className="flex gap-4 mb-6">
            <input
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
              type="text"
              required
              placeholder="Enter your First Name"
            />
            <input
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
              type="text"
              required
              placeholder="Enter your Last Name"
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="email"
            required
            placeholder="Enter your email"
          />
          <h3 className="text-lg font-medium mb-2">What's your password?</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="password"
            required
            placeholder="Enter your password"
          />

          {/* Vehicle Information Section */}
          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-4 mb-6">
            <input
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              className="bg-[#eeeeee] w-1/3 rounded px-4 py-2 border text-base placeholder:text-sm"
              type="text"
              required
              placeholder="Vehicle Color"
            />
            <input
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              className="bg-[#eeeeee] w-1/3 rounded px-4 py-2 border text-base placeholder:text-sm"
              type="text"
              required
              placeholder="Vehicle Plate"
            />
            <input
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              className="bg-[#eeeeee] w-1/3 rounded px-4 py-2 border text-base placeholder:text-sm"
              type="number"
              required
              placeholder="Vehicle Capacity"
            />
          </div>
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            required
          >
            <option value="" disabled>
              Select Vehicle Type
            </option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="auto">Auto</option>
          </select>

          <button
            className="bg-[#111] text-white mb-7 rounded px-4 py-2 w-full text-sm font-semibold placeholder:text-sm"
          >
            Sign up
          </button>
          <p className="text-center">
            Already have an account?
            <Link to="/captain-login" className="text-blue-600">
              Sign in
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          By proceeding, you consent to receiving calls, WhatsApp or SMS/RCS
          messages, including by automated means, from Uber and its affiliates
          to the number provided.
        </p>
      </div>
    </div>
  );
};

export default Captainsignup;
