import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="py-5 px-0 flex justify-between items-center">
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className="w-[150px] md:w-[140px] sm:w-[120px]"
        />
      </Link>

      {/* Navbar Menu */}
      <ul className="hidden sm:flex gap-[20px] text-[18px] md:text-[17px] sm:text-[16px]">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`${
            menu === "home"
              ? "text-[#2EC4B6] border-b-2 border-[#2EC4B6]"
              : "text-black"
          } pb-[2px]`}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={`${
            menu === "menu"
              ? "text-[#2EC4B6] border-b-2 border-[#2EC4B6]"
              : "text-black"
          } pb-[2px]`}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mob-app")}
          className={`${
            menu === "mob-app"
              ? "text-[#2EC4B6] border-b-2 border-[#2EC4B6]"
              : "text-black"
          } pb-[2px]`}
        >
          mobile app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={`${
            menu === "contact"
              ? "text-[#2EC4B6] border-b-2 border-[#2EC4B6]"
              : "text-black"
          } pb-[2px]`}
        >
          contact us
        </a>
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-[40px] md:gap-[30px] sm:gap-[20px]">
        <img
          src={assets.search_icon}
          alt="search"
          className="w-[24px] sm:w-[20px]"
        />
        <Link to="/cart" className="relative">
          <img
            src={assets.basket_icon}
            alt="cart"
            className="w-[24px] sm:w-[20px]"
          />
          {getTotalCartAmount() > 0 && (
            <div className="absolute top-[-8px] right-[-8px] min-w-[10px] min-h-[10px] bg-[#FF9F1C] rounded-full"></div>
          )}
        </Link>
        <button
          onClick={() => setShowLogin(true)}
          className="text-[#2EC4B6] text-[16px] sm:text-[15px] border border-[#2EC4B6] hover:bg-[#e0fffd] px-[30px] sm:px-[20px] py-[10px] sm:py-[7px] rounded-full transition duration-300"
        >
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
