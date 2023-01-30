import React, { useState, useContext } from "react";
import "./Menu.css";
import { NavLink, Link } from "react-router-dom";
import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineCloseSquare,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaPhone, FaHeart } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { AppContext } from "../../Helper/Context";
import { AboutMenu, JoinUs, VolunteerMenuData, WorkMenu } from "./dropdown";

export default function Menu() {
  // eslint-disable-next-line no-unused-vars
  const [mobile, setMobile] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [Whoweare, setWhoweare] = useState(false);
  const [join, setJoin] = useState(false);
  const [volunteer, setVolunteer] = useState(false);
  const [Work, setWork] = useState(false);

  const ChangeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", ChangeBackground);
  return (
    <section
      className={
        navbar === true ? "menu_container menu_active" : "menu_container"
      }
    >
      <div className="topbar">
        <div className="logo_mobile_nav">
          <Link to="/">
            <div className="logo f_c">
              <h3>HumanHood</h3>
              <strong>Organization</strong>
            </div>
          </Link>
        </div>
        <span className="hamburger_menu" onClick={() => setMobile(!mobile)}>
          {" "}
          {mobile === true ? (
            <AiOutlineCloseSquare color="white" size={30} />
          ) : (
            <AiOutlineMenu color="white" size={30} />
          )}
        </span>
      </div>
      <div className="menu">
        <div className="menu__info">
          <div className="menu__volunteer f_r">
            <div className="icon">
              <FiMail />
            </div>
            <span> contact@HumanHoodorg </span>
          </div>
          <div className="menu__call f_r">
            <div className="icon">
              <FaPhone />
            </div>
            <span> +91 8102773220 </span>
          </div>
        </div>
        <nav className="navbar">
          <li>
            {" "}
            <NavLink to="/"> Home</NavLink>{" "}
          </li>

          <li className="realative whoWeAre">
            {" "}
            <p
              className="dropdown_title"
            >
              {" "}
              Who We Are <MdOutlineArrowDropDown />{" "}
            </p>
            <div className= "dropdown">
                  <Link className="dropdown_links" to="/about" >
                    About Us <BsArrowRight />
                  </Link>
                  <Link className="dropdown_links" to="/vision" >
                  Vision <BsArrowRight />
                  </Link>
                  <Link className="dropdown_links" to="/teams" >
                  Our Team <BsArrowRight />
                  </Link>
                  <Link className="dropdown_links" to="/work" >
                  Our Work <BsArrowRight />
                  </Link>
                  <Link className="dropdown_links" to="/impact" >
                  Our Impact <BsArrowRight />
                  </Link>
                  <Link className="dropdown_links" to="/causes" >
                  Our Causes <BsArrowRight />
                  </Link>
                 
            </div>
          </li>
          <li className="realative whoWeAre">
            {" "}
            <p className="dropdown_title" >
              {" "}
              Our Work <MdOutlineArrowDropDown />{" "}
            </p>
            <div className= "dropdown">
              
                  <Link className="dropdown_links" to="/work/health">
                  Health <BsArrowRight />
                  </Link>
                  <Link className="dropdown_links" to="/work/relief">
                  Relief <BsArrowRight />
                  </Link>
                  <Link className="dropdown_links" to="/work/livelihood">
                  Livelihood <BsArrowRight />
                  </Link>
                  <Link className="dropdown_links" to="/work/education">
                  Education <BsArrowRight />
                  </Link>
                  <Link className="dropdown_links" to="/work/covid">
                  Covid <BsArrowRight />
                  </Link>
                
            </div>
          </li>
          <li className="realative whoWeAre">
            {" "}
            <p className="dropdown_title" >
              {" "}
              Join Us <MdOutlineArrowDropDown />{" "}
            </p>
            <div className="dropdown">
             
                  <Link className="dropdown_links" to="/joinus/individual" >
                  Individual <BsArrowRight />
                  </Link>
                  <Link className="dropdown_links" to="/joinus/cooperration" >
                  Cooperration <BsArrowRight />
                  </Link>
                  <Link className="dropdown_links" to="/joinus/campaign" >
                  Campaign <BsArrowRight />
                  </Link>
             
            </div>
          </li>
          <li className="realative whoWeAre">
            {" "}
            <p
              className="dropdown_title"
              
            >
      
              Volunteer <MdOutlineArrowDropDown />{" "}
            </p>
            <div className="dropdown">
                  <Link className="dropdown_links" to="/volunteer/ourvolunteers" >
                  Our Volunteers <BsArrowRight />
                  </Link>
                  <Link className="dropdown_links" to="/volunteer/becomeavolunteer" >
                  Become a Volunteer <BsArrowRight />
                  </Link>
                
            </div>
          </li>
          <li>
            {" "}
            <NavLink to="/contact"> Contact</NavLink>{" "}
          </li>
        </nav>
      </div>
      <Link to="/causes">
        <button className="topbar_button">
          <div className="icon-no">
            <FaHeart />{" "}
          </div>{" "}
          Donate Now
        </button>
      </Link>
      <div
        className={
          mobile === true
            ? "mobilesidebar mobile_sidebar_active"
            : "mobilesidebar"
        }
      >
        <div className="logo f_c">
          <h3>HumanHood</h3>
          <strong>Organization</strong>
        </div>
        <nav className="mobile_navbar">
          <li className="realative_mobile mp">
            {" "}
            <NavLink to="/" onClick={() => setMobile(!mobile)}> Home</NavLink>{" "}
          </li>

          <li className="realative_mobile">
            {" "}
            <p
              className="dropdown_title_mobile"
              onClick={() => setWhoweare(!Whoweare)}
            >
              {" "}
              Who We Are <MdOutlineArrowDropDown />{" "}
            </p>
            <div className={Whoweare ? "dropdown_mobile dropdown_show_mobile" : "dropdown_mobile"}>
              {AboutMenu.map((item) => {
                return (
                  <Link className="dropdown_links" to={item.path} onClick={() => setMobile(!mobile)} key={item.id}>
                    {item.name} <BsArrowRight />
                  </Link>
                );
              })}
            </div>
          </li>
          <li className="realative_mobile">
            {" "}
            <p className="dropdown_title_mobile" onClick={() => setWork(!Work)}>
              {" "}
              Our Work <MdOutlineArrowDropDown />{" "}
            </p>
            <div className={Work ? "dropdown_mobile dropdown_show_mobile" : "dropdown_mobile"}>
              {WorkMenu.map((item) => {
                return (
                  <Link className="dropdown_links" to={item.path} onClick={() => setMobile(!mobile)} key={item.id} >
                    {item.name} <BsArrowRight />
                  </Link>
                );
              })}
            </div>
          </li>
          <li className="realative_mobile">
            {" "}
            <p className="dropdown_title_mobile" onClick={() => setJoin(!join)}>
              {" "}
              Join Us <MdOutlineArrowDropDown />{" "}
            </p>
            <div className={join ? "dropdown_mobile dropdown_show_mobile" : "dropdown_mobile"}>
              {JoinUs.map((item) => {
                return (
                  <Link className="dropdown_links" to={item.path} onClick={() => setMobile(!mobile)} key={item.id}>
                    {item.name} <BsArrowRight />
                  </Link>
                );
              })}
            </div>
          </li>
          <li className="realative_mobile">
            {" "}
            <p
              className="dropdown_title_mobile"
              onClick={() => setVolunteer(!volunteer)}
            >
              {" "}
              Volunteer <MdOutlineArrowDropDown />{" "}
            </p>
            <div className={volunteer ? "dropdown_mobile dropdown_show_mobile" : "dropdown_mobile"}>
              {VolunteerMenuData.map((item) => {
                return (
                  <Link className="dropdown_links" to={item.path} onClick={() => setMobile(!mobile)} key={item.id}>
                    {item.name} <BsArrowRight />
                  </Link>
                );
              })}
            </div>
          </li>
          <li className="realative_mobile mp">
            {" "}
            <NavLink to="/" onClick={() => setMobile(!mobile)}> Contact</NavLink>{" "}
          </li>
          <li className="mobile_li li_extra">
            <div className="icon mobile_icon">
              <FaPhone />
            </div>
            <span className="normal_font"> +91 7277832188 </span>
          </li>
          <li className="mobile_li li_extra_no">
            <div className="icon mobile_icon">
              <FiMail />
            </div>
            <span className="normal_font"> Contact@HumanHoodorg.com </span>
          </li>
          <li className="links social">
            <span className="links_icons icons_green">
              <AiOutlineTwitter />
            </span>
            <span className="links_icons icons_green">
              <AiOutlineFacebook />
            </span>
            <span className="links_icons icons_green">
              <AiOutlineInstagram />
            </span>
            <span className="links_icons icons_green">
              <AiOutlineLinkedin />
            </span>
          </li>
        </nav>
      </div>
    </section>
  );
}
