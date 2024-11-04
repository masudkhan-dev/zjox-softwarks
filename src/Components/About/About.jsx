import img1 from "../../../public/assets/about1.png";
import img2 from "../../../public/assets/about2.png";
import img3 from "../../../public/assets/about3.png";
import img4 from "../../../public/assets/about4.png";
import img5 from "../../../public/assets/about5.png";
import img6 from "../../../public/assets/about6.png";
import img7 from "../../../public/assets/about7.png";

const About = () => {
  return (
    <div id="about">
      <div className="container mx-auto px-3 lg:px-0 mt-10 md:mt-16">
        <main className="flex flex-col-reverse md:flex-row justify-center items-center gap-10">
          <section className="flex justify-center items-center gap-3 md:w-1/2">
            <div className="flex flex-col justify-center items-start gap-y-3">
              <div className="flex flex-col justify-center items-end gap-y-3 z-30">
                <figure>
                  <img src={img6} alt="about" />
                </figure>
                <figure>
                  <img src={img1} alt="about" />
                </figure>
              </div>
              <figure className="-mt-5 z-10">
                <img src={img7} alt="about" className="w-10" />
              </figure>
            </div>

            <div className="space-y-3">
              <figure>
                <img src={img2} alt="about" />
              </figure>
              <figure>
                <img src={img3} alt="about" />
              </figure>
            </div>
          </section>

          <section className="md:w-1/2">
            <div className="flex gap-32 md:gap-52">
              <figure>
                <img src={img5} alt="about" className="mt-5" />
              </figure>
              <figure>
                <img src={img4} alt="about" className="w-40 md:w-64" />
              </figure>
            </div>
            <div className="  -mt-16">
              <h2 className="text-3xl font-bold text-[#24A556] md:text-5xl mt-5">
                About Us
              </h2>
              <p className="text-justify md:pr-40 mt-3 md:mt-5 text-base leading-7">
                Concept Softworks is a software company, we develop custom built
                software for clients - covering everything from financial
                institutions & medical companies all the way to tech companies
                and government organizations.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default About;
