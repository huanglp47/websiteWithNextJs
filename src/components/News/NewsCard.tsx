import {useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface INewsCardProps {
    tab: string;
    path: string;
    day: string;
    month: string;
    title: string;
    content: string;
    newsImage;
}

export const NewsCard = ({ info }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
    };
    const swiperRef = useRef<HTMLInputElement>(null);
    const gotoNext = () => {
        // @ts-ignore
        swiperRef.current.slickNext()
    }
    const gotoPrev = () => {
        // @ts-ignore
        swiperRef.current.slickPrev()
    }
    const showCarouselItem = ()=>{
        const html = info.map((item, index) => {
            if(index<8){
                return (
                    <Link href={'/news/detail/'+item.id} key={item.id}>
                        <div className="news-card-item layout-box" key={item.id}>
                            <img src={item.coverUrl}/>
                            <div className="new-item-title line-clamp-2">{ item.mainTitle }</div>
                            <div className="news-abstract-p line-clamp-3">{ item.subtitle }</div>
                        </div>
                    </Link>
                )
            }
        })

        return (
            <Slider {...settings } ref={swiperRef}>
                {html}
                <div className="news-card-item">
                    <a className="news-card-all-btn" href="/newsList"></a>
                </div>
            </Slider>
        )
    }
    const showCarouselItemMobile = ()=>{
        const html = info.map((item, index) => {
            if(index<8){
                return (
                    <Link href={'/news/detail/'+item.id} key={item.id}>
                        <div className="news-card-item layout-box" key={item.id}>
                            <img src={item.coverUrl}/>
                            <div className="new-item-title line-clamp-2">{ item.mainTitle }</div>
                            <div className="news-abstract-p line-clamp-3">{ item.subtitle }</div>
                        </div>
                    </Link>
                )
            }
        })
        return (
            <div>
                { html }
            </div>
        )
    }
    return (
        <div className="new-card-wrapper">
            <div className="go-left-btn" onClick={() => gotoPrev()}></div>
            <div className="go-right-btn" onClick={() => gotoNext()} ></div>
            <div className="new-card-contanier layout-box new-card-pc">
                { showCarouselItem() }
            </div>

            {/*手机端*/}
            <div className="new-card-contanier layout-box new-card-mobile">
                { showCarouselItemMobile() }
            </div>
        </div>
    );
};
