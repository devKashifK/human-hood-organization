import React from "react";
import "./help.css";
import {MdOutlineVolunteerActivism, MdOutlineCardGiftcard} from 'react-icons/md'

export default function Helpus() {
  return (
    <section className="helpus">
      <div className="heading__sub-heading help_heading">
        <span className="sub_heading_middle">Help & donate us now</span>
        <h3 className="heading_center">
          Find the popular cause and donate them
        </h3>
      </div>
      <div className="help_container">
        <div className="help_box">
        <div className="help_shape green"></div>
            <div className="help_info">
          <span className="help_icon"><MdOutlineVolunteerActivism /></span>
          <h3 className="help_titile"> Became a Member of our Donor Family</h3>
          </div>
          <p className="description_black_italic">
            Lorem ipsum dolor sit amet consectetur.sit amet consectetur  
          </p>
          <ul className="help_list_conatiner">
            <li className="help_list">
              Lorem ipsum dolor sit amet consectetur 
              </li>
            <li className="help_list">
              Lorem ipsum dolor sit amet consectetur
            </li>
            <li className="help_list">
              Lorem ipsum dolor sit amet consectetur
            </li>
          </ul>
          <button className="btn-white m-50">View Details</button>
        </div>
        <div className="help_box">
            <div className="help_shape"></div>
            <div className="help_info">
          <span className="help_icon yellow"><MdOutlineCardGiftcard /></span>
          <h3 className="help_titile"> Get involved with us</h3>
          </div>
          <p className="description_black_italic">
            Lorem ipsum dolor sit amet consectetur.sit amet consectetur
          </p>
          <ul className="help_list_conatiner">
            <li className="help_list">
              Lorem ipsum dolor sit amet consectetur 
            </li>
            <li className="help_list">
              Lorem ipsum dolor sit amet consectetur
            </li>
            <li className="help_list">
              Lorem ipsum dolor sit amet consectetur
            </li>
          </ul>
          <button className="btn-white m-50">View Details</button>
        </div>
      </div>
    </section>
  );
}
