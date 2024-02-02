import React, { useEffect } from 'react'
import InsightStore from '../component/InsightStore/InsightStore'
import Navbar from '../component/NavBar/Navbar'
import Footer from '../component/Footer/Footer'
import ShareIcons from '../component/ShareIcons/ShareIcons'
import { useLocation } from 'react-router-dom'


const InsightStorePage = ({pageTitle,description,canonicalUrl}) => {
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
    <>
        <ShareIcons/>
        <Navbar/>
        <InsightStore title ='Astrosumi Store' desc='Shop Best Online Astrology Products And Services'/>
        <Footer/>
    </>
  )
}

export default InsightStorePage
