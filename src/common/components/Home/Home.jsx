import React from "react";

const Home = () => {
  return (
    <div
    className="hero min-h-screen"
    style={{
      backgroundImage:
        "url(https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2017_26/2053956/170627-better-grocery-store-main-se-539p.jpg)",
    }}
  >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="flex flex-col hero-content text-center text-neutral-content">
      <div className="flex flex-col">
        <div className="text-wrap h-screen w-full flex flex-col flex-wrap justify-center items-center px-4">
          <h3 className="text-yellow-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl m-2 tracking-widest p-2">
            Welcome to <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900">Foodilivery</span> Your One-Stop Destination for Freshness and Quality!
          </h3>
          <p className="text-balance text-gray-100 text-lg sm:text-xl md:text-2xl lg:text-2xl tracking-widest italic p-2">
            At Foodilivery, we believe that great meals start with great ingredients. As your trusted neighborhood grocer, we're dedicated to providing you with the finest selection of fresh produce, pantry essentials, and specialty items to make every meal memorable.
          </p>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Home;
