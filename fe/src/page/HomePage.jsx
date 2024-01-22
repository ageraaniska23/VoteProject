import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const images = [
  'https://img.freepik.com/free-vector/asian-rice-field-terraces-morning-mountains-landscape-paddy-plantation-cascades-farm-mount-water-channel-with-growing-plants-scenery-meadow-with-green-grass-cartoon-vector-illustration_107791-10452.jpg?size=626&ext=jpg&ga=GA1.2.880816621.1702890187&semt=ais',
  'https://img.freepik.com/free-photo/flag-indonesia_1401-133.jpg?size=626&ext=jpg&ga=GA1.2.880816621.1702890187&semt=sph',
  
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLoginButtonClick = () => {
    navigate('/Home');
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      handleNextImage();
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(slideshowInterval);
  }, []);

  return (
    <div
      className="hero min-h-screen relative"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content relative z-10">
        <div className="max-w-md">
          <h1 className="mb-2 text-5xl font-bold text-white">WELCOME TO   </h1>
          <h1 className='mb-2 text-3xl font-bold italic text-green-400'>KuVt Project</h1>
          <p className="mb-5 font-serif text-white">
            Mari kita wujudkan demokrasi yang adil dan transparant.
          </p>
          <button
            onClick={handleLoginButtonClick}
            className="btn btn-primary bg-accent rounded-3xl"
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={handlePrevImage}
          className="arrow-button left-4 text-white text-3xl"
        >
          &lt;
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={handleNextImage}
          className="arrow-button right-4 text-white text-3xl"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Hero;
