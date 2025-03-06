import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gray-900 text-white">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Easy Visa Processing</h2>
          <p className="text-lg mt-2">Apply for visas hassle-free with our streamlined process.</p>
          <a href="/apply" className="btn btn-primary mt-4">Apply Now</a>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Track Your Visa Status</h2>
          <p className="text-lg mt-2">Get real-time updates on your visa application.</p>
          <a href="/track" className="btn btn-secondary mt-4">Track Now</a>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Get Expert Assistance</h2>
          <p className="text-lg mt-2">Our team is here to guide you at every step.</p>
          <a href="/contact" className="btn btn-accent mt-4">Contact Us</a>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Plan Your Next Journey</h2>
          <p className="text-lg mt-2">Find the best visa options for your travel needs.</p>
          <a href="/visas" className="btn btn-success mt-4">Explore Visas</a>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
