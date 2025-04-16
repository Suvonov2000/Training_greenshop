import { Slider } from "antd";

const PriceRange = () => {
  return (
    <div>
      <h3 className="fonst-bold">Price Range</h3>
      <div className="pl-[12px] w-full">
        <Slider range />
      </div>
    </div>
  );
};

export default PriceRange;
