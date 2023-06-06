import { Card } from "antd";
import imageBg01 from "/static/media/road.jpg";
import imageBg02 from "/static/media/jieshun.jpg";
import imageBg03 from "/static/media/five-million.jpg";

export const ProfitAnticipation: React.FC = () => {

  return (
    <div className="profit-anticipation">
      <div className="profit-title">2022年营收预期</div>
      <div className="profit-gallery">
      <Card bordered={false} cover={<img src={imageBg01} alt=''></img>}>
        <div className="text-box">与中移动共同开拓智慧交通市场，为XX带来2000万左右营收</div>
      </Card>
      <Card bordered={false} cover={<img src={imageBg02} alt=''></img>}>
        <div className="text-box">与捷顺共同开拓智慧停车市场，为XX带来500万左右营收</div>
      </Card>
      <Card bordered={false} cover={<img src={imageBg03} alt=''></img>}>
        <div className="text-box">其他500万左右营收 <br/>产品毛利为50%左右，公司净利润为负。加强技术研发和产品落地
        </div>
      </Card>
      </div>
    </div>
  );
};
