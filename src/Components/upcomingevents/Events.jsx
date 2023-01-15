import React, { useEffect } from "react";
import './event.css';
import { Eventdata } from "./eventdata";
import{AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

export default  function Events(){

    let eventInterval;
    const autoplay = "true";
    const time = 3000;

    function ChangeEvent(){
        const eventBox2 = document.querySelector(".event_box_2");
        const eventCard = document.querySelector(".event_card");
        eventBox2.scrollLeft += eventCard.offsetWidth + 25;
        if(Math.floor(eventBox2.scrollWidth - eventBox2.scrollLeft)<=
        eventBox2.offsetWidth){
            eventBox2.scrollLeft = 0;
        }
    }
    function ChangeEventLeft(){
        const eventBox2 = document.querySelector(".event_box_2");
        const eventCard = document.querySelector(".event_card");
        eventBox2.scrollLeft += -(eventCard.offsetWidth + 25);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function autoChangeEvent(){
        eventInterval = setInterval(ChangeEvent , time)
    };
    function OnHover(){
        clearTimeout(eventInterval);
    }

    useEffect(()=> {
       if(autoplay){
        autoChangeEvent()
       }
       return()=> clearTimeout(eventInterval)
    }, [autoChangeEvent, eventInterval])
    return(
        <section className="events">
           
            <div className="event_container">
            <div className="nav_btn">
                <span className="left" onClick={()=> ChangeEventLeft()}><AiOutlineLeft /></span>
                <span className="right" onClick={()=> ChangeEvent()}><AiOutlineRight /></span>
            </div>
            <div className="event_box_1">
            <span className="sub_heading_left">Upcoming Events</span>
            <h2 className="heading_left_">Join our latest upcoming events</h2>
            <p className="description_event">There are many variations of passages of lorem ipsum available but the majority have suffered.</p>
            <button className="btn-primary_dark ">Discover More</button>
            </div>
            <div className="event_box_2">
                 
            
                {Eventdata.map((event, )=> {
                    return(
                        <div className="event_card " 
                        onMouseEnter={() => OnHover()}
                        onMouseLeave={() => autoChangeEvent()}
                        key ={event.id} 
                        >
                            <div className="event_car_image_holder" style={{backgroundImage: `url(${event.image})`}}></div>
                            <div className="overlay__event"></div>
                            <span className="event_date">{event.date}</span>
                            <div className="event_info">
                                <ul className="event_icon_address">
                                    <li className="event_address"><span className="event_icon">{event.icon2}</span>{event.time}</li>
                                    <li className="event_address"><span className="event_icon">{event.icon1}</span>{event.location}</li>
                                </ul>
                                <h3 className="event_title">{event.title}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
            </div>
        </section>
    )
}