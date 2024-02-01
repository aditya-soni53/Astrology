import React from "react";
import { FacebookShareButton } from "react-share";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";
import './ShareIcons.css'

const ShareIcons = () => {

  const currentUrl = window.location.href
  const title = 'This is Astrosumi website'

  const whatsappNumber = '917229999992';
  const message = `Hello need free consultation`;

  return (
    <div className="share-buttons">
      <a href={`https://wa.me/${whatsappNumber}?text=${message}`} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={30} color="green" />
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
