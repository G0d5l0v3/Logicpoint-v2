import React from "react";
import Button from "../../components/button/Button"

const Form = () => {
  return (
    <div className="lg:max-w-[1240px] lg:mx-[auto] rounded-lg shadow-xl bg-[#181830] px-[2rem] lg:px-[5rem] py-[3rem] mb-[5rem] font-[exo]">
      <form>
        <h1 className="text-sm md:text-lg lg:text-xl font-semibold text-white">
          Or fill out the form below and send
        </h1>
        <div className="grid lg:grid lg:grid-cols-2 lg:gap-8 text-[0.8rem]">
          <div>
            <div className="grid gap-4 pt-[2rem]">
              <label name="name" className="text-white">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="rounded px-[2rem] py-[1rem] text-black focus:outline-none"
              />
            </div>
            <div className="grid gap-4 pt-[2rem]">
              <label name="email" className="text-white">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="rounded px-[2rem] py-[1rem] text-black focus:outline-none"
              />
            </div>
            <div className="grid gap-4 pt-[2rem]">
              <label name="subject" className="text-white">Enter Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="What is the subject of this message"
                className="rounded px-[2rem] py-[1rem] text-black focus:outline-none"
              />
            </div>
            <div className="hidden lg:flex lg:pt-[3rem]">
            <Button description="Send Message"/>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-[2rem]">
            <label name="msg" className="text-white">Enter Message</label>
            <textarea
              name="msg"
              placeholder="Write your message"
              className="rounded px-[2rem] py-[1rem] text-black h-[15rem] focus:outline-none"
            />
          </div>
          <div className="pt-[3rem] lg:hidden">
            <Button description="Send Message"/>
            </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
