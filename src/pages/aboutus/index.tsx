import {IntroductionCard} from "src/components/Home/IntroductionCard";
import iconLocation from "/static/media/aboutus/location.png";
import iconTelephone from "/static/media/aboutus/telephone.png";
import {request} from '../../service/http'

// export async function getStaticProps() {
//     const info = await request('post', '/website/news/queryNewsFront', {}, null)
//     return {
//         props: {
//             info: (info as unknown as any)?.result?.records || [],
//         },
//         revalidate: 1,
//         // revalidate 以秒为单位的可选数量，之后可以重新生成页面，默认为false。
//         // 当revalidate为false时，意味着没有重新验证，因此页面将被缓存为已构建，直到下一次构建
//     }
// }

const _CompanyIntroduction = () => {
    return (
        <div className="aboutus-doc">
            <p>
                公司简介：这是公司简介，这是公司简介这是公司简介这是公司简介，这是公司简介这是公司简介这是公司简介，这是公司简介。
            </p>

        </div>
    );
};

const _ContactUs = () => {
    const _titleStyle = {
        fontWeight: "bold",
        fontSize: "2.4rem",
        letterSpacing: "0.2rem",
    };
    return (
        <div className="contact-card layout-box">
            <div className="contact-card-left">
                <div style={_titleStyle}>了解更多资讯，发送邮件至</div>
                <a href="javascript:;" className="mail-style">
                    xx@qq.com
                </a>
            </div>
            <div className="contact-address">
                <div className="contact-address-phone">
                    <img src={iconTelephone} alt=""/>
                    <div>固定电话：xxxxx</div>
                </div>
                <div className="contact-address-location">
                    <div className="contact-address-detail">
                        <img src={iconLocation} alt=""/>
                        <div>上海： xxxxx</div>
                    </div>
                    <div className="contact-address-sz">深圳： xxxxxxx</div>
                </div>
            </div>
        </div>
    );
};

function AboutPage({info}) {
    return (
        <div>
            <div className="aboutus-landing"/>
            <IntroductionCard title="公司简介" content={<_CompanyIntroduction/>}/>
            <IntroductionCard title="联系我们" content={<_ContactUs/>}/>
        </div>
    );
}

export default AboutPage;
