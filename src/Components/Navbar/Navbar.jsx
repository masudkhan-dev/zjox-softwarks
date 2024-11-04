import { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false); // Initialize to false

  const navItems = [
    { name: "About", id: "about" },
    { name: "Project", id: "project" },
    { name: "Service", id: "service" },
    { name: "Client", id: "client" },
    { name: "Team", id: "team" },
    { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div>
      <div className="bg-white shadow-xl py-4 fixed right-0 md:right-3 left-0 md:left-3 top-0 md:top-5 rounded-lg z-40">
        <div className="container mx-auto px-3 lg:px-0">
          <nav className="flex justify-between items-center">
            <Link to="/" smooth duration={500}>
              <h2 className="text-2xl md:text-3xl font-bold text-[#3F3F3F]">
                Zjox Softwarks
              </h2>
            </Link>

            <ul className="hidden md:flex duration-700 gap-x-3">
              {navItems.map((item) => (
                <Link
                  to={item.id}
                  key={item.id}
                  smooth
                  duration={500}
                  className="flex"
                >
                  <li className="px-5 py-2 my-1 text-[#3F3F3F] hover:text-[#24A556] cursor-pointer">
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>

            <div className="hidden md:flex items-center px-5">
              <FaSearch className="absolute text-[#3F3F3F] cursor-pointer" />
            </div>

            <div className="md:hidden">
              <button onClick={() => setOpen(!open)}>
                {open ? (
                  <IoMdClose className="text-2xl md:text-3xl" />
                ) : (
                  <IoMdMenu className="text-2xl md:text-3xl" />
                )}
              </button>

              <ul
                className={`block absolute bg-[#24A556] px-5 shadow-xl py-5 rounded-md duration-700 z-50 ${
                  open ? "top-[4em] right-1" : "top-[4em] -right-[50em]"
                }`}
              >
                {navItems.map((item) => (
                  <Link
                    to={item.id}
                    key={item.id}
                    smooth
                    duration={500}
                    className="flex"
                  >
                    <li className="px-5 py-2 my-1 text-[#fff] cursor-pointer">{item.name}</li>
                  </Link>
                ))}
                <div className="mt-2 space-x-2 flex items-center">
                  <input
                    type="search"
                    placeholder="Search here..."
                    className="relative border-2 border-[#ffffffad] outline-none px-6 py-1 w-52 rounded bg-[#24A556] text-white"
                  />
                  <FaSearch className="absolute text-[#ffffffad]" />
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
