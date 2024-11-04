import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import f1 from "../../../public/assets/footer3.png";
import f2 from "../../../public/assets/footer2.png";

const Footer = () => {
  return (
    <footer className="bg-[#24A556] h-[27rem]">
      <div className="container mx-auto px-3 lg:px-0">
        <main className="]">
          <div className="">
            <figure>
              <img src={f1} alt="" />
            </figure>
          </div>
          <section className="flex flex-col md:flex-row gap-10 -mt-24 md:-mt-64">
            <article className="md:w-1/2 space-y-5">
              <figure>
                <img src={f2} alt="logo" className="w-36 md:w-48" />
              </figure>
              <p className="text-white text-base md:text-xl leading-8  md:leading-10 text-justify">
                Concept Softworks is a software company, we develop custom built
                software for clients - covering everything from financial
                institutions & medical companies all the way to tech companies
                and government organizations.
              </p>
            </article>

            <div className="md:w-1/2 -mt-5 md:mt-16 space-y-3 md:space-y-5">
              <ul className="grid grid-cols-3 md:grid-cols-7 gap-2 md:gap-5">
                <li className="text-base text-white font-bold">About</li>
                <li className="text-base text-white font-bold">Project</li>
                <li className="text-base text-white font-bold">Service</li>
                <li className="text-base text-white font-bold">Client</li>
                <li className="text-base text-white font-bold">Team</li>
                <li className="text-base text-white font-bold">Blog</li>
                <li className="text-base text-white font-bold">Contact</li>
              </ul>
              <div className="flex gap-5 items-center">
                <h2 className="text-white text-2xl font-bold">Flow</h2>
                <div className="flex items-center gap-5">
                  <FaFacebook  className="text-white text-xl"/>
                  <FaInstagram className="text-white text-xl" />
                  <FaTwitter   className="text-white text-xl"/>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </footer>
  );
};

export default Footer;
