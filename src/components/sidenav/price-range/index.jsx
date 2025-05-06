import { Slider } from "antd";
import { useState } from "react";

const PriceRange = () => {
  const [range, setRange] = useState([0, 1500]);
  return (
    <div>
      <h3 className="font-bold">Price Range</h3>
      <div className="pl-[12px] w-full">
        <Slider min={0} value={range} max={1500} onChange={setRange} range />
        <div>
          Price:
          <span className="text-[#46A358] font-bold">
            ${range[0]} - ${range[1]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
