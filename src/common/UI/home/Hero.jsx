import React from "react";
import Sait from "./Sait";
import Image from "next/image";
import SaitLogo from "../../../../public/logo masked.png";
import Herol from "../../../../public/assets/images/saithero.png";
import HeroMob from "../../../../public/assets/images/herolmob.svg"

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row w-screen relative overflow-x-hidden">
      <div className="">
          <Image className="hidden md:block w-full xl:w-[48rem] lg:w-[55rem] md:w-[40rem]" src={Herol} alt="" />
          <Image className="block md:hidden w-full xl:w-[70rem] lg:w-[55rem] md:w-[40rem]" src={HeroMob} alt="" />
      </div>
      <div className="relative xl:py-56 lg:py-20 md:py-4 pr-16 w-full text-[14px] md:text-xs lg:text-sm xl:text-[1rem] md:w-1/2 text-black md:flex flex-col  h-5/6">
        <Image className="block md:hidden absolute w-32 -left-[4.3rem] top-[30%] md:top-[30%]" src={SaitLogo} alt="" />
        <p className="w-5/6 ml-16 lg:w-3/4 md:w-full leading-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          magni voluptatum in vel similique adipisci illum dicta sunt nisi
          consequatur perferendis dolor libero dignissimos magnam veritatis
          accusantium soluta exercitationem at, perspiciatis ducimus fuga quia
          optio.
        </p>
        <div className="w-5/6 md:w-full lg:w-3/4 ml-20 lg:ml-20 leading-5">
          <p className="lg:my-9 md:my-5 my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            magni voluptatum in vel similique adipisci illum dicta sunt nisi
            consequatur perferendis dolor libero dignissimos magnam veritatis
            accusantium soluta exercitationem at, perspiciatis ducimus fuga quia
            optio.
          </p>
          <button className="px-14 py-2 hover:bg-blue-900 hover:text-white duration-500 border-2 border-blue-900 font-bold text-blue-900">
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
