import {useState} from 'react'
import {Modal} from 'antd';
import axios from 'axios'

import policeIcon from "static/media/police-icon.png";

export const AppFooter: React.FC = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [company, setCompany] = useState('');
    const [business, setBusiness] = useState('');
    const [requirement, setRequirement] = useState('');

    let comfirmFn = async function () {
        // 客户信息提交
        const regex = /^1[3456789]\d{9}$/;
        if (!regex.test(mobile)) {
            Modal.warning({
                title: '提示',
                content: '请输入正确格式的手机号码'
            })
        } else if (requirement == '') {
            Modal.warning({
                title: '提示',
                content: '请输入行业需求'
            })
        } else {
            let params = {
                name,
                mobile,
                company,
                business,
                requirement,
            }
            await axios({
                method: 'post',
                url: '/website/xx/addCustomerMsg',
                data: params,
                headers: {
                    'Content-Type': 'application/json',
                    'Input-Type': 7,
                },
            }).then((res) => {
                if(res.data.resultCode == 200){
                    Modal.success({
                        title: '提示',
                        content: '提交成功！'
                    })
                }else{
                    Modal.success({
                        title: '提示',
                        content: res.data.resultMsg,
                    })
                }
            })
        }
    }
    return (
        <div className="footer">
            <div className="footer-container layout-box">
                <div className="footer-top-container layout-box">
                    <div className="footer-column-area layout-box">
                        <ul className="footer-column">
                            <li className="footer-column-title">首页</li>
                            <li className="footer-column-item">
                                <a href="#system-composition">系统组成</a>
                            </li>
                            <li className="footer-column-item">
                                <a href="#system-mechanism">系统原理</a>
                            </li>
                            <li className="footer-column-item">
                                <a href="#industry-solution">行业解决方案</a>
                            </li>
                            <li className="footer-column-item">
                                <a href="#company-introduction">公司简介</a>
                            </li>
                            <li className="footer-column-item">
                                <a href="#cooperation">合作伙伴</a>
                            </li>
                        </ul>
                        <ul className="footer-column">
                            <li className="footer-column-title">核心技术</li>
                            <li className="footer-column-item">
                                <a href="/project">核心团队</a>
                            </li>
                            <li className="footer-column-item">
                                <a href="/project">专利证书</a>
                            </li>
                        </ul>
                        <ul className="footer-column">
                            <li className="footer-column-title">产品中心</li>
                            <li className="footer-column-item">
                                <a href="/hardware">通用终端</a>
                            </li>
                            <li className="footer-column-item">
                                <a href="/hardware">智能手环</a>
                            </li>
                            <li className="footer-column-item">
                                <a href="/hardware">... ...</a>
                            </li>
                        </ul>
                        <ul className="footer-column">
                            <li className="footer-column-title">解决方案</li>
                            <li className="footer-column-item">
                                <a>基本服务</a>
                            </li>
                            <li className="footer-column-item">
                                <a>行业方案</a>
                            </li>
                        </ul>
                        <ul className="footer-column">
                            <li className="footer-column-title">关于我们</li>
                            <li className="footer-column-item">
                                <a href="/aboutus">公司简介</a>
                            </li>
                            <li className="footer-column-item">
                                <a href="/aboutus">新闻资讯</a>
                            </li>
                            <li className="footer-column-item">
                                <a href="/aboutus">联系我们</a>
                            </li>
                        </ul>
                    </div>
                    <div className="customer-form-wrapper">
                        <div className="customer-item-wrapper layout-box">
                            <div className="customer-item-left">
                                <div className="customer-form-item layout-box">
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text"
                                           placeholder="请输入姓名" autoComplete="off" className="ant-input item1"/>
                                    <input value={mobile} onChange={(e) => setMobile(e.target.value)} type="text"
                                           placeholder="请输入电话" autoComplete="off" className="ant-input item-l"/>
                                </div>
                                <div className="customer-form-item layout-box">
                                    <input value={company} onChange={(e) => setCompany(e.target.value)} type="text"
                                           placeholder="请输入公司名称" autoComplete="off" className="ant-input item1"/>
                                    <input value={business} onChange={(e) => setBusiness(e.target.value)} type="text"
                                           placeholder="请输入公司所属行业" autoComplete="off" className="ant-input item-l"/>
                                </div>
                            </div>
                            <div className="logo">
                                <div className="logo-name">企业公众号</div>
                                <img src='' alt="XX" style={{width: '100px'}}/>
                            </div>
                        </div>

                        <div className="customer-form-item">
                            <textarea value={requirement} onChange={(e) => setRequirement(e.target.value)}
                                      className="ant-input  textarea-input" placeholder="请输入产业需求" autoComplete="off"/>
                        </div>

                        <div className="customer-form-btn" onClick={comfirmFn}>提交</div>
                    </div>
                </div>

                <div className="footer-bottom-bar">
                    上海XX数据科技有限公司 Copyright&copy; 2002-2022 Oray. All Rights
                    Reserved. 用户协议 | 服务条款| 隐私政策 <br/>
                    <img className="footer-police-icon" src={policeIcon} alt=""/>
                    沪公网安备 0000000000号 |{" "}
                    <a href="https://beian.miit.gov.cn/#/Integrated/index">
                        沪ICP备xx号
                    </a>
                    <br/>
                    域名注册服务批文号：xx
                    VPN虚拟专用网证书号：xxxxx
                </div>
            </div>
        </div>
    );
};
