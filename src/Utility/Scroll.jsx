import { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Scroll = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = () => {
    window.scrollTo({
      top: isAtTop ? document.body.scrollHeight : 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTo}
      className="fixed bottom-5 right-4 bg-white shadow-xl cursor-pointer p-2 rounded-full z-30"
    >
      {isAtTop ? (
        <FaArrowDown className="text-lg" />
      ) : (
        <FaArrowUp className="text-lg" />
      )}
    </button>
  );
};

export default Scroll;
