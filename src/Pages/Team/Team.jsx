import React from "react";
import { DesignTeam, LeadList, OperationTeam, TechTeam } from "./TeamList";
import git from "../../assets/Icons/git.svg";
import twitter from "../../assets/Icons/twitter.svg";
import linkedin from "../../assets/Icons/linkedin.svg";
import TeamCard from "./TeamCard";

export default function Team() {
  return (
    <div id='team' className='pt-12 '>
      <h2 className='text-5xl text-center mb-24'>Meet Our Team</h2>
      <div className='flex items-center w-screen mt-7'>
        <div className='container px-8 flex flex-wrap justify-center ml-auto mr-auto gap-8 items-start'>
          {LeadList.map((item, id) => (
            <div
              key={id}
              className='flex flex-col justify-center items-center w-[75%] sm:w-2/5 md:w-3/5  lg:w-2/12'
            >
              <div
                className='relative flex justify-center items-center !bg-cover !bg-no-repeat w-full !z-[40] rounded-full'
                style={{ background: `url(${item.image})` }}
              >
                {/* <div className="absolute w-[104%] aspect-square bg-primary -z-10 rounded-full -translate-x-1 -translate-y-1 overflow-hidden"></div>
                <div className="absolute w-[104%] aspect-square bg-secondary -z-[2] rounded-full translate-x-1 translate-y-1 overflow-hidden"></div> */}
                <img
                  className='rounded-[100%] aspect-square w-[100%] items-center object-cover z-30'
                  src={item.frame}
                  alt={item.name}
                />
              </div>
              <div className='mt-3 text-center cursor-default'>
                <h3 className='text-xl'>{item.name}</h3>
                <h4 className='text-gray-400'>{item.desc}</h4>
              </div>
              <div className='flex flex-row justify-evenly w-full mt-2'>
                {item.github ? (
                  <a href={item.github} target='_blank' rel='noreferrer'>
                    <img
                      src={git}
                      alt='github'
                      className='w-6 hover:-translate-y-1 transition-all ease-in-out'
                    />
                  </a>
                ) : (
                  <></>
                )}
                {item.linkedin ? (
                  <>
                    <a href={item.linkedin} target='_blank' rel='noreferrer'>
                      <img
                        src={linkedin}
                        alt='linkedin'
                        className='w-6 hover:-translate-y-1 transition-all ease-in-out'
                      />
                    </a>
                  </>
                ) : (
                  <></>
                )}
                {item.twitter ? (
                  <>
                    <a href={item.twitter} target='_blank' rel='noreferrer'>
                      <img
                        src={twitter}
                        alt='twitter'
                        className='w-6 hover:-translate-y-1 transition-all ease-in-out'
                      />
                    </a>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Team */}
      <TeamCard data={TechTeam} title='Tech Team' />

      {/* Operation Lead */}
      <TeamCard data={OperationTeam} title='Operation Team' />
      {/* Design Lead */}
      <TeamCard data={DesignTeam} title='Design Team' />
    </div>
  );
}
