import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Button from "../../components/button/Button";

const Form = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_9qd1taj",
        "template_su0puwl",
        form.current,
        "3gNpWLcL-g32TfqK0"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Show the modal upon successful submission
          setShowModal(true);
          // Redirect to external URL
          window.location.href = 'https://3cx.logicpointng.com/meet/logicpointmeetings';
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="lg:max-w-[1240px] lg:mx-[auto] rounded-lg shadow-xl bg-[#181830] px-[2rem] lg:px-[5rem] py-[3rem] mb-[5rem] font-[exo]">
      <form onSubmit={sendEmail} ref={form}>
        <h1 className="text-sm md:text-lg lg:text-xl font-semibold text-white">
          Or fill out the form below and send
        </h1>
        <div className="grid lg:grid lg:grid-cols-2 lg:gap-8 text-[0.8rem]">
          <div>
            <div className="grid gap-4 pt-[2rem]">
              <label name="name" className="text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="rounded px-[2rem] py-[1rem] text-black focus:outline-none"
              />
            </div>
            <div className="grid gap-4 pt-[2rem]">
              <label name="email" className="text-white">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="rounded px-[2rem] py-[1rem] text-black focus:outline-none"
              />
            </div>
            <div className="grid gap-4 pt-[2rem]">
              <label name="subject" className="text-white">
                Enter Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="What is the subject of this message"
                className="rounded px-[2rem] py-[1rem] text-black focus:outline-none"
              />
            </div>
            <div className="hidden lg:flex lg:pt-[3rem]">
                <Button description="Schedule Meeting" type="submit" />
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-[2rem]">
            <label name="msg" className="text-white">
              Enter Message
            </label>
            <textarea
              name="msg"
              placeholder="Write your message"
              className="rounded px-[2rem] py-[1rem] text-black h-[15rem] focus:outline-none"
            />
          </div>
          <div className="pt-[3rem] lg:hidden">
            <a
              href="https://3cx.logicpointng.com/meet/logicpointmeetings"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button description="Schedule Meeting" type="submit" />
            </a>
          </div>
        </div>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-900">
          <div className="bg-white p-6 rounded shadow-md">
            <p className="text-xl font-semibold mb-2">
              Thank you for your submission!
            </p>
            <p className="text-gray-700">We will get back to you shortly.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-[#EDA921] hover:bg-[#F7B32B] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
