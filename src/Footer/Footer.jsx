import React from "react";
import data from "../data.json";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="flex w-full pt-20 pb-10 bg-blue-custom overflow-hidden">
      <div className="flex flex-col justify-center text-white mx-auto">
        <div className="grid sm:grid-cols-4 mb-12 w-full text-center gap-4">
          <div>COLUMNA 1</div>
          <div>COLUMNA 2</div>
          <div>COLUMNA 3</div>
          <div>COLUMNA 4</div>
        </div>
        <div className="w-screen flex items-center flex-wrap-reverse justify-around gap-6 sm:gap-12 px-1">
          <div className="flex justify-between items-end gap-5">
            <Link
              to={"home"}
              spy={false}
              smooth={true}
              duration={500}
              offset={-85}
              className="cursor-pointer"
            >
              <img
                src={data["section-footer"]["logo-white"].url}
                alt={data["section-footer"]["logo-white"].alt}
                className="h-4 w-auto sm:w-20 lg:w-32 lg:h-auto hover:invert-[0.1]"
              />
            </Link>
            <p className="text-[10px] truncate">
              {data["section-footer"].copywrite}
            </p>
            <a href={data["section-footer"].privacy.url}>
              <p className="text-[10px] truncate hover:text-light-blue-custom">
                {data["section-footer"].privacy.text}
              </p>
            </a>
            <a href={data["section-footer"].terms.url}>
              <p className="text-[10px] truncate hover:text-light-blue-custom">
                {data["section-footer"].terms.text}
              </p>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={data["section-footer"]["social-media"].facebook.link}
              target="_blank"
            >
              <img
                title={`ir a ${data["section-footer"]["social-media"].facebook.link}`}
                width={24}
                src={data["section-footer"]["social-media"].facebook.url}
                alt={data["section-footer"]["social-media"].facebook.alt}
                className="hover:invert-[0.1]"
              />
            </a>
            <a
              href={data["section-footer"]["social-media"].linkedin.link}
              target="_blank"
            >
              <img
                title={`ir a ${data["section-footer"]["social-media"].linkedin.link}`}
                width={24}
                src={data["section-footer"]["social-media"].linkedin.url}
                alt={data["section-footer"]["social-media"].linkedin.alt}
                className="hover:invert-[0.1]"
              />
            </a>
            <a
              href={data["section-footer"]["social-media"].twitter.link}
              target="_blank"
            >
              <img
                title={`ir a ${data["section-footer"]["social-media"].twitter.link}`}
                width={24}
                src={data["section-footer"]["social-media"].twitter.url}
                alt={data["section-footer"]["social-media"].twitter.alt}
                className="hover:invert-[0.1]"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
