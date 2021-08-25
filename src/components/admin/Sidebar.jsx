import React from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";

import sidebarData from "../Data/admin/sidebar";
import { logout } from "../Auth/auth";

function Sidebar() {
  const [sidebardata, setsidebardata] = useAtom(sidebarData);

  const pagechanged = (i) => {
    setsidebardata(
      sidebardata.map((item, index) => {
        if (index === i) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
        return item;
      })
    );
  };

  return (
    <>
      {sidebardata.map((item, i) => (
        <Link
          to={item.link}
          key={i}
          className={item.isActive ? "active" : ""}
          onClick={(e) => pagechanged(i)}
        >
          <span className="iconshadow">
            <i className={item.icon}></i>
          </span>
          <span className="hide">{item.name}</span>
        </Link>
      ))}

      <div className="text-center mt-5">
        <button className="btn" onClick={logout}>
          <i className="fa fa-power-off text-danger fa-2x"></i>
        </button>
      </div>
    </>
  );
}

export default Sidebar;
