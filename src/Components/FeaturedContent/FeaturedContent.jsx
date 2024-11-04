import fc1 from "../../../public/assets/FeaturedContent1.png";
import fc2 from "../../../public/assets/FeaturedContent2.png";
import fc3 from "../../../public/assets/FeaturedContent3.png";
import fc4 from "../../../public/assets/FeaturedContent4.png";

const FeaturedContent = () => {
  return (
    <div className="">
      <div className="container mx-auto px-3 lg:px-0">
        <div>
          <header className="my-10">
            <h2 className="text-[#24A556] text-3xl md:text-5xl font-bold">
              Featured Content
            </h2>
          </header>
          <main className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-start items-center">
              <figure className="relative">
                <img src={fc1} alt="" />
              </figure>
              <div className="absolute space-y-1 md:space-y-8 w-80 md:w-96 md:mx-10 mx-3">
                <h4 className="text-[#535353] text-xl font-bold">Top News</h4>
                <h2 className="text-white text-xl font-bold">
                  VR training app for a manufacturing company
                </h2>
                <p className="  text-[#D9D9D9] text-sm md:text-base">
                  Throughout 2021, the company’s specialists implemented
                  important skill-sharing and community development initiatives
                  as part
                </p>
                <button className="text-base md:text-lg text-[#24A556] font-bold">
                  Read more
                </button>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <figure className="relative">
                <img src={fc2} alt="" />
              </figure>
              <div className="absolute space-y-1 md:space-y-8 w-80 md:w-96 md:mx-10 mx-3">
                <h4 className="text-[#535353] text-xl font-bold">
                  10 July 2022
                </h4>
                <h2 className="text-white text-xl font-bold">
                  VR training app for a manufacturing company
                </h2>
                <p className="  text-[#D9D9D9] text-sm md:text-base">
                  Throughout 2021, the company’s specialists implemented
                  important skill-sharing and community development initiatives
                  as part
                </p>
                <button className="text-base md:text-lg text-[#24A556] font-bold">
                  Read more
                </button>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <figure className="relative">
                <img src={fc3} alt="" />
              </figure>
              <div className="absolute space-y-1 md:space-y-8 w-80 md:w-96 md:mx-10 mx-3">
                <h4 className="text-[#535353] text-xl ">
                  5 June 2022
                </h4>
                <h2 className="text-white text-xl font-bold">
                  VR training app for a manufacturing company
                </h2>
                <p className="  text-[#D9D9D9] text-sm md:text-base">
                  Throughout 2021, the company’s specialists implemented
                  important skill-sharing and community development initiatives
                  as part
                </p>
                <button className="text-base md:text-lg text-[#24A556] font-bold">
                  Read more
                </button>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <figure className="relative">
                <img src={fc4} alt="" />
              </figure>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;
