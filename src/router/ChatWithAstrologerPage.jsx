import React, { useEffect } from 'react'
import AstrologersChatTalk from '../component/AstrologersChatTalk/AstrologersChatTalk'
import Footer from '../component/Footer/Footer'
import ShareIcons from '../component/ShareIcons/ShareIcons'
import { useLocation } from 'react-router-dom'

const ChatWithAstrologerPage = (props) => {

  const {pageTitle , description,canonicalUrl} = props
  
  const location = useLocation();
  
  useEffect(() => {
    // Update meta tags when the component mounts or when the route changes
    document.title = pageTitle;
    document.querySelector('meta[name="description"]').setAttribute('content', description);
    const canonicalElement = document.querySelector('link[rel="canonical"]');
    if (canonicalElement) {
      canonicalElement.setAttribute('href', canonicalUrl + location.pathname);
    }
  }, [pageTitle, description, location, canonicalUrl]);
  return (
    <div>
      <ShareIcons/>
      <AstrologersChatTalk props= {props}/>
      <Footer/>
    </div>
  )
}

export default ChatWithAstrologerPage
