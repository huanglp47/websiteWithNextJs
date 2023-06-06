import {Carousel, Col, Row} from "antd";
import React from "react";
import {IntroductionCard} from "src/components/Home/IntroductionCard";
import useInView from "react-cool-inview";
import landingImg from "../../static/media/aboutus/landing.png";

const _imageCardStyle = {
    width: "100%",
};

const _SystemComposition = () => {
    return (
        <div>
            <div className="s-pc">
                <p>师德师风的非官方个覆盖，三分大赛个梵蒂冈，非官方个，非官方个</p>
            </div>

            <div className="s-pc">
                <p>师德师风的非官方</p>
                <p>师德师风的非官方</p>
                <p>师德师风的非官方</p>
                <p>师德师风的非官方</p>
                <p>师德师风的非官方</p>
            </div>
        </div>
    );
};

const _Banner = ( {data} ) => {
    return (
        <Carousel autoplay>
            {
                data.map((item, index) => {
                    return (
                        item.state == '1' && <a key={item.id} href={ item.linkUrl ? item.linkUrl : '#!'}>
                            <div  className="home-landing-public">1111111111</div>
                        </a>
                    )
                })
            }
        </Carousel>
    )
};

// 数据请求
// export async function getServerSideProps() {
    // const info = await request('post','/website/xx/queryBanner', {
    //     "pageNum": 1,
    //     "pageSize": 10,
    // },null)
    // return {
    //     props: {
    //         info: (info as unknown as any)?.result?.records || [],
    //     },
    //     // revalidate: 10,
    //     // revalidate 以秒为单位的可选数量，之后可以重新生成页面，默认为false。
    //     // 当revalidate为false时，意味着没有重新验证，因此页面将被缓存为已构建，直到下一次构建
    // }
// }

export default function HomePage() {
    const {observe, inView} = useInView({
        onEnter: ({unobserve}) => unobserve(), // only run once
        threshold: 1,
    });
    // @ts-ignore
    return (
        <>
            <div className="industry-landing">
                <img src={landingImg} alt=""/>
            </div>
            <div className="home-content">
                <div id="system-composition">
                    <IntroductionCard title="系统组成" content={<_SystemComposition/>}/>
                </div>

                <div id="system-composition">
                    <IntroductionCard title="系统组成22" moreBtn="/hardware" content={<_SystemComposition/>}/>
                </div>
            </div>
        </>
    );
}
