import React from "react";

const Home = () => {
  return (
    <div>
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
      <div  className="text-wrap h-screen w-full  flex flex-col flex-wrap justify-center items-center ">
        <h3 className="text-yellow-300 text-6xl m-2 tracking-widest p-2">Welcome to <span className="text-7xl text-gray-900">Foodilivery</span>  Your One-Stop Destination for Freshness and Quality!</h3>
        <p className="text-balance text-gray-100 text-2xl tracking-widest italic  p-2">At Foodilivery, we believe that great meals start with great ingredients. As your trusted neighborhood grocer, we're dedicated to providing you with the finest selection of fresh produce, pantry essentials, and specialty items to make every meal memorable.</p>
      </div>
        {/* <button className="btn btn-primary">Get Started</button> */}
      </div>
    </div>
    </div>
        <div className="text-center">
        {/* <p className="text-wrap h-screen w-full  flex flex-col flex-wrap justify-center items-center ">
          <h3 className="text-warning text-6xl m-2 tracking-widest p-2">Welcome to <span className="text-7xl text-yellow-900">Foodilivery</span>  Your One-Stop Destination for Freshness and Quality!</h3>
          <p className="text-balance text-2xl tracking-widest italic  p-2">At Foodilivery, we believe that great meals start with great ingredients. As your trusted neighborhood grocer, we're dedicated to providing you with the finest selection of fresh produce, pantry essentials, and specialty items to make every meal memorable.</p>
        </p> */}
        <div className="carousel w-full h-1/3 ">
          <div
            id="slide1"
            className="carousel-item relative flex justify-center items-center  w-full"
          >
            <img
              src="https://img.freepik.com/free-vector/flat-people-order-food-online-grocery-shopping-from-mobile-application-internet-purchases-with-home-delivery-from-supermarket-store-smartphone-screen-with-buy-button-basket-full-products_88138-856.jpg?size=626&ext=jpg"
              className="w-5/6 h-4/5 "
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle  btn-warning ">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle  btn-warning ">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative flex justify-center items-center  w-full"
          >
            <img
              src="https://img.freepik.com/free-photo/man-delivering-groceries-customers_23-2149950071.jpg?size=626&ext=jpg"
              className="w-5/6 h-4/5"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle  btn-warning ">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle  btn-warning ">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide3"
            className="carousel-item relative flex justify-center items-center  w-full"
          >
            <img
              src="https://media.istockphoto.com/id/1485785466/photo/man-looking-at-smartphone-while-choosing-items-in-supermarket.jpg?s=2048x2048&w=is&k=20&c=hRh_SDvv1G4DmawL6yeonDBQhWeGZt1emJ9OKCCtbn8="
              className="w-5/6 h-4/5"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle  btn-warning ">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle  btn-warning ">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide4"
            className="carousel-item relative flex justify-center items-center  w-full"
          >
            <img
              src="https://media.istockphoto.com/id/1497187191/photo/close-up-of-unrecognizable-customer-checking-her-receipt-after-purchasing-groceries-in-the.jpg?s=2048x2048&w=is&k=20&c=Fqu63fXkMQFps0W4oMYyr5rPKdSTfEO987rRhc_lMeU="
              className="w-5/6 h-4/5"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle  btn-warning">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle  btn-warning">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Home;
