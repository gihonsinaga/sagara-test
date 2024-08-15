import React from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";

export default function LandingPage() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="bg-home-bg h-[600px] w-full bg-cover sm:bg-bottom max-sm:h-[600px] max-sm:bg-top">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 sm:px-40 lg:py-20 lg:flex-row lg:justify-between">
          <h1 className="text-white mt-24 max-sm:text-center">
            <span className="tracking-wide font-medium sm:text-5xl max-sm:text-2xl">
              Live <span className="font-extrabold">Your Best</span> Life <br />
              Using <span className="font-extrabold"> Your Strengths</span>
            </span>
            <p className=" sm:text-base sm:mt-5 max-sm:mt-2 font-extralight sm:w-[560px] max-sm:px-5 max-sm:text-xs">
              Meet some of the people who have completed the Sagara Technology
              and use their results to maximize their potential at work and
              everywhere else.
            </p>
            <button className="tracking-wider sm:text-xs sm:mt-5 max-sm:mt-3 font-medium bg-red-700 bg-opacity-70 rounded py-4 px-14 max-sm:text-[10px]">
              Get Certification
            </button>
          </h1>
        </div>
      </div>

      {/*konten 1 */}
      <div className=" bg-white sm:mt-16">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 sm:px-40 lg:py-20 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center text-black  p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="max-sm:text-xl max-sm:mt-10 text-red-700 font-bold leading-none sm:text-4xl tracking-wide  max-sm:hidden">
              WHY SAGARA <br /> IT CERTIFICATION?
            </h1>
            <table className="mt-2">
              <tbody>
                <tr className="font-extralight items-start text-base ">
                  <td className=" pr-3 sm:text-lg max-sm:text-base font-normal max-sm:hidden">
                    <img src="/assets/1.svg" className="w-40" alt="" />
                  </td>
                  <td className="pl-3 pt-6 ">
                    <span className="font-bold tracking-wide sm:text-lg">
                      Global Credibility Boost
                    </span>
                    <br />
                    <span className="font-normal sm:text-sm tracking-wide max-sm:text-xs">
                      Our certifications are globally recognized, enhancing your
                      credibility, and opening doors to new opportunities.
                    </span>
                  </td>
                </tr>

                <tr className="font-extralight  items-start text-base ">
                  <td className="mb-6 pr-3  sm:text-lg max-sm:text-base font-normal max-sm:hidden">
                    <img src="/assets/2.svg" alt="" />
                  </td>
                  <td className="pl-3 pt-6">
                    {" "}
                    <span className="font-bold tracking-wide sm:text-lg">
                      {" "}
                      Empowering Careers
                    </span>
                    <br />{" "}
                    <span className="font-normal sm:text-sm tracking-wide max-sm:text-xs">
                      Equipped to advance your career, secure promotions, and
                      pursue new job opportunities in the ever-evolving tech
                      industry.
                    </span>
                  </td>
                </tr>
                <tr className="font-extralight  items-start text-base ">
                  <td className="mb-6 pr-3 sm:text-lg max-sm:text-base font-normal max-sm:hidden">
                    <img src="/assets/3.svg" alt="" />
                  </td>
                  <td className="pl-3 pt-6">
                    {" "}
                    <span className="font-bold tracking-wide sm:text-lg">
                      {" "}
                      Expertise Validation
                    </span>
                    <br />
                    <span className="font-normal sm:text-sm tracking-wide max-sm:text-xs">
                      {" "}
                      Showcase your expertise and validate your skills with
                      globally recognized certifications that employers trust.
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="max-sm:hidden flex items-center justify-center  mt-8 lg:mt-20 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              className="w-[600px] h-[500px] sm:hidden lg:flex sm:-mt-14"
              src="/assets/image.png"
            />
          </div>
        </div>
      </div>

      {/*konten 2 */}
      <div className="border-red-700 border-b-4 rounded-full my-3 w-20 mx-auto   max-sm:mt-8 "></div>

      <h1 className="flex sm:mb-4 sm:text-3xl font-normal sm:mt-10 justify-center text-center text-red-700 max-sm:text-xl">
        Empower Yourself with
      </h1>
      <h1 className="flex font-bold sm:text-3xl justify-center text-center text-red-800 max-sm:text-xl">
        Our Certification
      </h1>
      <div className=" bg-white sm:mt-5">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 sm:px-40 lg:py-20 lg:flex-row lg:justify-between">
          <div className="max-sm:hidden flex items-center justify-center  mt-8 lg:mt-20 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              className="w-[600px] h-[500px] sm:hidden lg:flex sm:-mt-14"
              src="/assets/gambar 2.png"
            />
          </div>

          <div className="flex flex-col justify-center text-black  p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="max-sm:text-xl max-sm:mt-10 text-red-700 font-bold leading-none sm:text-4xl tracking-wide  max-sm:hidden">
              Front End Certification?
            </h1>
            <table className="mt-2">
              <tbody>
                <tr className="font-extralight items-start text-base ">
                  <td className=" pr-3 sm:text-lg max-sm:text-base font-normal max-sm:hidden">
                    <img src="/assets/4.png" alt="" />
                  </td>
                  <td className="pl-3 pt-6 ">
                    <span className="font-normal sm:text-sm tracking-wide max-sm:text-xs">
                      This program equips you with the essential skills and
                      knowledge to create visually appealing websites or
                      applications.
                    </span>
                  </td>
                </tr>

                <tr className="font-extralight  items-start text-base ">
                  <td className="mb-6 pr-3  sm:text-lg max-sm:text-base font-normal max-sm:hidden">
                    <img src="/assets/5.png" className="w-20" alt="" />
                  </td>
                  <td className="pl-3 pt-6">
                    <span className="font-normal sm:text-sm tracking-wide max-sm:text-xs">
                      Evaluates your proficiency in frontend programming
                      languages and other relevant frontend technologies.
                    </span>
                  </td>
                </tr>
                <tr className="font-extralight  items-start text-base ">
                  <td className="mb-6 pr-3 sm:text-lg max-sm:text-base font-normal max-sm:hidden">
                    <img src="/assets/6.png" alt="" />
                  </td>
                  <td className="pl-3 pt-6">
                    <span className="font-normal sm:text-sm tracking-wide max-sm:text-xs">
                      {" "}
                      Gain recognition as a qualified frontend developer,
                      enhance your career prospects, and open doors to exciting
                      job opportunities.
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-center mt-10">
              <button className="bg-red-800 text-white py-3 px-20 rounded max-sm:text-xs">
                Get Detail
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
