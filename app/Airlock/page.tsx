import Link from "next/link";
import { FunctionComponent } from "react";

const Airlock: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white h-[1024px] overflow-hidden text-center text-[17.68px] text-white font-helvetica-neue">
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[785.3px] object-cover"
        alt=""
        src="landingPagePictures/Images/gradientWeb Gradient BG  1.png"
      />
      <div className="absolute top-[404.57px] left-[365.71px] w-[388.9px] h-[42.4px]">
        <div className="absolute top-[1.18px] left-[69.54px] shadow-[0px_4.714285850524902px_4.71px_rgba(0,_0,_0,_0.25)] rounded-[117.86px] bg-neutral-900 box-border w-[249.9px] h-[38.9px] overflow-hidden flex flex-row items-center justify-start py-0 px-[15.3px] gap-[9.4px] mix-blend-screen border-[3.5px] border-solid border-white">
          <div className="w-[80.1px] relative tracking-[0.01em] leading-[108.43px] font-medium hidden items-center justify-center h-[35.4px] shrink-0">
            Start now
          </div>
          <img
            className="w-[7.2px] relative h-[11.1px] hidden"
            alt=""
            src="landingPagePictures/Images/"
          />
        </div>
        <Link
          href="/Calendar"
          className="absolute top-[calc(50%_-_21.2px)] left-[calc(50%_-_194.45px)] text-[21.21px] font-inter text-zinc-50 flex items-center justify-center w-[388.9px] h-[42.4px]"
        >
          Get Started →
        </Link>
      </div>
      <div className="absolute top-[488px] left-[79px] text-[32px] leading-[38.93px] font-sf-pro-text text-neutral-700 text-left flex items-center w-[753px] h-[266px] mix-blend-luminosity">{`Welcome to CalPal, the ultimate auto-scheduling solution. Say goodbye to endless email threads and hello to effortless meeting coordination. `}</div>
      <img
        className="absolute top-[132px] left-[1047px] w-[348px] h-[702.8px] object-cover"
        alt=""
        src="landingPagePictures/Images/Multi-dayEvent App View Web.png"
      />
      <img
        className="absolute top-[206px] left-[858px] w-[348px] h-[702.8px] object-cover"
        alt=""
        src="landingPagePictures/Images/One-off lightSchedule App View Web.png"
      />
      <img
        className="absolute top-[150px] left-[109px] w-[376px] h-[53px] object-cover"
        alt=""
        src="landingPagePictures/Images/Welcome toWelcome to CalPal Web Text 1.png"
      />
      <img
        className="absolute top-[244px] left-[263px] w-[422px] h-[106px] object-cover"
        alt=""
        src="landingPagePictures/Images/CalPalWelcome to CalPal Web Text 1.png"
      />
    </div>
  );
};

export default Airlock;
