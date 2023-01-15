/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import "./mainslider.css";
import { SliderData } from "./Data";
import { useEffect } from "react";





export default function MainSlider() {
const autoplay = 'true';
const time = 5000;
let SlideInterval;


  const [activeslider, setActiveSlider] = useState(0);

  
  function SlideChange(){
   const updateSlider = activeslider >= SliderData.length - 1 ? 0 : activeslider+1  ; 
   setActiveSlider(updateSlider);
  }
  function autoSlidechange(){
   SlideInterval = setInterval(SlideChange ,time);
  }
  useEffect(() => {
    if(autoplay){
      autoSlidechange();
    }
  return ()=> clearInterval(SlideInterval);
  },[autoSlidechange, SlideInterval])

  return (
    <section className="mainsLider">
      
      {SliderData.map((item, i) => {
        return (
          <div
            className={i === activeslider ? "slider slider__active" : 'slider'}
            key = {item.id}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="overlay"></div>
            <div className={i === activeslider ? 'heading__sub-heading data data_active' : "heading__sub-heading data" }>
              <div className="sub_heading_left_main">{item.quote}</div>
              <div className="heading_left">{item.title}</div>
              <div className="description">{item.description}</div>
              <div className="buttons">
                <div className="primary_button">{item.btn1}</div>
                <div className="secondary_button">{item.btn2}</div>
              </div>

            </div>
          </div>
        );
      })}
    </section>
  );
}
