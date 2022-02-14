import React from "react";
import './index.css'

export default function Header() {
    const userName = 'kangzai'
    const backHome = () => {
        console.log('111')
    }
    return(
        <div className='header' >
            <div className="userInfo" onClick={backHome}>
                {userName} 🍭
            </div>

            <div className="menu">
                <span>随便写写</span>
                <span>随便写写</span>
                <span>随便写写</span>
            </div>
        </div>
    )
}