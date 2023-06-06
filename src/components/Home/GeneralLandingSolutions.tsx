import { Row, Col, Card, Image } from "antd";
import ImageHelmet from "/static/media/helmet.png";
import ImageHelmetCornerMark from "/static/media/helmet-cornermark.png";
import ImagePrisonCornerMark from "/static/media/prison-cornermark.png";
import ImageCarCornerMark from "/static/media/car-cornermark.png";
import ImageInventoryCornerMark from "/static/media/inventory-cornermark.png";
import ImageFactoryCornerMark from "/static/media/factory-cornermark.png";
import ImagePrison from "/static/media/prison.png";
import ImageCar from "/static/media/car-manufacturing.png";
import ImageFactory from "/static/media/factory-inspect.png";
import ImageInventory from "/static/media/inventory.png";

export const GeneralLandingSolutions = () => {
  return (
    <div className="solution-landing">
      <div className="solution-landing-title">行业方案总览</div>
      <div className="detailed-solutions">
        <div className="single-image">
          <img className="cover" src={ImageHelmet} alt=""/>
          <img className="corner-mark" src={ImageHelmetCornerMark}  alt=""/>
        </div>
        <div className="two-images">
          <div className="single-image">
            <img className="cover" src={ImagePrison}  alt=""/>
            <img className="corner-mark" src={ImagePrisonCornerMark}  alt=""/>
          </div>
          <div className="single-image">
            <img className="cover" src={ImageCar}  alt=""/>
            <img className="corner-mark" src={ImageCarCornerMark}  alt=""/>
          </div>
        </div>
        <div className="two-images">
          <div className="single-image">
            <img className="cover" src={ImageInventory} alt=""></img>
            <img className="corner-mark" src={ImageInventoryCornerMark} alt=""></img>
          </div>
          <div className="single-image">
            <img className="cover" src={ImageFactory} alt=""></img>
            <img className="corner-mark" src={ImageFactoryCornerMark} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};
