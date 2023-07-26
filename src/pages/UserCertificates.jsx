import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useCertificate, useNationalId } from "../hooks";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { LiaFileDownloadSolid } from 'react-icons/lia';

const UserCertificates = () => {
  const { data: userNationalId, isLoading:userLoading } = useNationalId();
  const { data: userCertificates, isLoading: certificatesLoading } = useCertificate();
  const params = useParams();
  let mainUser;
  if (userNationalId) {
    mainUser = userNationalId.find((user) => user.id == params.userId);
  }

  return (
    <>
      <Navbar />
      {!userLoading && (
        <section className="mt-32 px-10 shadow-4xl bg-light-blue py-16 -skew-y-3">
        <div className="flex items-center justify-around skew-y-3">
          <div className="flex bg-dark-blue text-white flex-col gap-10 mx-auto lg:mx-0  py-12 max-sm:w-11/12  md:w-[500px] xl:w-4/12 rounded-xl  border-solid border-2 border-black/25">
            <div className="max-sm:flex-col mx-auto flex gap-6 items-center border-b-2 border-white/10 pb-10">
              <img
                className="max-sm:w-[55%] max-sm:mx-auto sm:w-[30%]  mr-9 mt-1 rounded-full"
                src="./../src/assets/images/png/user-profile.png"
                alt="user__profile"
              />
              <div className="flex-col">
                <h2 className="max-sm:pb-2 lg:pr-3 xl:pr-4 text-4xl lg:text-3xl xl:text-3xl font-bold my-6">
                  {mainUser.name}
                </h2>
                <p className="pr-4 pt-2 text-lg lg:text-base xl:text-lg">
                  {mainUser.national_id}
                </p>
              </div>
            </div>
            <h2 className="text-center text-xl font-bold  mx-auto w-9/12">
              مدرک خودت رو همین الان دانلود کن!
            </h2>

            <div className="flex flex-col gap-4 mt-4 rounded-lg">
              <div className="max-sm:flex-col flex items-center justify-around max-sm:gap-3 max-sm:mx-auto sm:mx-0">
                <p className="flex items-center sm:justify-around max-sm:w-[90%] w-auto">
              
                  <HiMiniCheckBadge className="w-5 h-5 ml-[6px]"/>
                  گواهی فلان
                </p>
                <a
                  href="#"
                  className="flex items-center justify-around bg-blue-400 text-white hover:bg-white hover:text-blue-400 transition-all duration-200 ease-in rounded-lg py-2 px-4 gap-2"
                >
                  دانلود رزومه
             
                  <LiaFileDownloadSolid className="w-6 h-6"/>
                </a>
              </div>
              <div className="max-sm:flex-col flex items-center justify-around max-sm:gap-3 max-sm:mx-auto sm:mx-0">
                <p className="flex items-center sm:justify-around max-sm:w-[90%] sm:w-auto">
               
                  <HiMiniCheckBadge className="w-5 h-5 ml-[6px]"/>
                  گواهی فلان
                </p>
                <a
                  href="#"
                  className="flex items-center justify-around bg-blue-400 text-white hover:bg-white hover:text-blue-400 transition-all duration-200 ease-in rounded-lg py-2 px-4 gap-2"
                >
                  دانلود رزومه
  
                  <LiaFileDownloadSolid className="w-6 h-6"/>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:w-8/12 xl:max-w-xl">
            <img src="./../src/assets/images/png/1.png" alt="image" />
          </div>
        </div>
      </section>
      )}
      <Footer />
    </>
  );
};

export default UserCertificates;
