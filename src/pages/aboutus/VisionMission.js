import React from "react";

function VisionMission() {
  return (
    <div className="flex flex-col w-full h-72 overflow-y-auto hide-scrollbar my-12">
      <div className="grid grid-cols-12 h-72 justify-center bg-white">
        <div className="col-span-5 text-primary-p text-5xl font-extrabold text-right p-16 flex items-center justify-end">
          <div>VISION</div>
        </div>
        <div className="col-span-7 bg-primary-j p-12 text-2xl text-primary-p font-medium flex items-center">
          <div>
            Est voluptua voluptua sed duo kasd at elitr, sadipscing sadipscing
            aliquyam duo rebum rebum justo. Nonumy justo elitr diam stet.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 h-72 justify-center items-stretch bg-white">
        <div className="col-span-5 text-primary-p text-5xl font-extrabold text-right p-16 flex items-center justify-end">
          <div>MISSION</div>
        </div>
        <div className="col-span-7 bg-primary-j p-12 text-2xl text-primary-p font-medium flex items-center">
          <div>
            Est voluptua voluptua sed duo kasd at elitr, sadipscing sadipscing
            aliquyam duo rebum rebum justo. Nonumy justo elitr diam stet.
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisionMission;
