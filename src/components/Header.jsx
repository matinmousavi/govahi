import { AiOutlineSearch } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import Navbar from "./Navbar";
import { useState } from "react";
import { useNationalId } from "../hooks";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: userNationalId } = useNationalId();

  const navigate = useNavigate();

  const changeHandler = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };
  const findUser = () => {
    const filterUser = userNationalId.find((user) => {
      return user.national_id === searchQuery;
    });
    setSearchQuery("");

    if (!filterUser) {
      alert("کد ملی شما یافت نشد.");
    } else {
      navigate(`/usercertificates/${filterUser.id}`);
    }
  };
  return (
    <header className="">
      <Navbar />
      <section className="flex justify-center bg-bg-header xl:h-[95vh] md:h-[60vh] sm:h-[40vh] h-[40vh] bg-no-repeat bg-cover bg-blend-multiply bg-zinc-700">
        <div className="w-4/6 md:w-3/6 sm:w-3/5 text-center self-center relative sm:pt-0 pt-24">
          <h1 className="text-white sm:mb-4 md:mb-6 xl:mb-10 mb-3 sm:text-sm md:text-lg xl:text-xl text-[0.5rem] font-black">
            <Typewriter
              options={{
                strings: ["گواهی آنلاین خود را همین الان دریافت کنید."],
                loop: true,
                autoStart: true,
                delay: 50,
                deleteSpeed: 60,
              }}
            />
          </h1>
          <form className="flex items-center text-white">
            <input
              type="text"
              name="search"
              value={searchQuery}
              onChange={changeHandler}
              className="w-full px-2 sm:px-4 sm:py-3 md:py-4 xl:py-6 py-0 sm:placeholder:text-xs md:placeholder:text-base xl:placeholder:text-xl placeholder:text-[0.5rem] rounded-md sm:rounded-lg md:rounded-2xl bg-white/[0.15]"
              placeholder="کد ملی خود را جستجو کنید "
            />
            <button
              className="rounded-2xl px-2 sm:px-4 absolute left-0  opacity-50 text-sm sm:text-2xl"
              type="button"
              onClick={findUser}
            >
              <AiOutlineSearch className="landing__searchbar-icon" />
            </button>
          </form>
        </div>
      </section>
    </header>
  );
};

export default Header;
