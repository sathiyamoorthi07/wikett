import Image from "next/image";
import icon from "../assots/icon.png";
import icons from "../assots/icons.png";
import iconss from "../assots/iconss.png";
import iconsss from "../assots/iconsss.png";

export default function Card() {
  return (
    <div className="mx-auto">
      <h1 className="text-center text-customBlue-primblue text-2xl font-bold pt-10">
        Truly Best Gaming Platform
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 pr-5 lg:grid-cols-2 lg:w-[60%]  mx-auto">
        {/* Card 1 */}
        <div className="justify-center md:justify-start pl-[18px] flex ">
          <div className="border border-gray-300 rounded-md px-1 lg:px-4 py-8 mt-10 lg:w-96 w-[300px] justify-between">
            <div className="flex items-center mb-5 text-lg px-3 lg:text-xl ">
              <p>World Class Security</p>
              <div className="lg:ml-16 ml-auto justify-end">
                <Image
                  src={icon}
                  alt=""
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              </div>
            </div>
            <div className="bg-gray-300 h-[1px] lg:w-[330px] w-[295px]"></div>
            <div className="mt-5">
              <div className="text-sm px-3">
                <div className="flex pt-2 pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="md:size-4 size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                      className="text-green-600"
                    />
                  </svg>
                  <p className="px-2">RNG Certified Gaming Platform</p>
                </div>
                <div className="flex pt-2 pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                      className="text-green-600"
                    />
                  </svg>
                  <p className="px-2">100% safe and secure transactions</p>
                </div>
                <div className="flex pt-2 pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                      className="text-green-600"
                    />
                  </svg>
                  <p className="px-2">Complete data and identity privacy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="justify-center md:justify-start pl-[18px] flex">
          <div className="border border-gray-300 rounded-md px-1 lg:px-4 py-8 mt-10 lg:w-96 w-[300px] justify-between">
            <div className="flex items-center mb-5 text-lg px-3 lg:text-xl ">
              <p>Best in Category Offers & Rewards*</p>
              <div className="lg:ml-16 ml-auto justify-end">
                <Image
                  src={icons}
                  alt=""
                  className="w-10 h-10 md:w-auto md:h-auto"
                />
              </div>
            </div>
            <div className="bg-gray-300 h-[1px] lg:w-[330px] w-[295px]"></div>
            <div className="mt-5">
              <div className="text-sm px-3">
                <div className="flex pt-2 pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                      className="text-green-600 "
                    />
                  </svg>
                  <p className="px-2">UNLIMITED Earnings via Missions</p>
                </div>
                <div className="flex pt-2 pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                      className="text-green-600"
                    />
                  </svg>
                  <p className="px-2">Welcome reward of Rs 12,000 Bonus</p>
                </div>
                <div className="flex pt-2 pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                      className="text-green-600"
                    />
                  </svg>
                  <p className="px-2">
                    Earn upto Rs 12,516 per friend via Referrals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="justify-center md:justify-start pl-[18px] flex">
          <div className="border border-gray-300 rounded-md  lg:px-4 py-8 mt-10 lg:w-96 w-[300px] justify-between">
            <div className="flex items-center mb-5 px-5 text-lg lg:text-xl ">
              <p>Most Innovative Gaming Platform</p>
              <div className="lg:ml-16 ml-auto justify-end">
                <Image
                  src={iconsss}
                  alt=""
                  className="w-10 h-10 md:w-auto md:h-auto"
                />
              </div>
            </div>
            <div className="bg-gray-300 h-[1px] lg:w-[330px] w-[295px]"></div>
            <div className="mt-5">
              <div className="text-sm px-3">
                <div className="flex pt-2 pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="md:size-4 size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                      className="text-green-600"
                    />
                  </svg>
                  <p className="px-2">
                    Play 2nd Inning & Live Fantasy [Industry 1st]
                  </p>
                </div>
                <div className="flex pt-2 pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                      className="text-green-600"
                    />
                  </svg>
                  <p className="px-2">Instant Withdrawals of Winnings</p>
                </div>
                <div className="flex pt-2 pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                      className="text-green-600"
                    />
                  </svg>
                  <p className="px-2">Easy-to-use, Simple Interface</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="justify-center md:justify-start pl-[18px] flex">
          <div className="border border-gray-300 rounded-md px-1 lg:px-4 py-8 mt-10 lg:w-96 w-[300px] justify-between">
            <div className="flex items-center px-3 mb-5 text-lg lg:text-xl ">
              <p>Supports Multiple Game Formats</p>
              <div className="lg:ml-16 ml-auto justify-end">
                <Image src={iconsss} alt="" />
              </div>
            </div>
            <div className="bg-gray-300 h-[1px] lg:w-[330px] w-[295px]"></div>
            <div className="mt-5">
              <div className="text-sm px-3">
                <div className="flex pt-2 pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="md:size-4 size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                      className="text-green-600"
                    />
                  </svg>
                  <p className="px-2">H2H Classic</p>
                </div>
                <div className="flex pt-2 pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                      className="text-green-600"
                    />
                  </svg>
                  <p className="px-2">Multiple Tournament</p>
                </div>
                <div className="flex pt-2 pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                      className="text-green-600"
                    />
                  </svg>
                  <p className="px-2">Winner takes all</p>
                </div>
                {/* <div className="flex pt-2 pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                      className="text-green-600"
                    />
                  </svg>
                  <p className="px-2">1 vs 1</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
