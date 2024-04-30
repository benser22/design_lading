import React from "react";
import data from "../data.json";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="flex w-full pt-20 pb-10 bg-blue-custom overflow-hidden">
      <div className="flex flex-col justify-center text-white mx-auto">
        <div className="grid sm:grid-cols-4 grid-cols-1 mini:grid-cols-2 w-3/4 mb-12  mx-auto text-center gap-6">
          <div className="flex flex-col col-span-1 sm:col-span-1 text-md space-y-1 text-white">
            <a href={data["section-footer"].product.href}>
              <p className="mb-2 cursor-pointer hover:text-red-custom">
                {data["section-footer"].product.title}
              </p>
            </a>
            {data["section-footer"].product.links.map((link, index) => (
              <RenderLink key={index} link={link} />
            ))}
          </div>
          <div className="flex flex-col col-span-1 sm:col-span-1 text-md space-y-1 text-white">
            <a href={data["section-footer"].company.href}>
              <p className="mb-2 cursor-pointer hover:text-red-custom">
                {data["section-footer"].company.title}
              </p>
            </a>
            {data["section-footer"].company.links.map((link, index) => (
              <RenderLink key={index} link={link} />
            ))}
          </div>
          <div className="flex flex-col col-span-1 sm:col-span-1 text-md space-y-1 text-white">
            <a href={data["section-footer"].support.href}>
              <p className="mb-2 cursor-pointer hover:text-red-custom">
                {data["section-footer"].support.title}
              </p>
            </a>
            {data["section-footer"].support.links.map((link, index) => (
              <RenderLink key={index} link={link} />
            ))}
          </div>
          <div className="flex flex-col col-span-1 sm:col-span-1 text-md space-y-1 text-white">
            <a href={data["section-footer"]["user-cases"].href}>
              <p className="mb-2 cursor-pointer hover:text-red-custom">
                {data["section-footer"]["user-cases"].title}
              </p>
            </a>
            {data["section-footer"]["user-cases"].links.map((link, index) => (
              <RenderLink key={index} link={link} />
            ))}
          </div>
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
                title={data["section-footer"]["social-media"].facebook.link}
                width={24}
                src={data["section-footer"]["social-media"].facebook.url}
                alt={data["section-footer"]["social-media"].facebook.alt}
                className="hover:invert-[0.1]"
              />
            </a>
            <a
              href={data["section-footer"]["social-media"].instagram.link}
              target="_blank"
            >
              <img
                title={data["section-footer"]["social-media"].instagram.link}
                width={24}
                src={data["section-footer"]["social-media"].instagram.url}
                alt={data["section-footer"]["social-media"].instagram.alt}
                className="hover:invert-[0.1]"
              />
            </a>
            <a
              href={data["section-footer"]["social-media"].twitter.link}
              target="_blank"
            >
              <img
                title={data["section-footer"]["social-media"].twitter.link}
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

function RenderLink({ link }) {
  if (link.external === true) {
    return (
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        <p className="text-[14px] hover:text-light-blue-custom cursor-pointer">
          {link.text}
        </p>
      </a>
    );
  } else {
    return (
      <Link
        to={link.url}
        spy={false}
        smooth={true}
        duration={500}
        offset={-75}
        className="cursor-pointer"
      >
        <p className="text-[14px]  hover:text-light-blue-custom cursor-pointer">
          {link.text}
        </p>
      </Link>
    );
  }
}

export default Footer;
