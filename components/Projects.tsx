import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        EXPLORE NOW
      </p>
      <div className="container mx-auto 2xl">
        <div className="flex flex-col md:flex-row flex-wrap mt-7">
          <Link
            href="https://stream-student-web.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] flex-1 mb-5"
          >
            <div className="flex-row flex">
              <div className="p-3">
                <p className="text-white font-semibold text-xl">StreamStudent</p>
                <p className="text-gray-500 text-[10px]">
                  Designed a modern UI website code backend with handling all edge cases.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://prizen.in/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] flex-1 mb-5"
          >
            <div className="flex-row flex">
              <div className="p-4">
                <p className="text-white font-semibold text-xl">Prizen</p>
                <p className="text-gray-500 text-[10px]">
                  Developed a server-side code of web application on nodejs that allows users to introduce new features for e-commerce.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap">
          <Link
            href="https://www.iamjunion.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] flex-1 mb-5"
          >
            <div className="flex-row flex">
              <div className="p-3">
                <p className="text-white font-semibold text-xl">IamJunion</p>
                <p className="text-gray-500 text-[10px]">
                  Developed the server-side code of Verge Systems website using nodejs.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://montaj.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] flex-1 mb-5"
          >
            <div className="flex-row flex">
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Montaj.At</p>
                <p className="text-gray-500 text-[10px]">
                  Designed the server-side code of Montaj.At website using nodejs for an affiliate marketing company.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-row flex mb-5">
          <div className="p-3">
            <p className="text-white font-semibold text-xl">Solar Monitoring</p>
            <p className="text-gray-500 text-[10px]">
              Developed a server-side code of web application on nodejs that allows users to introduce new features for solar monitoring.
            </p>
          </div>
        </div>
        <div className="flex-row flex mb-5">
          <div className="p-3">
            <p className="text-white font-semibold text-xl">AQMS</p>
            <p className="text-gray-500 text-[10px]">
              Developed a server-side code of application on nodejs that allows users to introduce new features for air quality monitoring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
