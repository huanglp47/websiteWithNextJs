import React, { useEffect, useState } from "react";
import { Menu, Dropdown } from "antd";
import { withRouter } from "next/router";
import Link from 'next/link';

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
            <Link href="/">
                <a>首页</a>
            </Link>
        </Menu.Item>
        <Menu.Item key={"project"}>
            <Link href="/project">
                <a>核心技术</a>
            </Link>
        </Menu.Item>
        <Menu.Item key={"hardware"}>
            <Link href="/hardware">
                <a>产品中心</a>
            </Link>
        </Menu.Item>

        <Menu.Item key={"aboutus"}>
            <Link href="/aboutus">
                <a>关于我们</a>
            </Link>
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
                <Link href="/">
                    <a>首页</a>
                </Link>
            </Menu.Item>
            <Menu.Item key={"project"}>
                <Link href="/project">
                    <a>核心技术</a>
                </Link>
            </Menu.Item>
            <Menu.Item key={"hardware"}>
                <Link href="/hardware">
                    <a>产品中心</a>
                </Link>
            </Menu.Item>

            <Menu.Item key={"aboutus"}>
                <Link href="/aboutus">
                    <a>关于我们</a>
                </Link>
            </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default withRouter(_AppHeader);
