import React from "react";
import "./perks.css";

const Perks = () => {
  return (
    <div className="mx-2 my-1 rounded-xl ">

      <div className="my-10">
        <div className="md:flex p-4 my-2 justify-center bg-gray-200 rounded-lg">
          <li className=" text-3xl p-2 pb-5 list-none mx-4 bg-gradient-to-r from-red-600 via-pink-500 to-orange-400 inline-block text-transparent bg-clip-text ">1000+ <br />Attendees</li>
          <li className=" text-3xl p-2 pb-5 list-none mx-4 bg-gradient-to-r  from-red-600 via-pink-500 to-orange-400 inline-block text-transparent bg-clip-text">25+ <br />Workshops</li>
          <li className=" text-3xl p-2 pb-5 list-none mx-4 bg-gradient-to-r  from-red-600 via-pink-500 to-orange-400 inline-block text-transparent bg-clip-text">35+ <br />Speakers</li>
          <li className=" text-3xl p-2 pb-5 list-none mx-4 bg-gradient-to-r  from-red-600 via-pink-500 to-orange-400 inline-block text-transparent bg-clip-text">1 <br />Day</li>
        </div>
      </div>

      <div className="flex m-4 justify-center">
        <h3 className="font-bold text-3xl mx-5 text-dark">
          Things you don't want to miss! <span className="text-black text-3xl">👀</span>
        </h3>
      </div>
      <div className="md:flex p-5 bg-slate-200 rounded-xl">
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