import Draggable from "react-draggable";
const FrameComponent1 = () => {
  return (
    <Draggable bounds={{left: 0, top: 0, right: 100, bottom: 200}}>

    <div className="absolute h-[17.29%] top-[46.48%] bottom-[36.23%] left-[calc(50%_-_417.63px)] rounded-2xl bg-white w-[321.41px] text-left text-xs text-slategray font-inter">
      <div className="absolute top-[133px] left-[20.47px] w-[280.47px] h-6 flex flex-row items-center justify-start gap-[44px]">
        <img
          className="relative w-[64.49px] h-6"
          alt=""
          src="/group-6334.svg"
        />
        <div className="relative w-[171.97px] h-4">
          <img
            className="absolute w-[9.52%] top-[0px] right-[23.81%] left-[66.67%] max-w-full overflow-hidden h-4"
            alt=""
            src="/vuesaxlinearfolder27.svg"
          />
          <img
            className="absolute w-[9.52%] top-[0px] right-[90.48%] left-[0%] max-w-full overflow-hidden h-4"
            alt=""
            src="/vuesaxoutlinemessage7.svg"
          />
          <div className="absolute w-[45.83%] top-[1px] left-[12.5%] font-medium inline-block">
            12 comments
          </div>
          <div className="absolute w-[20.83%] top-[1px] left-[79.17%] font-medium inline-block">
            0 files
          </div>
        </div>
      </div>
      <div className="absolute w-[39.17%] top-[47px] left-[6.37%] text-lg font-semibold text-gray inline-block">
        Brainstorming
      </div>
      <div className="absolute w-[5.1%] top-[19px] left-[88.54%] text-base tracking-[-0.07em] font-extrabold text-gray inline-block">
        . . .
      </div>
      <div className="absolute w-[87.26%] top-[75px] left-[6.37%] inline-block">{`Brainstorming brings team members' diverse experience into play. `}</div>
      <div className="absolute w-[11.46%] top-[20px] right-[82.17%] left-[6.37%] rounded bg-burlywood h-[23px] flex flex-col items-center justify-center text-peru">
        <div className="relative font-medium inline-block w-[24.57px]">Low</div>
      </div>
    </div>
    </Draggable>
  );
};

export default FrameComponent1;
