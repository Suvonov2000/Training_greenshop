import { Carousel } from "antd";
import Slider1 from "./sliders/slider-1";

const SliderSection = () => {
  return (
    <div className="w-[80%] h-[450px] m-auto bg-[#F5F5F580] mt-3">
      <Carousel>
        <div className="w-full h-[450px] ">
          <Slider1 />
        </div>
        <div className="w-full h-[450px] ">
          <Slider1 />
        </div>

        <div className="w-full h-[450px] ">
          <Slider1 />
        </div>
      </Carousel>
    </div>
  );
};
export default SliderSection;
