import { Row, Col, Card } from "antd";
import IndustryLayout from "src/layouts/IndustryLayouts";
import Landing from "/static/media/aboutus/landing.jpg";
import React from "react";
import landingImg from "../../../static/media/aboutus/landing.png";

const { Meta } = Card;

const PramTitle=(props)=>{
  const { name, moreBtn} = props
  return (
      <div className="introduction-title-all">
        <div className="layout-box" style={{'alignItems': 'center'}}>
          <div className="introduction-title-icon"></div>
          <div className="introduction-title-area">{name}</div>
        </div>
        {moreBtn}
      </div>
  )
}

function ProjectPage() {
  const cardStyle = {
    width: "100%",
  };

  return (
    <div className="project-advantages">
      <PramTitle name="xx系统"></PramTitle>
      <div className="project-content">
        XX自主研发的卫星定位系统，突破了高精度时间同步、广域覆盖赋形天线、抗多径定位算法及室内外无缝切换等一系列关键技术，通过室内北斗系统提供室内高精度定位服务。
        <br />
        <br />
        室内北斗系统适配卫星导航定位终端及智能手机，在室内空间及城市峡谷等导航卫星信号覆盖薄弱区域，提供与室外导航卫星系统兼容的室内外一体高精度定位导航服务。
      </div>
      <PramTitle name="核心优势"></PramTitle>

      <div className="unique-block">
        <Card bordered={true} style={cardStyle} cover={<img  alt=""></img>}>
          <Meta title="内外一体" description="室内外无缝切换，真正提供室内外一体化定位导航服务。"/>
        </Card>
        <Card bordered={true} style={cardStyle} cover={<img  alt=""></img>}>
          <Meta title="时空一体" description="同时具备定位与授时能力，实现时空基准一体化。"/>
        </Card>
      </div>
    </div>
  );
}

ProjectPage.getLayout = function getLayout(page) {
  return (
    <IndustryLayout sidebar={false} cName="projectContainer" landingImg={<img className="projectBanner" src={Landing}  alt=""/>}>
      {page}
    </IndustryLayout>
  );
};

export default ProjectPage;
