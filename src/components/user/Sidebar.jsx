import React from 'react'
import { Link } from 'react-router-dom';
import { useAtom } from 'jotai';


import sidebarData from "../Data/user/sidebardata";


function Sidebar() {

    const [sidebardata, setsidebardata] = useAtom(sidebarData)

    const pagechanged = (i) => {
        setsidebardata(
            sidebardata.map((item, index) => {
                if (index === i) {
                    item.isActive = true
                } else {
                    item.isActive = false
                }
                return item
            })
        )
    }

    return (
        <>
            {
                sidebardata.map((item, i) => (
                    <Link to={item.link} key={i} className={item.isActive ? 'active' : ''} onClick={e => pagechanged(i)}><span className="iconshadow"><i className={item.icon}></i></span><span className="hide">{item.name}</span></Link>
                ))
            }
        </>
    )
}

export default Sidebar
