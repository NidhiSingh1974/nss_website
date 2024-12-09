import React from "react";

export default function Services() {
  return (
    <>
      <h1 className="text-center text-5xl p-3 underline decoration-[#c63b3e] underline-offset-4">
        {" "}
        Services
      </h1>
      <div className="flex flex-wrap justify-center mt-10">
        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full dark:bg-gray-800 bg-[#c63b3e] p-8 flex-col">
            <div className="flex items-center mb-3">
              <h2 className="text-white dark:text-white text-lg font-medium">
                Security Services
              </h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base text-white dark:text-gray-300">
                Looking for reliable security services to protect your assets
                and ensure peace of mind? Our security solutions are designed to
                meet your specific needs, whether it’s safeguarding your
                business, property, or personal safety. With highly trained
                professionals, advanced monitoring systems, and a commitment to
                excellence, we provide 24/7 protection to help you focus on what
                matters most. Partner with us for security services that deliver
                confidence, dependability, and a safe environment for all.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full dark:bg-gray-800 bg-[#c63b3e] p-8 flex-col">
            <div className="flex items-center mb-3">
              <h2 className="text-white dark:text-white text-lg font-medium">
                House Keeping Services
              </h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base text-white dark:text-gray-300">
                Need a spotless, well-maintained space without the hassle? Our
                housekeeping services are here to keep your home or office
                sparkling clean and organized. With a team of skilled
                professionals, we offer customized cleaning plans to meet your
                needs, whether it’s daily upkeep, deep cleaning, or specialized
                care. Enjoy a pristine environment and let us handle the
                cleaning, so you can focus on what truly matters!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
