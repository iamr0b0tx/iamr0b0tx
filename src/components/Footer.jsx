import { FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer>
      <div className="flex justify-end">
        <FaArrowUp
          size="10"
          className="w-8 h-8 rounded-full m-4  text-green-400 cursor-pointer"
          onClick={scrollToTop}
        />
      </div>
      <div className="flex justify-center  border-t-2 border-gray-600">
        <p className="m-4">
          Designed by{" "}
          <a
            href="www.github.com/motuncoded"
            className="text-green-400 hover:underline"
          >
            {" "}
            motuncoded
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
