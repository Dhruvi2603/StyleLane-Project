import React from 'react';
import team1_img from '../componenets/assets/team1.jpg';

const ContactUs = () => {
  return (
    <>
    <div>
      <img src={team1_img} alt="" />
    </div>
    <div className=" lg:py-20 bg-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center mx-10">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 lg:mr-20">
          <h2 className="text-3xl font-bold mb-4">Don't be a stranger!</h2>
          <h1 className="text-5xl font-bold mb-4">You tell us. We listen.</h1>
          <p className="text-lg mb-4">
            Cras elementum finibus lacus nec lacinia. Quisque non convallis nisl, eu condimentum sem.
            Proin dignissim libero lacus, ut eleifend magna vehicula et. Nam mattis est sed tellus.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                NAME
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                SUBJECT
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                EMAIL
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                MESSAGE
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Message"
                rows="4"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default ContactUs;
