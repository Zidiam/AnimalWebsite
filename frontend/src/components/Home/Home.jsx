import React from 'react';
import animalImage from "./images/animals.PNG";
const Home = () => {
  return (
      <div>
        <strong><center>Welcome to a page dedicated to Animals!</center></strong>
        <div
          className="bg_image"
          style={{
            backgroundImage: 'url(' + animalImage + ')',
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5"
          }}
      />
      </div>
  );
};

export default Home;
