import React from "react";
import "./perks.css";


const Perks = () => {
  return (
    <div className="mx-2 my-1 rounded-xl ">

      <div className="lg:flex my-10 mx-4 p-2 justify-center items-center">

        <div className="p-4 m-4 items-center h-100 w-100 bg-gradient-to-r from-red-600  to-orange-400 rounded-lg shadow-lg">
          <li className="text-3xl text-slate-200 p-2 m-2 pb-5 list-none text-center">1000+<br />Attendees</li>
        </div>

        <div className="p-4 m-4 justify-center h-100 w-100 items-center bg-gradient-to-r from-red-600  to-orange-400 rounded-lg shadow-lg">
          <li className="text-3xl text-slate-200 h-100 w-100 p-2 m-2 pb-5 list-none text-center">25+<br />Workshops</li>
        </div>
        <div className="p-4 m-4 justify-center h-100 w-100 items-center bg-gradient-to-r from-red-600  to-orange-400 rounded-lg shadow-lg">
          <li className="text-3xl text-slate-200 p-2 m-2 pb-5 list-none text-center">35+<br />Speakers</li>
        </div>
        <div className="p-4 m-4 justify-center h-100 w-100 items-center bg-gradient-to-r from-red-600  to-orange-400 rounded-lg shadow-lg">
          <li className="text-3xl text-slate-200 p-2 m-2 pb-5 list-none text-center">30+<br />Colleges</li>
        </div>
      </div>


      <div className="md:flex m-4 p-2 justify-center items-center">
        <h3 className="font-bold text-3xl mx-5 text-dark">
          Things you don't want to miss! <span className="text-black text-3xl">👀</span>
        </h3>
      </div>
      <div className="md:flex md:p-5 py-2 bg-slate-200 rounded-xl justify-space-between shadow-lg">
        <div className="container flex justify-center p-0.5 my-4 mx-3 hover:scale-110">
          <div className="content p-2 pb-8">
            <p className="text-2xl text-center">💻Technical content</p>
            <br />
            <p className="mx-2">GDSC WoW is offering you events hosted by the Google Developer Groups community,
              featuring leading experts on Google technologies in areas like Android, Firebase and so much more!
              So gear up and get ready to enjoy the process of learning with us, because it's Wonders of Wonders</p>
          </div>
        </div>
        <div className="container flex justify-center p-0.5 my-4 mx-3 hover:scale-110">
          <div className="content p-2 pb-8">
            <p className="text-2xl text-center">🛠️Workshops & Codelabs</p>
            <br />
            <p className="mx-2">Get ready to level up your skills and take your knowledge to the next level with
              our exciting workshops and Google codelabs! GDSC Wow offers a variety of hands-on learning experiences
              that will help you master new technologies, tools and techniques.</p>
          </div>
        </div>
        <div className="container flex justify-center p-0.5 my-4 mx-3 hover:scale-110">
          <div className="content p-2 pb-8">
            <p className="text-2xl text-center">🌐Networking</p>
            <br />
            <p className="mx-2">An event that big is going to open networking opportunities for you without any doubt.
              GDSC Wow is designed to facilitate networking. Whether you're looking to collaborate on a project, find new
              ideas, discuss your ideas, or simply make new friends, GDSC WoW is the perfect place to do it.</p>
          </div>
        </div>
        <div className="container flex justify-center p-0.5 my-4 mx-3 hover:scale-110">
          <div className="content p-2 pb-8">
            <p className="text-2xl text-center">🍕Swags & Refreshments</p>
            <br />
            <p className="mx-2">Get ready for an unforgettable experience with swags and refreshments that will leave you
              wanting more! From customized goodies to event t-shirts, you'll receive the ultimate giveaway items that will
              keep you connected to the event long after it's over.</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Perks;