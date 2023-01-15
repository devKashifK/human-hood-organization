import React, { useContext,  } from "react";
import "./Donate.css";
import { donateData } from "./DonateData";
import { AppContext } from "../../Helper/Context";

export default function Donate() {
  // eslint-disable-next-line no-unused-vars
  const {page , setPage} =  useContext(AppContext)

  return (
    <section className="donate">
      <div className="heading__sub-heading">
        <div className="sub_heading_middle">Help & donate us now</div>
        <div className="heading_center w">
          Find the popular cause and donate them
        </div>
      </div>
      {page === 0 ?
         <div className="donate_card_container">
         {donateData.slice(0,3).map((item) => { 
           return (
             <div className="donate_card" key={item.id}>
               <div className="category">{item.category}</div>
               <div className="donate_card_image">
                 <div className="donate_overlay"></div>
                 <img className="donate_image" src={item.image} alt="" />
               </div>
               <h3 className="donate_card_title">{item.title}</h3>
               <p className="donate_card_desc descrption_gray">
                 {item.describe}
               </p>
               <div className="progress_bar">
                 <progress id="file" value="32" max="100">
                   {" "}
                   32%{" "}
                 </progress>
                 <div className="progress_info">
                <span className="progress_info_raised">Raised <strong className="progress_info_target">: 40K</strong></span>
                <span className="progress_info_raised">Target <strong className="progress_info_target">: 90K</strong></span>
               </div>
               </div>
             </div>
           );
           
         })}
       </div>
       :
       <div className="donate_card_container">
       {donateData.map((item) => { 
         return (
           <div className="donate_card" key={item.id}>
             <div className="category">{item.category}</div>
             <div className="donate_card_image">
               <div className="donate_overlay"></div>
               <img className="donate_image" src={item.image} alt="" />
             </div>
             <h3 className="donate_card_title">{item.title}</h3>
             <p className="donate_card_desc descrption_gray">
               {item.describe}
             </p>
             <div className="progress_bar">
               <progress id="file" value="32" max="100">
                 {" "}
                 32%{" "}
               </progress>
               <div className="progress_info">
                <span className="progress_info_raised">Raised <strong className="progress_info_target">: 40K</strong></span>
                <span className="progress_info_raised">Target <strong className="progress_info_target">: 90K</strong></span>
               </div>
             </div>
           </div>
         );
         
       })}
     </div>
}
     
    </section>
  );
}
