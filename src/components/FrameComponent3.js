import Draggable from "react-draggable";
const FrameComponent3 = () => {
  return (
<Draggable bounds={{left: 0, top: 0, right: 100, bottom: 200}}>

    <div className="relative rounded-2xl bg-white w-[321.41px] h-[227px] text-left text-xs text-gray font-inter">
      <img
        className="absolute w-[41.72%] top-[76px] right-[51.91%] left-[6.37%] rounded-lg max-w-full overflow-hidden h-[79px] object-cover"
        alt=""
        src="/unsplashbs-1xgrkih41@2x.png"
      />
      <img
        className="absolute w-[41.72%] top-[76px] right-[6.37%] left-[51.91%] rounded-lg max-w-full overflow-hidden h-[79px] object-cover"
        alt=""
        src="/unsplashkiqjfzbii9w1@2x.png"
      />
      <div className="absolute top-[183px] left-[20.47px] w-[280.47px] h-6 flex flex-row items-center justify-start gap-[82px] text-slategray">
        <img
          className="relative rounded-[50%] w-[24.57px] h-6 object-cover"
          alt=""
          src="/ellipse-125@2x.png"
        />
        <div className="relative w-[172.99px] h-4">
          <img
            className="absolute w-[9.47%] top-[0px] right-[27.22%] left-[63.31%] max-w-full overflow-hidden h-4"
            alt=""
            src="/vuesaxlinearfolder211.svg"
          />
          <img
            className="absolute w-[9.47%] top-[0px] right-[90.53%] left-[0%] max-w-full overflow-hidden h-4"
            alt=""
            src="/vuesaxoutlinemessage11.svg"
          />
          <div className="absolute w-[42.6%] top-[1px] left-[12.43%] font-medium inline-block">
            9 comments
          </div>
          <div className="absolute w-[24.26%] top-[1px] left-[75.74%] font-medium inline-block">
            10 files
          </div>
        </div>
      </div>
      <div className="absolute w-[32.17%] top-[47px] left-[6.37%] text-lg font-semibold inline-block">
        Moodboard
      </div>
      <div className="absolute w-[5.1%] top-[19px] left-[88.54%] text-base tracking-[-0.07em] font-extrabold inline-block">
        . . .
      </div>
      <div className="absolute w-[11.46%] top-[20px] right-[82.17%] left-[6.37%] rounded bg-burlywood h-[23px] flex flex-col items-center justify-center text-peru">
        <div className="relative font-medium inline-block w-[24.57px]">Low</div>
      </div>
    </div>
</Draggable>
  );
};

export default FrameComponent3;
