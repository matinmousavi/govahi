const Footer = () => {
  return (
    // <footer>
    //   <div className="flex-col md:flex-col xl:flex-row flex items-center justify-around pt-14 pb-8 bg-dark-blue shadow-5xl">
    //     <div className="flex-col md:flex-row flex md:items-center md:justify-between text-white">
    //       <div className="flex flex-col gap-6 w-96 text-justify">
    //         <h3 className="mb-5 py-1 text-2xl font-DanaDemiBold border-r-4 bg-gray-300 text-black">
    //           درباره سایت
    //         </h3>
    //         <p className="md:max-w-md lg:max-w-xl mb-6 md:mb-4">
    //           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
    //           استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
    //           در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
    //           نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex gap-32">
    //     <div className="mb-6 text-white">
    //       <h3 className="text-2xl font-DanaDemiBold pr-2 border-r-4 border-orange-300 bg-gray-700 md:border-0 md:bg-transparent md:border-b-[3px] md:border-orange-300 mb-3  mr-2 sm:mr-0">
    //         لینک های مهم
    //       </h3>
    //       <ul className="inline-flex flex-col child:cursor-pointer gap-2 child-hover:text-orange-300 child:transition-all child:duration-200 child:ease-in mr-2 sm:mr-0">
    //         <li>
    //           <a href="#">خانه</a>
    //         </li>
    //         <li>
    //           <a href="#">درباره ما</a>
    //         </li>
    //         <li>
    //           <a href="#">تماس با ما</a>
    //         </li>
    //         <li>
    //           <a href="#">ارتباط با ما</a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="mb-6 text-white">
    //       <h3 className="text-2xl font-DanaDemiBold pr-2 border-r-4 border-orange-300 bg-gray-700 md:border-0 md:bg-transparent md:border-b-[3px] md:border-orange-300 mb-3  mr-2 sm:mr-0">
    //         لینک های مهم
    //       </h3>
    //       <ul className="inline-flex flex-col child:cursor-pointer gap-2 child-hover:text-orange-300 child:transition-all child:duration-200 child:ease-in mr-2 sm:mr-0">
    //         <li>
    //           <a href="#">خانه</a>
    //         </li>
    //         <li>
    //           <a href="#">درباره ما</a>
    //         </li>
    //         <li>
    //           <a href="#">تماس با ما</a>
    //         </li>
    //         <li>
    //           <a href="#">ارتباط با ما</a>
    //         </li>
    //       </ul>
    //     </div>
    //     </div>
    //     <div className="w-36 bg-white rounded-lg hover:scale-105 transition-all duration-200 ease-in">
    //       <a href="#">
    //         <img src="./../src/assets/images/png/enamaad.png" alt="enamaad" />
    //       </a>
    //     </div>
    //   </div>
    // </footer>
    <footer className="mt-10">
      <div className="flex items-center justify-around flex-wrap pt-14 pb-8 bg-dark-blue shadow-5xl">
        <div className="flex-col md:flex-row flex md:items-center md:justify-between text-white">
          <div className="flex flex-col gap-6 w-[90%] md:w-96 mx-auto text-justify ">
            <h3 className="mb-5 py-1 text-2xl font-DanaDemiBold border-r-4 border-[#3b6bb0] pr-2 bg-[#ccdaee] text-black">
              درباره سایت
            </h3>
            <p className="md:max-w-md lg:max-w-xl mb-6 md:mb-4">
              دریافت گواهی از سایت گواهی آنلاین بسیار راحت است. <br />
              گواهی های صادر شده توسط گواهی آنلاین شامل اطلاعات مرتبط با دوره ،
              نام و نام خانوادگی ، تاریخ صدور و مدت زمان دوره آموزش است
            </p>
          </div>
        </div>
        <div className="sm:flex text-center gap-x-20 mx-5 max-sm:w-[90%]">
          <div className="mb-6 text-white">
            <h3 className=" text-2xl font-DanaDemiBold pr-2 border-[#3b6bb0] md:border-0 md:bg-transparent border-b-[3px] md:border-orange-300 mb-3  mr-2 sm:mr-0">
              لینک های مهم
            </h3>
            <ul className="inline-flex flex-col child:cursor-pointer gap-2 child-hover:text-orange-300 child:transition-all child:duration-200 child:ease-in mr-3 sm:mr-0">
              <li>
                <a href="#">خانه</a>
              </li>
              <li>
                <a href="#">مشتریان</a>
              </li>
              <li>
                <a href="#">گواهی نامه ها</a>
              </li>
              <li>
                <a href="#">تماس با ما</a>
              </li>
            </ul>
          </div>
          <div className="mb-6 text-white">
            <h3 className="text-2xl font-DanaDemiBold pr-2 border-r-4 border-[#3b6bb0] md:border-0 md:bg-transparent md:border-b-[3px] md:border-orange-300 mb-3  mr-2 sm:mr-0">
              لینک های مهم
            </h3>
            <ul className="inline-flex flex-col child:cursor-pointer gap-2 child-hover:text-orange-300 child:transition-all child:duration-200 child:ease-in mr-3 sm:mr-0">
              <li>
                <a href="#">خانه</a>
              </li>
              <li>
                <a href="#">درباره ما</a>
              </li>
              <li>
                <a href="#">تماس با ما</a>
              </li>
              <li>
                <a href="#">ارتباط با ما</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-28 bg-white rounded-lg hover:scale-105 transition-all duration-200 ease-in">
          <a href="#">
            <img src="./../src/assets/images/png/enamaad.png" alt="enamaad" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
