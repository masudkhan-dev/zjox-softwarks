import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className=" mt-52">
      <div className="container mx-auto px-3 lg:px-0 ">
        <div className="flex justify-center items-center ">
          <div className="sweet-loading">
            <ScaleLoader
              height={50}
              width={10}
              radius={5}
              margin={5}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
