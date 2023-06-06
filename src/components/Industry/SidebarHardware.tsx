import { Anchor  } from "antd";
const { Link } = Anchor;

const Sidebar = () => {
  // 设置某一个锚点
  // const getCurrentAnchor = () => '#jizhan';
  // getCurrentAnchor={getCurrentAnchor}

  const getContainer = ()=>{
    return document.querySelector("#content")
  }
  return (
    <div className="app-sidebar">
      <div className="sidebar-title" style={{"justifyContent": "center", "paddingLeft": 0}}>解决方案</div>
      <div className="sidebar-content">
        <div className="sidebar-block">
          {/*<Anchor className="anchor-wrapper" getContainer={getContainer}>*/}
          <Anchor className="anchor-wrapper">
            <Link href="#tianxian" title="天线" />
            <Link href="#znsb" title="智能手环" />
            <Link href="#znsb1" title="智能手环1" />
            <Link href="#znsb2" title="智能手环2" />
          </Anchor>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
