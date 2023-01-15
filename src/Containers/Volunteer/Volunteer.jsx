import React from "react";
import "./volunteer.css";

export default function Volunteer() {
  return (
    <section className="volunteer">
      <div className="volunteer_overlay"></div>
      <div className="volunteer_shapes"></div>
      <div className="heading__sub-heading gap">
        <div className="sub_heading_center_color">Become a Volunteers</div>
        <div className="heading_center_color">
          Join your hand with us for a better life and future
        </div>
        <button className="btn-primary">Join Now</button>
      </div>
    </section>
  );
}
