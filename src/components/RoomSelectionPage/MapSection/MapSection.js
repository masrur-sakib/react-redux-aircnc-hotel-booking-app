import React from "react";
import "./MapSection.css";

const MapSection = (props) => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977785622!2d90.34928579127303!3d23.780777744540647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1615875343074!5m2!1sen!2sbd"
        style={{ border: 0, width: "100%", height: "90vh" }}
        loading="lazy"
        title="Sylhet"
      ></iframe>
    </div>
  );
};

export default MapSection;
