import React from "react";
import Feature from "../components/Feature";
import TrustedBy from "../components/TrustedBy";
import Slides from "../components/Slides";
import { cards, projects, staticData, videoSliderData } from "../data";
import GigCategoryCards from "../components/gigCategoryCards";
import { VscVerified } from "react-icons/vsc";
import VideoCards from "../components/VideoCards";
import ProjectCards from "../components/ProjectCards";

const Home = () => {
  return (
    <>
      <Feature />
      <TrustedBy />
      <Slides title={"Popular Products"} slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <GigCategoryCards key={card.id} item={card} />
        ))}
      </Slides>
      <div className="px-64 flex items-center my-24 py-24 bg-blue-100">
        <div className="left w-[60%]">
          <h2 className="text-3xl font-extrabold text-gray-700">
            The best part? Everything.
          </h2>
          {staticData.map((sd) => (
            <div className="py-1" key={sd.id}>
              <div className="flex gap-1 items-center">
                <VscVerified />
                <p className="font-bold text-gray-500 text-xl py-1">
                  {sd.heading}
                </p>
              </div>
              <span className="text-sm">{sd.desc}</span>
            </div>
          ))}
        </div>
        <div className="right">
          <video
            src={"/videos/v1.mp4"}
            controls
          />
        </div>
      </div>

      <div className="px-64 flex items-center my-24 py-24 bg-slate-900 text-white gap-4">
        <div className="left w-[60%] flex flex-col gap-8">
          <h2 className="text-3xl font-black ">
            fiverr <span className="font-medium">business.</span>
          </h2>
          <p className="text-4xl">
            A solution built for <i>business</i>
          </p>
          <p className="text-xl">
            Upgrade to a curated experience to access vetted talent and
            exclusive tools
          </p>
          <div>
            <p className="flex gap-1 items-center text-lg">
              <VscVerified /> Talent matching
            </p>
            <p className="flex gap-1 items-center text-lg">
              <VscVerified /> Dedicated account management
            </p>
            <p className="flex gap-1 items-center text-lg">
              <VscVerified /> Team collaboration tools
            </p>
            <p className="flex gap-1 items-center text-lg">
              <VscVerified /> Business payment solutions
            </p>
          </div>
          <button className="bg-green-500 p-2 rounded-md text-white font-bold max-w-max">Explore Fiverr business</button>
        </div>
        <div className="right">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
            alt="fiverr person"
          />
        </div>
      </div>

      <Slides title={"Customer Reviews"} slidesToShow={1} arrowsScroll={1}>
        {videoSliderData.map((card) => (
          <VideoCards key={card.id} item={card} />
        ))}
      </Slides>

      <Slides title={"Popular Projects"} slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCards key={card.id} item={card} />
        ))}
      </Slides>

    </>
  );
};

export default Home;
