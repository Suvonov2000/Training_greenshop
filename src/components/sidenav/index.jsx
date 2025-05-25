import Categories from "./categories";
import PriceRange from "./price-range";
import Size from "./size";

const SideNav = () => {
  return (
    <div className="w-[310px] mt-[46px] ml-[190px] bg-[#f5f5f5] px-[18px] py-[14px]">
      <Categories />
      <PriceRange />
      <Size />
    </div>
  );
};
export default SideNav;
