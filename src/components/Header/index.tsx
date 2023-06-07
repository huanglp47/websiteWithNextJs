import React, { useEffect, useState } from "react";
import { Menu, Dropdown } from "antd";
import { withRouter } from "next/router";

const _AppHeader = ({ router }) => {
  const getPathName = () => {
    if (router.pathname === "/") {
      return router.pathname
    }    
    return router.pathname.split("/", 2)[1];
  };

  const [selection, setSelection] = useState<string>(getPathName());

  const handleClick = (event) => {
    setSelection(event.key);
  };

  useEffect(() => {}, [selection]);

  const [visible, setVisible] = useState(false);

  const getMobileDropdown = () => {
    return (
      <Menu onClick={handleClick} selectedKeys={[selection]} theme={"dark"}>
        <Menu.Item key={"/"}>
          <a href="/">首页</a>
        </Menu.Item>
        <Menu.Item key={"project"}>
          <a href="/project">核心技术</a>
        </Menu.Item>
        <Menu.Item key={"hardware"}>
          <a href="/hardware">产品中心</a>
        </Menu.Item>

        <Menu.Item key={"aboutus"}>
          <a href="/aboutus">关于我们</a>
        </Menu.Item>
      </Menu>
    );
  };

  return (
    <div className="header-container">
      {/*<img src={imageLogo} className="header-logo" alt="XX" />*/}
      <div className="header-mobile">
        <Dropdown
          overlay={getMobileDropdown}
          trigger={["click"]}
          onOpenChange={setVisible}
          className="header-button"
        >
          <div className={visible ? "expand-menu" : "dropdown-icon"}>
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </Dropdown>
      </div>

      <div className="header">
        <Menu
          mode="horizontal"
          onClick={handleClick}
          selectedKeys={[selection]}
        >
          <Menu.Item key={"/"}>
            <a href="/">首页</a>
          </Menu.Item>
          <Menu.Item key={"project"}>
            <a href="/project">核心技术</a>
          </Menu.Item>
          <Menu.Item key={"hardware"}>
            <a href="/hardware">产品中心</a>
          </Menu.Item>

          <Menu.Item key={"aboutus"}>
            <a href="/aboutus">关于我们</a>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default withRouter(_AppHeader);
