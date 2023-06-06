import { Row, Col, Menu, Card } from "antd";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import imageBg01 from "/static/media/pnt.png";
import imageBg02 from "/static/media/beidou.png";
import imageBg03 from "/static/media/80.png";
import imageBg04 from "/static/media/pnt02.png";
import imageBg05 from "/static/media/leader.png";
import imageBg06 from "/static/media/company-wish.png";

export const CompanyDetail: React.FC = () => {
  const [current, setCurrent] = useState<string>("0");
  const slider = useRef(Slider);

  const handleMenuClick = (e) => {
    console.log(e);
    setCurrent(e.key);
    slider.current.slickGoTo(Number(e.key));
  };

  const afterChangeSlide = (e) => {
    setCurrent(e.toString());
  };

  const handleItemClick = (e) => {
    console.log("item", e);
  }

  return (
    <div className="company-detail">
      <Menu
        mode="horizontal"
        onClick={handleMenuClick}
        selectedKeys={[current]}
      >
        <Menu.Item key={"0"} onClick={handleItemClick}>
          <div className="menu-item-title">成立背景</div>
        </Menu.Item>
        <Menu.Item key={"1"}>
          <div className="menu-item-title">公司背景</div>
        </Menu.Item>
        <Menu.Item key={"2"}>
          <div className="menu-item-title">公司简介</div>
        </Menu.Item>
      </Menu>

      <div className="detail-bar">
        <Slider
          ref={slider}
          {...{
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            afterChange: afterChangeSlide,
          }}
        >
          <div className="two-image-cover">
            <img src={imageBg01} alt=""></img>
            <img src={imageBg02} alt=""></img>
          </div>
          <div className="two-image-cover">
          <img src={imageBg03} alt=""></img>
            <img src={imageBg04} alt=""></img>
          </div>

          <div className="two-image-cover">
          <img src={imageBg05} alt=""></img>
            <img src={imageBg06} alt=""></img>
          </div>
        </Slider>
      </div>
    </div>
  );
};
