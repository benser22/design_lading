import data from "../../data.json";

function Hero() {
  return (
    <section id="home">
      <div
        style={{
          backgroundImage: `url(${data["section-hero"].bg.url})`,
          backgroundSize: "cover",
          width: "100vw",
        }}
      >
        <div className="pt-2 lg:pt-20 pb-12 sm:pb-52 container max-w-[100vw]">
          <div className="flex flex-col mx-auto text-center mt-44">
            <h1 className="text-blue-custom font-bold text-xl mini:text-3xl sm:text-5xl md:text-6xl">
              {data["section-hero"].title}
            </h1>
            <h1 className="text-blue-custom font-bold text-xl mini:text-3xl sm:text-5xl md:text-6xl">
              {data["section-hero"].title2}
            </h1>
            <p className="text-gray-custom mt-4 w-1/2 mx-auto">
              {data["section-hero"].subtitle}
            </p>
            <div className="min-w-max overflow-hidden flex items-center flex-col mini:flex-row mt-8 mx-auto gap-8">
              <button className="button-custom">
                {data["section-hero"].button1}
              </button>
              <button className="button-red-custom">
                {data["section-hero"].button2}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
