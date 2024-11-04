import c1 from "../../../public/assets/Have-a-Project.png";
import c2 from "../../../public/assets/contact1.png";
import c3 from "../../../public/assets/contact2.png";
import c4 from "../../../public/assets/contact3.png";
import c5 from "../../../public/assets/about4.png";


const Contact = () => {
  return (
    <div className="bg-[#F2F2F2] my-20" id="contact">
      <div className="container mx-auto px-3 lg:px-0 pb-10">
        <main className="bg-[#F2F2F2]">
          <figure className="-mt-5 absolute">
            <img src={c2} alt="" width={150} />
          </figure>
          <header className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-20 pt-10">
            <div className="md:w-1/3">
              <h2 className="text-[#24A556] text-4xl md:text-5xl font-bold">
                Contact us!
              </h2>
              <p className="text-[#3F3F3F] text-xl mt-3">What can we do for you?</p>
            </div>
            <figure className="md:w-2/3">
              <img src={c1} alt="have a project?" width={800} />
            </figure>
          </header>

          <section className="flex flex-col md:flex-row justify-around items-center">
            <form className="pt-10">
              <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-y-3 md:gap-5 ">
                <button className="hover:bg-[#3F3F3F] text-[#3F3F3F] hover:text-white transition-colors duration-500 font-bold border border-[#3F3F3F] px-5 py-2 text-base rounded-full">
                  Product Design
                </button>
                <button className="hover:bg-[#3F3F3F] text-[#3F3F3F] hover:text-white transition-colors duration-500 font-bold border border-[#3F3F3F] px-5 py-2 text-base rounded-full">
                  Website Development
                </button>
                <button className="hover:bg-[#3F3F3F] text-[#3F3F3F] hover:text-white transition-colors duration-500 font-bold border border-[#3F3F3F] px-5 py-2 text-base rounded-full">
                  Mobile Apps developmet
                </button>
              </div>

              <div className="space-y-4 pt-10">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-transparent border-b-2 border-[#A09F9F] w-full outline-none p-2 text-[#A09F9F]"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent border-b-2 border-[#A09F9F] w-full outline-none p-2 text-[#A09F9F]"
                  required
                />

                <textarea
                  name=""
                  id=""
                  cols="20"
                  rows="5"
                  placeholder="Project Details"
                  className="bg-transparent border-b-2 border-[#A09F9F] w-full outline-none p-2 text-[#A09F9F]"
                  required
                ></textarea>
                <button type="submit">
                  <img src={c3} alt="submit button" className="w-24" />
                </button>
              </div>
            </form>
            <div className="space-y-5">
              <figure>
                <img src={c5} alt="contact us" width={200} />
              </figure>
              <div className="space-y-3">
                <div>
                  <h2 className="text-[#898989] font-bold text-xl">Phone</h2>
                  <h2 className="text-[#3F3F3F] font-bold text-base cursor-pointer">
                    +1 (833) 520-3712
                  </h2>
                </div>
                <div>
                  <h2 className="text-[#898989] font-bold text-xl">Email:</h2>
                  <h2 className="text-[#3F3F3F] font-bold text-base cursor-pointer">
                    Hello@conceptsoftworks.com
                  </h2>
                </div>
              </div>
              <figure className="md:-ml-40 -ml-10">
                <img src={c4} alt="contact us" width={150} />
              </figure>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Contact;
