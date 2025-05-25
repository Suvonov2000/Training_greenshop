const Size = () => {
  return (
    <div className="mt-[38px] ">
      <h3 className="font-bold">Size</h3>
      <div className="pl-[12px] w-full">
        <div className="w-full flex items-center justify-between mt-[7px] hover:text-[#46A358] cursor-pointer">
          <h3>Small</h3>
          <h3>{5}</h3>
        </div>

        <div className="w-full flex items-center justify-between mt-[7px] hover:text-[#46A358] cursor-pointer">
          <h3>Medium</h3>
          <h3>{10}</h3>
        </div>

        <div className="w-full flex items-center justify-between mt-[7px] hover:text-[#46A358] cursor-pointer">
          <h3>Large</h3>
          <h3>{15}</h3>
        </div>
      </div>
    </div>
  );
};
export default Size;
