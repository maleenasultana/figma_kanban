import Draggable from "react-draggable";
const FrameComponent4 = () => {
  return (
<Draggable bounds={{left: 0, top: 0, right: 100, bottom: 200}}>

    <div className="absolute h-[32.03%] top-[46.78%] bottom-[21.19%] left-[calc(50%_+_350px)] rounded-2xl bg-white w-[314px] text-left text-xs text-gray font-inter">
      <div className="absolute h-[54.88%] top-[23.17%] bottom-[21.95%] left-[calc(50%_-_137px)] rounded-lg bg-silver w-[274px]" />
      <img
        className="absolute h-[54.88%] top-[23.17%] bottom-[21.95%] left-[calc(50%_-_137px)] max-h-full w-[274px] object-cover"
        alt=""
        src="/mask-group2@2x.png"
      />
      <div className="absolute top-[284px] left-[20px] w-[274px] h-6 text-slategray">
        <div className="absolute top-[4px] left-[100px] w-[174px] h-4">
          <img
            className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_+_25px)] max-h-full w-4"
            alt=""
            src="/vuesaxlinearfolder212.svg"
          />
          <img
            className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_87px)] max-h-full w-4"
            alt=""
            src="/vuesaxoutlinemessage12.svg"
          />
          <div className="absolute top-[6.25%] left-[calc(50%_-_66px)] font-medium">
            12 comments
          </div>
          <div className="absolute top-[6.25%] left-[calc(50%_+_46px)] font-medium">
            15 files
          </div>
        </div>
        <img
          className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_118px)] rounded-[50%] max-h-full w-[25px] object-cover"
          alt=""
          src="/ellipse-134@2x.png"
        />
        <img
          className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_137px)] rounded-[50%] max-h-full w-6 object-cover"
          alt=""
          src="/ellipse-126@2x.png"
        />
      </div>
      <div className="absolute h-[6.71%] top-[14.33%] left-[calc(50%_-_137px)] text-lg font-semibold inline-block w-[164px]">
        Mobile App Design
      </div>
      <div className="absolute h-[5.79%] top-[5.79%] left-[calc(50%_+_121px)] text-base tracking-[-0.07em] font-extrabold inline-block w-4">
        . . .
      </div>
      <div className="absolute h-[7.01%] top-[6.1%] bottom-[86.89%] left-[calc(50%_-_137px)] rounded bg-darkseagreen w-[76px] flex flex-col items-center justify-center text-mediumseagreen">
        <div className="relative font-medium inline-block w-16 h-[15.23px] shrink-0">
          Completed
        </div>
      </div>
    </div>
</Draggable>
  );
};

export default FrameComponent4;
