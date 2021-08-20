import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
function ContactForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("data", data);
    setLoading(true);
    // try {
    //   data.service = data.service?.includes?.("All")
    //     ? "All"
    //     : data.service.toString();
    //   const promise = axios({
    //     method: "post",
    //     url: "https://us-central1-houzie-b645a.cloudfunctions.net/contactForm",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //     data: data,
    //   });
    //   toast.promise(promise, {
    //     loading: "Submitting...",
    //     success: "Your response has been recorded",
    //     error: "Something went wrong",
    //   });
    //   promise
    //     .then((res) => {
    //       if (res.status === 200) {
    //       }
    //     })
    //     .finally(() => {
    //       setLoading(false);
    //     });
    // } catch (error) {
    //   setLoading(false);
    // }
  };
  console.log("errors", errors);
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 max-w-md w-full text-xl"
    >
      {/* {errors?.service?.message && (
        <div className="text-red-600 text-xs">{errors?.service?.message}</div>
      )} */}
      <div>
        <div className="font-semibold text-2xl">Name*</div>
        <input
          {...register("name", {
            required: "Required",

            pattern: {
              value: /^\s*[a-zA-Z][a-zA-Z ]*$/,
              message: "Invalid name",
            },
          })}
          className={`${
            errors?.name?.message ? "border-red-400" : "border-gray-400"
          } border w-full bg-white focus:border border-primary-600 focus:ring-2 ring-primary-300 outline-none focus:outline-none py-3 px-3 transition-all duration-300 ease-in-out`}
        />
        {errors?.name?.message && (
          <div className="text-red-600 text-xs mt-1">
            {errors?.name?.message}
          </div>
        )}
      </div>

      <div>
        <div className="font-semibold text-2xl">Email*</div>
        <input
          {...register("email", {
            required: "Required",
            pattern: {
              message: "Email format is incorrect.",
              value: emailRegex,
            },
          })}
          className={`${
            errors?.email?.message ? "border-red-400" : "border-gray-400"
          } border w-full bg-white focus:border border-primary-600 focus:ring-2 ring-primary-300 outline-none focus:outline-none py-3 px-3 transition-all duration-300 ease-in-out`}
        />
        {errors?.email?.message && (
          <div className="text-red-600 text-xs mt-1">
            {errors?.email?.message}
          </div>
        )}
      </div>
      <div>
        <div className="font-semibold text-2xl">Message*</div>
        <textarea
          rows={5}
          {...register("message", {
            required: "Required",
            pattern: {
              value: /^\s*[a-zA-Z][a-zA-Z ]*$/,

              message: "Invalid name.",
            },
          })}
          className={`${
            errors?.message?.message ? "border-red-400" : "border-gray-400"
          } border w-full bg-white focus:border border-primary-600 focus:ring-2 ring-primary-300 outline-none focus:outline-none py-3 px-3 transition-all duration-300 ease-in-out`}
        />
        {errors?.message?.message && (
          <div className="text-red-600 text-xs mt-1">
            {errors?.message?.message}
          </div>
        )}
      </div>

      <div className="">
        <button
          type="submit"
          className="flex items-center gap-1 px-5 sm:px-16 py-3 text-xl rounded-xl bg-primary-f text-white"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
