import { Row, Col, Card } from "antd";
import { Image as Preview } from "antd";
import ImageEmitter from "/static/media/emitter.png";
import ImageAntenna from "/static/media/antenna.png";
import ImageEndpoint from "/static/media/general-endpoint.png";
import ImagePhone from "/static/media/smart-watch.png";
import ImageBadge from "/static/media/intelligent-badge.png";
import ImageSystem from "/static/media/position-system.png";

import dynamic from "next/dynamic";
const Zmage = dynamic(() => import("react-zmage"), {
  ssr: false,
});

export const PositionSolution = () => {
  return (
    <div className="position-solution">
      <div className="home-title">XX-定位系统</div>
      <div className="emitter">
        <Zmage src={ImageEmitter} />
        <div className="image-title">发射器</div>
      </div>

      <div className="antenna">
        <Zmage src={ImageAntenna}></Zmage>
        <div className="image-title">天线</div>
      </div>

      <div className="watch">
        <Zmage src={ImagePhone}></Zmage>
        <div className="image-title">智能手环</div>
      </div>

      <div className="endpoint">
        <Zmage src={ImageEndpoint}></Zmage>

        <div className="image-title">通用终端</div>
      </div>
      <div className="badge">
        <Zmage src={ImageBadge}></Zmage>
        <div className="image-title">智能工牌</div>
      </div>

      <div className="system">
        <Zmage src={ImageSystem} />
        <div className="image-title-x">定位系统</div>
      </div>
    </div>
  );
};
