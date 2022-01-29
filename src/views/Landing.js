import React from "react";
import Slider from "react-slick";
import { useHistory } from "react-router-dom";

import Button from "components/Button";

const Landing = () => {
  const history = useHistory();

  const sliderSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <div>
      <div className="header_container">
        <div>Welcome to Guilt-Free Shopping</div>
      </div>
      <div>
        <Slider {...sliderSettings}>
          <div className="landingImg1 landingImg"></div>
          <div className="landingImg2 landingImg"></div>
          <div className="landingImg1 landingImg"></div>
        </Slider>
      </div>
      <div className="mt-10">
        <Button
          color=" #ef9bba"
          boxShadow="0 10px 16px 0 rgb(239 155 186 / 20%), 0 6px 20px 0 rgb(239 155 186 / 19%)"
          click={() => history.push("/login")}
        >
          START SHOPPING
        </Button>
      </div>
    </div>
  );
};

export default Landing;
