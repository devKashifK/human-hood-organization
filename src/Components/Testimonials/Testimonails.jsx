import React, { useEffect } from "react";
import "./testi.css";
import { testiData } from "./testidata";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { ImQuotesRight } from "react-icons/im";

export default function Testi() {


  const time = 5000;
  const autoplay = "true";
  let testiInterval;

  function nextTesti() {
    const TestiCon = document.querySelector('.testi_box_2');
    const Card = document.querySelector('.testi_card');
    TestiCon.scrollLeft += Card.offsetWidth + 50;
    if (
      Math.floor(TestiCon.scrollWidth - TestiCon.scrollLeft) <=
      TestiCon.offsetWidth
    ) {
      TestiCon.scrollLeft = 0;
    }
  }
  function leftTesti() {
    const TestiCon = document.querySelector('.testi_box_2');
    const Card = document.querySelector('.testi_card');
    TestiCon.scrollLeft += -(Card.offsetWidth + 50);
    return () => clearInterval(nextTesti, time);
  }
  function rightTesti() {
    const TestiCon = document.querySelector('.testi_box_2');
    const Card = document.querySelector('.testi_card');
    TestiCon.scrollLeft += Card.offsetWidth + 50;
    return () => clearInterval(nextTesti, time);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function autoNexttesti() {
    testiInterval = setInterval(nextTesti, time);
  }

  useEffect(() => {
    if (autoplay) {
      autoNexttesti();
    }
    return () => clearInterval(nextTesti, time);
  }, [autoNexttesti, testiInterval]);

  return (
    <section className="testi">
      <div className="testi_one_layer">
        <div className="image_small_box one"></div>
        <div className="image_small_box two"></div>
        <div className="image_small_box three"></div>
        <div className="image_small_box four"></div>
        <div className="testi_overlay"></div>
      </div>
      <div className="testi_layer_2">
        <div className="testi_overlay_2"></div>

        <div className="testi_conatiner">
          <div className="testi_info">
            <span className="sub_heading_left_main m-b-10">
              Our Testimonials
            </span>
            <h3 className="heading_left_testi">
              What They Are Talking About H20
            </h3>
            <p className="description_black_grey">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              sapiente ratione consequatur molestiae modi? Optio cumque ipsum
              praesentium accusantium nihil laborum illum officiis incidunt.
              Aspernatur debitis obcaecati architecto eveniet quod.
            </p>
            <button className="primary_button_dark ">All Testimonials</button>
          </div>
          <div className="nav_testi_button">
            <div className="left_testi" onClick={() => leftTesti()}>
              <AiOutlineLeft />
            </div>
            <div className="right_testi" onClick={() => rightTesti()}>
              <AiOutlineRight />
            </div>
          </div>
          <div className="testi_box_2" >
            {testiData.map((item) => {
              return (
                <div className="testi_card"  key={item.id}>
                  <div className="testi_info_o">
                    <img className="testi_image" src={item.image} alt="" />
                    <div className="testi_profile_info">
                      <h3 className="testi_name">{item.name}</h3>
                      <span className="testi_desg">{item.desgination}</span>
                    </div>
                    <div className="quote_icon">
                      <ImQuotesRight />
                    </div>
                  </div>
                  <p className="testi_description">{item.testi}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
