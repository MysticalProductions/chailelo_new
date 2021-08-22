import React from "react";

function VisitUs() {
  return (
    <div className="">
      <div className="max-w-screen-2xl xl:px-24 pt-5 pb-12 mx-auto">
        <div className="text-6xl font-extrabold text-primary-p text-center mb-12">
          VISIT US
        </div>
        <div className="flex flex-col justify-center">
          {[
            {
              city: "Fasdfasdf",
              address1: "Line 1",
              address2: "Line 2",
              pincode: "854642",
              email: "adsfasdffa@asdfasdf.com",
              phone: "545765767634",
              lat: "",
              long: "",
            },
          ].map(
            ({
              city,
              address1,
              address2,
              pincode,
              email,
              phone,
              lat,
              long,
            }) => {
              return (
                <div className="grid grid-cols-2 gap-5 text-2xl items-center">
                  <div>
                    <div className="text-3xl mb-5 font-semibold">{city}</div>
                    <div>{address1}</div>
                    <div>{address2}</div>
                    <div>{pincode}</div>
                    <div>{email}</div>
                    <div>{phone}</div>
                  </div>

                  <div
                    className="w-full overflow-hidden bg-none border"
                    style={{
                      height: "250px",
                    }}
                  >
                    <iframe
                      title={address1}
                      style={{
                        height: "250px",
                      }}
                      allowfullscreen=""
                      loading="lazy"
                      width="100%"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1041.9874656923007!2d77.24660244924856!3d28.545306944944674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3341a025de9%3A0x7e4be10a8cfda152!2sChai%20lelo%20-%20Chai%20Cafe!5e0!3m2!1sen!2sin!4v1629254513394!5m2!1sen!2sin"
                      // src={
                      //   "https://maps.google.com/maps?width=644&height=385&hl=en&q=chai lelo&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                      // }
                    ></iframe>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default VisitUs;
