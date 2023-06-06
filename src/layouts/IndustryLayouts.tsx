import { ReactNode } from "react";
import { Landing } from "src/components/Industry/Landing";
import Sidebar from "src/components/Industry/Sidebar";

export interface IIndustryLayoutProps {
  children: ReactNode;
  sidebar: boolean;
  landingImg;
}

export default function IndustryLayout(IIndustryLayoutProps) {
  const { children, landingImg, landingElements, sidebar,cName} = IIndustryLayoutProps;
  return (
    <>
      {/*<Landing>{landingImg}{landingElements}</Landing>*/}
      <div className="industry-body">
        { sidebar ? <Sidebar /> : null}
        {/*<div className="industry-content">*/}
        <div className={`industry-content ${cName ? cName: ''} `}>
          {children}
        </div>
      </div>
    </>
  );
}
