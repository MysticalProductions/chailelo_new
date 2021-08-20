import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

function Team() {
  return (
    <div className="my-12">
      <div className="xl:px-24 pt-5 pb-12 mx-auto">
        <div className="text-6xl font-extrabold text-primary-p text-center mb-12">
          Meet Our Team
        </div>

        <ScrollContainer className="scroll-container flex gap-3">
          <div className="flex gap-3 overflow-x-visible">
            <div className="focus:outline-none">
              <div className="flex flex-col items-center bg-white rounded-t-xl border w-80">
                <div
                  // alt=""
                  // src="/assets/graphics/OrangeCup.svg"
                  className="flex-shrink rounded-t-xl bg-white border h-56 w-full"
                />
                <div className="text-2xl text-primary-p p-5 flex flex-col w-full font-semibold">
                  <div>NAME</div>
                  <div>Designation</div>
                </div>
              </div>
            </div>
            <div className="focus:outline-none">
              <div className="flex flex-col items-center bg-white rounded-t-xl border w-80">
                <div
                  // alt=""
                  // src="/assets/graphics/OrangeCup.svg"
                  className="flex-shrink rounded-t-xl bg-white border h-56 w-full"
                />
                <div className="text-2xl text-primary-p p-5 flex flex-col w-full font-semibold">
                  <div>NAME</div>
                  <div>Designation</div>
                </div>
              </div>
            </div>
            <div className="focus:outline-none">
              <div className="flex flex-col items-center bg-white rounded-t-xl border w-80">
                <div
                  // alt=""
                  // src="/assets/graphics/OrangeCup.svg"
                  className="flex-shrink rounded-t-xl bg-white border h-56 w-full"
                />
                <div className="text-2xl text-primary-p p-5 flex flex-col w-full font-semibold">
                  <div>NAME</div>
                  <div>Designation</div>
                </div>
              </div>
            </div>
            <div className="focus:outline-none">
              <div className="flex flex-col items-center bg-white rounded-t-xl border w-80">
                <div
                  // alt=""
                  // src="/assets/graphics/OrangeCup.svg"
                  className="flex-shrink rounded-t-xl bg-white border h-56 w-full"
                />
                <div className="text-2xl text-primary-p p-5 flex flex-col w-full font-semibold">
                  <div>NAME</div>
                  <div>Designation</div>
                </div>
              </div>
            </div>
            <div className="focus:outline-none">
              <div className="flex flex-col items-center bg-white rounded-t-xl border w-80">
                <div
                  // alt=""
                  // src="/assets/graphics/OrangeCup.svg"
                  className="flex-shrink rounded-t-xl bg-white border h-56 w-full"
                />
                <div className="text-2xl text-primary-p p-5 flex flex-col w-full font-semibold">
                  <div>NAME</div>
                  <div>Designation</div>
                </div>
              </div>
            </div>
            <div className="focus:outline-none">
              <div className="flex flex-col items-center bg-white rounded-t-xl border w-80">
                <div
                  // alt=""
                  // src="/assets/graphics/OrangeCup.svg"
                  className="flex-shrink rounded-t-xl bg-white border h-56 w-full"
                />
                <div className="text-2xl text-primary-p p-5 flex flex-col w-full font-semibold">
                  <div>NAME</div>
                  <div>Designation</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollContainer>
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-1 px-8 py-4 text-4xl rounded-xl bg-primary-f text-white font-extralight">
            View Full Menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default Team;
