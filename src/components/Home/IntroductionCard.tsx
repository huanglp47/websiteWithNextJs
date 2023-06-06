import React, { ReactNode } from "react";

export interface IIntroductionCardProps {
    title: string,
    content: ReactNode,
    moreBtn?: any,
    hideMobile?: boolean,
}

export const IntroductionCard = (props: IIntroductionCardProps) => {
  const {title, content, moreBtn, hideMobile} = props;
  return (
    <div className="home-introduction-card flip-in-hor-top">
        <div className="introduction-title">
            <div className="layout-box" style={{'alignItems': 'center'}}>
                <div className="introduction-title-icon"/>
                <div className="introduction-title-area">{title}</div>
            </div>
            {moreBtn ? <a className={["system-composition-more", hideMobile ? "hideMobile" : null].join(' ')}
                          href={moreBtn}>查看全部 &gt;</a> : ''}
        </div>
        <div className="introduction-content">{content}</div>
    </div>
  );
};
