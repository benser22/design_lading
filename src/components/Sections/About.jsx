import { useState } from "react";
import data from "../../data.json";
import Layout from "../ui/Layout";
import { FaPlay } from "react-icons/fa";

function About() {
  const [videoPaused, setVideoPaused] = useState(true);

  const handleVideoToggle = () => {
    const video = document.querySelector("video");
    setVideoPaused(!videoPaused);
    if (videoPaused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section id="about">
      <Layout>
        <div className="w-full flex flex-col mx-auto text-center mt-6 lg:mt-24">
          <h1 className="text-blue-custom font-bold text-xl mini:text-2xl sm:text-3xl md:text-[48px]">
            {data["section-about"].title}
          </h1>
          <div className="md:mt-20 xl:mt-30 pb-20 items-center text-left px-2 grid grid-cols-1 lg:grid-cols-2 mx-auto w-full">
            {/* column 1 */}
            <div className="py-8 w-full px-4 lg:px-0 lg:w-1/2 mx-auto space-y-4">
              <p className="text-xl font-bold text-blue-custom">
                {data["section-about"].subtitle}
              </p>
              <p className="text-md text-left text-gray-custom">
                {data["section-about"].paragraph}
              </p>
              <button className="button-custom">
                {data["section-about"].button}
              </button>
            </div>

            {/* column 2 */}
            <div className="relative lg:mr-20">
              <video
                className="h-full w-full rounded-lg"
                controls
                onPlay={() => setVideoPaused(false)}
                onPause={() => setVideoPaused(true)}
              >
                <source
                  src={data["section-about"].video.url}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {videoPaused && (
                <button
                  className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-full w-20 h-20"
                  style={{ margin: "auto" }}
                  onClick={handleVideoToggle}
                >
                  <FaPlay className="text-6xl p-4 pl-5 opacity-90" />
                </button>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}

export default About;
