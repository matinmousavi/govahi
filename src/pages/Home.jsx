import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      {/* Start Possibilities */}

      <section className=" mt-16 py-9">
        <h2 className="text-center font-black xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-dark-blue">
          امکانات گواهی آنلاین
        </h2>
        <div className="flex md:flex-row sm:px-7 px-8 flex-col gap-10  my-14">
          <div className="flex xl:gap-x-14 md:gap-x-2 md:px-0 items-center justify-center w-full md:w-7/12 xl:h-72 md:h-48 lg:h-56 sm:h-[38rem] self-center flex-wrap">
          <div className="flex justify-center p-4 sm:py-5 sm:px-44 md:py-6 md:px-4 lg:py-7 xl:gap-5 md:gap-1 sm:gap-8 gap-6 items-center rounded-md group shadow-lg shadow-black-500/50 w-full md:w-[48%] lg:w-5/12 xl:h-16 md:h-6 md:my-0 my-3 xl:text-xl lg:text-sm md:text-xs bg-white">
              <AiOutlineStar className="group-hover:hidden group-hover:text-dark-blue block" />
              <AiFillStar className="group-hover:block group-hover:text-dark-blue hidden" />
              <p className="text-[0.8rem] sm:text-sm md:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.9rem] ">دریافت گواهی بصورت آنلاین</p>
            </div>
          <div className="flex justify-center p-4 sm:py-5 sm:px-44 md:py-6 md:px-4 lg:py-7 xl:gap-5 md:gap-1 sm:gap-8 gap-6 items-center rounded-md group shadow-lg shadow-black-500/50 w-full md:w-[48%] lg:w-5/12 xl:h-16 md:h-6 md:my-0 my-3 xl:text-xl lg:text-sm md:text-xs bg-white">
              <AiOutlineStar className="group-hover:hidden group-hover:text-dark-blue block" />
              <AiFillStar className="group-hover:block group-hover:text-dark-blue hidden" />
              <p className="text-[0.8rem] sm:text-sm md:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.9rem] ">طراحی و دیزاین قالب</p>
            </div>
          <div className="flex justify-center p-4 sm:py-5 sm:px-44 md:py-6 md:px-4 lg:py-7 xl:gap-5 md:gap-1 sm:gap-8 gap-6 items-center rounded-md group shadow-lg shadow-black-500/50 w-full md:w-[48%] lg:w-5/12 xl:h-16 md:h-6 md:my-0 my-3 xl:text-xl lg:text-sm md:text-xs bg-white">
              <AiOutlineStar className="group-hover:hidden group-hover:text-dark-blue block" />
              <AiFillStar className="group-hover:block group-hover:text-dark-blue hidden" />
              <p className="text-[0.8rem] sm:text-sm md:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.9rem] ">پنل مدیریتی شخصی</p>
            </div>
          <div className="flex justify-center p-4 sm:py-5 sm:px-44 md:py-6 md:px-4 lg:py-7 xl:gap-5 md:gap-1 sm:gap-8 gap-6 items-center rounded-md group shadow-lg shadow-black-500/50 w-full md:w-[48%] lg:w-5/12 xl:h-16 md:h-6 md:my-0 my-3 xl:text-xl lg:text-sm md:text-xs bg-white">
              <AiOutlineStar className="group-hover:hidden group-hover:text-dark-blue block" />
              <AiFillStar className="group-hover:block group-hover:text-dark-blue hidden" />
              <p className="text-[0.8rem] sm:text-sm md:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.9rem] ">طراحی محتوا</p>
            </div>
          <div className="flex justify-center p-4 sm:py-5 sm:px-44 md:py-6 md:px-4 lg:py-7 xl:gap-5 md:gap-1 sm:gap-8 gap-6 items-center rounded-md group shadow-lg shadow-black-500/50 w-full md:w-[48%] lg:w-5/12 xl:h-16 md:h-6 md:my-0 my-3 xl:text-xl lg:text-sm md:text-xs bg-white">
              <AiOutlineStar className="group-hover:hidden group-hover:text-dark-blue block" />
              <AiFillStar className="group-hover:block group-hover:text-dark-blue hidden" />
              <p className="text-[0.8rem] sm:text-sm md:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.9rem] ">شحصی سازی قالب</p>
            </div>
          <div className="flex justify-center p-4 sm:py-5 sm:px-44 md:py-6 md:px-4 lg:py-7 xl:gap-5 md:gap-1 sm:gap-8 gap-6 items-center rounded-md group shadow-lg shadow-black-500/50 w-full md:w-[48%] lg:w-5/12 xl:h-16 md:h-6 md:my-0 my-3 xl:text-xl lg:text-sm md:text-xs bg-white">
              <AiOutlineStar className="group-hover:hidden group-hover:text-dark-blue block" />
              <AiFillStar className="group-hover:block group-hover:text-dark-blue hidden" />
              <p className="text-[0.8rem] sm:text-sm md:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.9rem] ">مدیریت گواهی نامه</p>
            </div>
          
          </div>
          <div className="w-full md:w-1/2">
            <img src="./src/assets/images/jpg/image-2.png" alt="" />
          </div>
        </div>
      </section>

      {/* <main className="my-28 text-justify py-16">
        <h2 className="font-black text-4xl text-center">نگاهی به آمار کلی</h2>
        <div className="flex gap-10 mx-auto mt-6 justify-between py-10 6 w-5/6 px-5">
          <div className="text-center shadow-2xl w-1/4 bg-white self-center px-10 py-3 rounded-xl">
            <span className="text-2xl">2140</span>
            <h4 className="text-lg my-3">مشتری های راضی</h4>
          </div>
          <div className="text-center shadow-2xl w-1/4 bg-white self-center px-10 py-3 rounded-xl">
            <span className="text-2xl">2140</span>
            <h4 className="text-lg my-3">مشتری های راضی</h4>
          </div>
          <div className="text-center shadow-2xl w-1/4 bg-white self-center px-10 py-3 rounded-xl">
            <span className="text-2xl">2140</span>
            <h4 className="text-lg my-3">مشتری های راضی</h4>
          </div>
          <div className="text-center shadow-2xl w-1/4 bg-white self-center px-10 py-3 rounded-xl">
            <span className="text-2xl">2140</span>
            <h4 className="text-lg my-3">مشتری های راضی</h4>
          </div>
        </div>
      </main> */}
      <Footer />
    </>
  );
};

export default Home;
