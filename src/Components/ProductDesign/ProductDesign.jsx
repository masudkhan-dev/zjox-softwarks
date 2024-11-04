import product from "../../../public/assets/product.png";

const SERVICES = [
  "Product Design",
  "Ideation & Strategy",
  "Web and Mobile",
  "Embedded Systems",
];

const ProductDesign = () => {
  return (
    <section className="relative py-16 bg-[#F3F3F3]">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="relative w-full ">
          <img
            src={product}
            alt="Product Design Services"
            className="w-full h-full rounded"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black/40 rounded">
            <div className="flex justify-center items-center h-full ">
              <div className="flex justify-between items-center gap-x-10">
                <div className="w-1/2">
                  <h2 className="text-lg lg:text-5xl font-bold text-white  ml-3">
                    See what we can do for you
                  </h2>
                </div>

                {/* Services List */}
                <div className="w-1/2 md:-mt-8 md:ml-52">
                  <ul className="">
                    {SERVICES.map((service, index) => (
                      <li key={index} className="group">
                        <span className="block text-xs md:text-xl text-[#6D6D6D]  transition-all duration-300 group-hover:text-[#fff] my-0.5 md:my-4 ">
                          {service}
                        </span>
                        <div className="h-px bg-gray-500 w-32 md:w-full transform origin-left transition-all duration-300 group-hover:bg-[#24A556]"></div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDesign;
