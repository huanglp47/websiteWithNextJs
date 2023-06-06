import Link from "next/link"
import React from "react"
import icon1 from "/static/media/industry/factory.png";
import icon2 from "/static/media/industry/safety.png";
import icon3 from "/static/media/industry/inventory.png";
import icon4 from "/static/media/industry/law.png";
import icon5 from "/static/media/industry/city.png";
import icon6 from "/static/media/industry/economy.png";



export const MenuTabs : React.FC = () => {
    return (
        <div className="menutabs">
            <Link href="/industry">
                <img src={icon1} alt=""></img>
            </Link>
            <Link href="/industry">
                <img src={icon2} alt=""></img>
            </Link>
            <Link href="/industry">
                <img src={icon3} alt=""></img>
            </Link>
            <Link href="/industry">
                <img src={icon4} alt=""></img>
            </Link>
            <Link href="/industry">
                <img src={icon5} alt=""></img>
            </Link>
            <Link href="/industry">
                <img src={icon6} alt=""></img>
            </Link>
        </div>
    )
}

