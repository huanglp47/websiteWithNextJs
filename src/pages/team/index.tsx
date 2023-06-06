import { Row, Col } from "antd";
import IndustryLayout from "src/layouts/IndustryLayouts";
import Landing from "/static/media/solutions/landing.png";

import Icon1 from "/static/media/team/icon1.png";
import Icon2 from "/static/media/team/icon2.png";
import Icon3 from "/static/media/team/icon3.png";

import Name1 from "/static/media/team/name1.png";
import Name1Extra from "/static/media/team/name1-detail.png";
import Name2 from "/static/media/team/name2.png";
import Name3 from "/static/media/team/name3.png";
import Name4 from "/static/media/team/name4.png";
import Name5 from "/static/media/team/name5.png";

import Patent from "/static/media/team/patents.png";



function TeamPage() {
  return (
    <div className="team">
      <div className="team-subtitle">核心团队</div>
      <Row className="team-intro">
        <Col className="team-intro-unit">
          <img src={Icon1} alt=""></img>
          <div className="team-intro-desc">
            团队来自全国仅有的两个北斗导航卫星总体研制单位之一，
            长期从事北斗导航卫星总体研制工作，已成功发射十几颗北斗导航卫星；
          </div>
        </Col>
        <Col className="team-intro-unit">
          <img src={Icon2} alt=""></img>
          <div className="team-intro-desc">
            北斗导航重大航天项目总设计师、副总设计师4人，国务院特殊津贴专家2人，
            博士8人，硕士6人；
          </div>
        </Col>
        <Col className="team-intro-unit">
          <img src={Icon3} alt=""></img>
          <div className="team-intro-desc">
            获得国家科技进步特等奖、中科院杰出科技成就奖、
            上海市科技进步一等奖、 上海市技术发明一等奖、……
          </div>
        </Col>
      </Row>

      <div className="leader-intro">
        <img className="name" src={Name1} alt=""></img>
        <div className="leader-intro-content">
          <div className="leader-title">项目总顾问</div>
          <div className="leader-detail">
            研究员，博士生导师，北斗三号卫星系统总设计师，载人航天工程应用系统副总设计师。
            曾获得中国科学院参加载人航天工程突出贡献者荣誉称号，“中国载人航天工程”国家科学技术进步奖特等奖、
            全国首届创新争先奖、部委级科技进步一等奖2项，部委级科技进步二等奖4项、中科院杰出科技成就奖、
            上海市科学技术奖一等奖2项、北京市科学技术奖二等奖1项、中国航天基金会奖“航天贡献奖”。
          </div>
          <img src={Name1Extra} style={{ width: "95%" }} />
        </div>
      </div>

      <div className="leader-intro">
        <img className="name" src={Name2} alt=""></img>
        <div className="leader-intro-content">
          <div className="leader-title">创始人、总经理</div>
          <div className="leader-detail">
            研究员，硕士生导师，兼职教授，中国科学院青年科学家，北斗三号卫星系统副总设计师，低轨高速通信星座系统副总设计师，
            小行星探测项目总设计师。获得中国科学院杰出科技成就奖、上海市科技进步奖一等奖、
            上海市技术发明奖一等奖，科技部创新人才推进计划重点领域创新团队核心成员。
            深度了解卫星导航技术及产业，对室内外高精度导航的发展方向有深刻理解和把握。
          </div>
        </div>
      </div>

      <div className="leader-intro">
        <img className="name" src={Name3} alt=""></img>
        <div className="leader-intro-content">
          <div className="leader-title">联合创始人、首席科学家</div>
          <div className="leader-detail">
          研究员，博士生导师，新一代北斗导航卫星技术领头人，国内知名航天专家，
          享受国务院特殊津贴，曾负责多个国家重大航天项目。获国 家科学技术进步奖二等奖2次，
          国防科工委科学技术一等奖1次，中科院杰出科技成就奖3次。
          </div>
        </div>
      </div>

      <div className="leader-intro">
        <img className="name" src={Name4} alt=""></img>
        <div className="leader-intro-content">
          <div className="leader-title">联合创始人、副总经理</div>
          <div className="leader-detail">
          青年科学家、北斗资深设计师，曾担任国家某重大专项总体主任设计师，
          中国科学院卫星工程委员会专家组成员，中国卫星导航年会特邀审稿专家，
          超过12年北斗导航卫星研制经验, 
          作为中科院北斗团队核心成员完成14颗北斗导航卫星研制。在卫星导航的高精度时间同步、
          抗多径算法及导航信号生成等专业方向有深入研究，掌握多项室内定位领域核心专利。
          </div>
        </div>
      </div>


      <div className="leader-intro">
        <img className="name" src={Name5} alt=""></img>
        <div className="leader-intro-content">
          <div className="leader-title">联合创始人、副总经理</div>
          <div className="leader-detail">
          曾任多个国际、国内知名投资机构的高管，并主持投融资工作。在基金投融资、
          项目投融资方面具备丰富的实操经验，拥有丰富的国内风险投资机构和产业投资机构渠道资源，
          对资本市场规则和实施路径熟悉，擅长商业模式设计和投融资组织落地。
          </div>
        </div>
      </div>

      <div className="team-subtitle">专利证书</div>
      <img src={Patent} className="patent" alt=""></img>

    </div>
  );
}

TeamPage.getLayout = function getLayout(page) {
  return (
    <IndustryLayout sidebar={false} landingImg={<img src={Landing} alt="" />}>
      {page}
    </IndustryLayout>
  );
};

export default TeamPage;
