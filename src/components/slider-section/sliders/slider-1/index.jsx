const Slider1 = () => {
  return (
    <div className="w-full h-[450px] flex">
      <div className="w-[60%] pl-[40px]">
        <h5 className="mt-[68px] mb-2 text-[14px] uppercase ">
          Welcome to greenshop
        </h5>
        <h1 className="text-[70px] font-black text leading-[70px] uppercase">
          Let's make a better <span className=" text-[#46A358]">planet</span>
        </h1>
        <p className="mt-2 text-[14px] w-[60%]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <button className="w-[100px] h-[35px] bg-[#46A358] mt-[48px] rounded-[6px] text-white  flex items-center justify-center cursor-pointer gap-2">
          <h3>Shop Now</h3>
        </button>
      </div>
      <div className="w-[40%] relative flex items-center justify-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
          alt="flower-1"
        />
        <img
          className="w-[150px] h-]150px] absolute bottom-0 left-[50px]"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca"
          alt="flower-2"
        />
      </div>
    </div>
  );
};
export default Slider1;
