import React from 'react';
import '../css/contactform.css'; 

const ContactUsForm = () => {
  return (
    <>
      <div className="container">
       <h1><center>Get in touch with us</center></h1>
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">Chennai, </div>
              <div className="text-two">Tamil Nadu - 600001</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+91 9004038609</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">accounts@civiccraft.in</div>
            </div>
          </div>
          <div className="map-container">
        <iframe
          title="map"
          width="900"
          height="450"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14011.282597517216!2d77.291945!3d28.601106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45d8b94c5db%3A0x8a6b8d6f7b7c1c5b!2sMayur%20Vihar%2C%20Delhi%2C%2011009!5e0!3m2!1sen!2sin!4v1684412345678!5m2!1sen!2sin"
        ></iframe>
      </div>
      </div>
        </div>
        <div className="container">
        <div className="content">
        <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>If you have any work from me or any types of queries related to my tutorial, you can send me a message from here. It's my pleasure to help you.</p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your Phone" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your Measage" />
              </div>
              <div className="button">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
      </div>
      </div>
      
    </>
  );
};

export default ContactUsForm;
