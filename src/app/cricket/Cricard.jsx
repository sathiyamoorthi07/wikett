import React from "react";
import Payment from "./Payment";

function Cricard() {
  return (
    <div className="">
      <div className="h-auto bg-slate-50 pl-[8px]">
        <h1 className=" text-center text-customBlue-primblue text-2xl font-bold pt-10 ">
          Considerables & Avoidables
        </h1>
        <div className="">
          <div className="grid md:grid-cols-2 lg:px-24 lg:w-auto">
            <div className="m-10 border border-green-500 lg:w-[520px]  w-[300px] bg-white rounded-xl hover:bg-green-50">
              <h1 className="text-xl font-bold p-4 text-customBlue-primblue text-center">
                Points to Consider
              </h1>
              <div className="">
                <ul className="list-disc list-outside px-10 pb-5 space-y-3 text-gray-700 text-[14px]">
                  <li>
                    Read the preview of the game and ensure that all players
                    from the final XI of both teams are fit for the game.
                  </li>
                  <li>
                    Check and analyze the details about the stadium and pitch.
                  </li>
                  <li>
                    Make a team combination of 5 batsmen, 3 all-rounders and 3
                    bowling specialists.
                  </li>
                  <li>
                    Choose the wicketkeeper who comes in the batting order.
                  </li>
                  <li>
                    Select Captain and Vice-Captain based on their recent
                    performances.
                  </li>
                </ul>
              </div>
            </div>

            <div className="m-10 border border-red-500 lg:w-[520px]  w-[300px] bg-white rounded-xl hover:bg-red-50">
              <h1 className="text-xl font-bold py-5 text-customBlue-primblue text-center">
                Points to Avoid
              </h1>
              <div className="">
                <ul className="list-disc list-outside px-10 pb-7 space-y-3 text-gray-700 text-[14px]">
                  <li>
                    Avoid picking players based on their names only. Look at
                    their form as well.
                  </li>
                  <li>
                    Avoid adding random players to a fantasy team. Do some
                    research and background checks.
                  </li>
                  <li>Avoid making one single fantasy team.</li>
                  <li>Avoid creating a team at the last minute.</li>
                  <li>
                    {`Don't play only to earn money. Take some enjoyment from it.`}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Payment /> */}
    </div>
  );
}

export default Cricard;
