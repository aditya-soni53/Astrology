import React from "react";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";
import './ShareIcons.css'

const ShareIcons = () => {

    const currentUrl = window.location.href
    const title = 'This is Astrosumi website'
      
    return (
      <div className="share-buttons">
        <a href={`whatsapp://send?text=${encodeURIComponent(title)}%20${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer">
          <WhatsappShareButton url={currentUrl} title={title}>
            <FaWhatsapp size={30} color="green" />
          </WhatsappShareButton>
        </a>
  
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer">
          <FacebookShareButton url={currentUrl} quote={title}>
            <FaFacebook size={30} color="blue" />
          </FacebookShareButton>
        </a>
      </div>
    );
};
export default ShareIcons;
