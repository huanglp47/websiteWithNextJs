import landingImg from "/static/media/aboutus/landing.png";

import useInView from "react-cool-inview";
import SidebarHardware from "../../components/Industry/SidebarHardware";
import React, { useState, useEffect } from 'react';

import { Anchor } from 'antd';
const { Link } = Anchor;

const HardwareCard = ({ title, cover, idName }) => {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
    threshold: 0.1,
  });

  return (
    <div ref={observe}>
      {inView ? (
        <div className="fade-in-bottom" id={idName}>
          <div className="hardware-subtitle">{title}</div>
            <div style={{fontSize:'16px'}}>
                是发送到发，是发送到发是发送到发，是发送到发，是发送到发是发送到发是发送到发是发送到发是发送到发是发送到发，是发送到发是发送到发。
            </div>
        </div>
      ) : null}
    </div>
  );
};

function HardwarePage() {
  return (
      <>
          <div className="industry-landing">
              <img src={landingImg} alt=""/>
          </div>
          <div className="industry-body" id="content">
              <SidebarHardware></SidebarHardware>
              <div className="industry-content" style={{'marginTop':'10px'}}>
                  <div className="hardware-body">
                      <HardwareCard idName="tianxian" title="天线" cover={undefined}/>
                      <HardwareCard idName="znsb" title="智能手环" cover={undefined}/>
                      <HardwareCard idName="znsb1" title="智能手环1" cover={undefined}/>
                      <HardwareCard idName="znsb2" title="智能手环2" cover={undefined}/>
                  </div>
              </div>
          </div>
      </>
  );
}
export default HardwarePage;