import React from 'react';
import '../Images/BackImg.jpg';

function Home() {
  const backgroundImageUrl = 'url("../Images/BackImg.jpg")'; // Replace with your image URL

  return (
    <div
      className='card-body d-flex justify-content-center align-items-center'
      style={{
        height: '80vh',
        backgroundImage: backgroundImageUrl,
        backgroundSize: 'cover', // Adjust as needed
        backgroundPosition: 'center', // Adjust as needed
        backgroundRepeat: 'no-repeat', // Adjust as needed
      }}
    >
      <h1 className="text-center text-white">Upgrade Your Website to the Latest Version of Umbraco to Stay Updated!</h1>
    </div>
  );
}

export default Home;
