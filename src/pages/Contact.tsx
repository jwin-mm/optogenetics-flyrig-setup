import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      {/* Mailing div */}
      <div className="absolute top-1/4 left-200 p-4 text-white  w-100">
        <h2 className="text-2xl font-bold text-black">Contact Me</h2>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-black font-medium">Email</label>
            <input type="email" className="w-full p-2 mt-1 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-black font-medium">Message</label>
            <textarea className="w-full p-2 mt-1 border border-gray-300 rounded-md" rows={4}></textarea>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-black p-2 rounded-md">
            Send Message
          </button>
        </form>
      </div>
      {/* Picture and info div, 
      image part could be bigger depending on the pictures chosen, 
      i was not sure to include phone number*/}
      <div className="absolute top-1/3 left-80 p-4 text-black flex flex-col items-center">
        <div className="w-30 h-30 rounded-full overflow-hidden mb-4">
          <img
            src="" 
            alt="Profile picture"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-2xl p-2 font-semibold">Eric Hoopfer</h3>
          <p className="text-gray-700 p-1">Phone: +0 000 000 0000</p> 
          <p className="text-gray-700 p-1">Email: ehoopfer@carleton.edu</p>
        </div>
      </div>


    </div>
  );
};

export default Contact;