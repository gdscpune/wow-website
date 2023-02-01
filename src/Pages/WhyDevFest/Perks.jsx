import React from "react";

const Perks = () => {
  return (
    <div>
      <div className="grid place-items-center text-4xl text-white">
        What's there for you? 👀
      </div>

      <div className="md:flex p-3">
        <div className="flex justify-center p-3 my-4 mx-2 border-green-600">
          <div>
            <p className="text-2xl">💻Technical content</p>
            <br />
            Unlocking the best part of the most awaited intercontinental Google
            developer community, GDG Patna gives you a full package of knowledge
            and one on one interaction with global experts and technologies.
          </div>
        </div>
        <div className="flex justify-center p-3 my-4  mx-2 text-lg border-green-600">
          <div>
            <p className="text-2xl">🛠️Workshops & Codelabs</p>
            <br />A coding rendezvous with your friends plus hands-on experience
            for a day long workshop! What else could we ask for? Initiate your
            journey towards a new technology and get to learn it from experts.
          </div>
        </div>
        <div className="flex justify-center p-3 my-4  mx-2 text-lg border-green-600">
          <div>
            <p className="text-2xl">🌐Networking</p>
            <br />
            Expand your branches of knowledge and indentity further. Connect and
            collaborate with developers and tech enthusiasts on a single
            platform to create a new and exciting chapter in your and our
            timeline because our network is your networth.
          </div>
        </div>
        <div className="flex justify-center p-3 my-4  mx-2 text-lg ">
          <div>
            <p className="text-2xl">🍕👕Swags n Refreshments</p>
            <br />A long conference with empty stomach is just not fun! GDG
            Patna is making sure that your visit will surely leave a taste of
            this historic city on your mind. As a souvenir for our great
            journey, you'll also be getting some cool goodies and google badges.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perks;
