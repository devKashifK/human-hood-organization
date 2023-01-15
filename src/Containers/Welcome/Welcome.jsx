import React from "react";
import "./welcome.css";
import { GiBlackHandShield } from "react-icons/gi";
import { FaDonate } from "react-icons/fa";
import Image from "../../Images/blood020.jpg"

export default function Welcome() {
  return (
    <section className="welcome">
      <div className="welcom__image_co">
        <div className="welcome_image_box">
          <div className="image_-border"></div>
          <img className="welcome_image" src={Image} alt="" />
        </div>
      </div>
      <div className="welcome_container">
        <div className="welcome_info">
          <div className="heading__sub-heading">
            <div className="sub_heading_left">
              Welcome to Human Hood Organization
            </div>
            <div className="heading_left_">
              Helping each other can make world better
            </div>
            <div className="description_black m-20">
              We all believe that service to humanity is as equal to serving
              god. We are a team of aspiring and inspiring youth. We are
              continuously imposing our efforts to make this world a better
              place. We try our best to deliver aid, care and relief. H20 -
              Human Hood organization is an NGO that came into existence in 2017
              and still contributing for a major cause.
            </div>
          </div>
          <p className="description_black_dark before_content">
            Raised fund <strong className="normal_strong">Upto 10 Lakhs</strong>{" "}
            Several Projects in <strong className="normal_strong"> Bihar </strong>
            Benefiting {" "}
            <strong className="normal_strong">Thousands</strong> of People
          </p>
          <div className="welcome_icons_info">
            <div className="icon_box">
              <span className="icon_edit">
                <GiBlackHandShield color="#00715d" />
              </span>
              <div className="icon_box_info">
                <h3 className="content_title">Join Our Team</h3>
                <p>Let's join the team and stand together in every battle of ours.</p>
              </div>
            </div>
            <div className="icon_box">
              <span className="icon_edit">
                <FaDonate color="#00715d" />
              </span>
              <div className="icon_box_info">
                <h3 className="content_title">Donate Us</h3>
                <p>The only duty we need to perform is the duty of Humanity.</p>
              </div>
            </div>
          </div>
          <button className="primary_button_dark">Discover More</button>
        </div>
      </div>
    </section>
  );
}
