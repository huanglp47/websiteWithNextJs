import imageArrow from "/static/media/arrow.jpeg";
import landingImage from "/static/media/landingv2.jpeg";
import landingImageMobile from  "/static/media/landingv2-mobile.jpeg";


export const Landing = () => {
  return (
    <div className="home-landing fade-in-bottom">
        <img src={landingImage} className="mobile-invisible" alt=""></img>
        <img src={landingImageMobile} className="mobile-visible" alt=""></img>
    </div>
  );
};

/** 
 * 
 *       <div className="primary-title">蓝牙AOA高精度室内定位</div>
      <div className="secondary-title">
        <div>接入各类蓝牙终端实现0.1-0.5米精度</div>
        <div className="arrow"></div>
      </div>
 * 
 * 
 */