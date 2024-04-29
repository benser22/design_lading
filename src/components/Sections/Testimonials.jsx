import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import data from "../../data.json";
import Layout from "../ui/Layout";

const Testimonials = () => {
  const testimonials = data["section-testimonials"].clients;
  const title = data["section-testimonials"].title;

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} className="text-xl text-blue-custom">
        <FaAngleRight className="block sm:hidden arrow-right hover:text-red-custom active:text-blue-custom" />
        <BsArrowRight className="hidden sm:block arrow-right hover:text-red-custom active:text-blue-custom" />
      </div>
    );
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} className="text-xl text-blue-custom">
        <FaAngleLeft className="block sm:hidden arrow-left  hover:text-red-custom active:text-blue-custom" />
        <BsArrowLeft className="hidden sm:block arrow-left  hover:text-red-custom active:text-blue-custom" />
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 542,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <Layout>
      <section id="testimonials">
        <div className="px-4 pt-20">
          <div className="flex flex-col items-center justify-center w-1/2 mx-auto text-center">
            <h1
              className="text-blue-custom font-bold text-xl pb-4 lg:pb-8 mini:text-2xl sm:text-3xl md:text-[48px]"
              style={{ lineHeight: "normal" }}
            >
              {title}
            </h1>
          </div>
          <div className="mx-auto max-w-xl mt-2 break_custom2:mt-8">
            <Slider
              {...settings}
              className="flex items-center justify-center mx-auto gap-4"
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex mx-auto p-6 border break_custom2:max-w-[350px] border-gray-300 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="text-xl font-bold text-blue-custom">
                        {testimonial.title}
                      </p>
                      <p className="text-md text-gray-custom">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="text-gray-custom text-3xl mr-2">"</span>
                    <p className="text-gray-custom text-sm">
                      {testimonial.paragraph}"
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
