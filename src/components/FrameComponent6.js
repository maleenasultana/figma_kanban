import FrameComponent7 from "./FrameComponent7";
import Draggable from "react-draggable";

const FrameComponent6 = () => {
  return (
    <Draggable bounds={{left: 0, top: 0, right: 100, bottom: 200}}>

    <div className="absolute top-[-23.46px] left-[-20.19px] w-[330.46px] h-[196.21px] text-left text-xs text-slategray font-inter">
      <div className="absolute h-[91.62%] top-[0%] bottom-[8.38%] left-[calc(50%_-_155.75px)] rounded-2xl bg-white w-[321.41px] [transform:_rotate(2.98deg)] [transform-origin:0_0]" />
      <FrameComponent7 />
    </div>
    </Draggable>
  );
};

export default FrameComponent6;
