import React, { useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import CurrentTrack from "../CurrentTrack/CurrentTrack";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import CustomErrorBoundary from "../ErrorComponent/CustomErrorBoundary";

export interface ISidebarSize {
  type: "small" | "medium" | "full";
}

const Layout: React.FC = () => {
  const selector = useAppSelector((selector) => selector.currentTrack.isShow);

  const ref = useRef<HTMLDivElement>(null);
  const [sidebarSize, setSidebarSize] = useState<ISidebarSize>({
    type: "medium",
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showBtnMore, setShowBtnMore] = useState(true);
  useEffect(() => {
    if (windowWidth < 1451 && ref.current) {
      setShowBtnMore(false);
      ref.current.classList.remove(
        "sidebar--medium",
        "sidebar--full",
        "sidebar--medium-laptop"
      );
      ref.current.classList.add(`sidebar--small`);
      if (sidebarSize.type == "small") {
        ref.current.classList.remove("sidebar--medium", "sidebar--small");
        ref.current.classList.add(`sidebar--medium-laptop`);
      }
    } else {
      if (ref.current) {
        setShowBtnMore(true);
        if (sidebarSize.type == "full") {
          ref.current.classList.remove(
            "sidebar--medium",
            "sidebar--small",
            "sidebar--medium-laptop"
          );
          ref.current.classList.add(`sidebar--${sidebarSize.type}`);
        } else if (sidebarSize.type == "small") {
          ref.current.classList.remove(
            "sidebar--medium",
            "sidebar--full",
            "sidebar--medium-laptop"
          );
          ref.current.classList.add(`sidebar--${sidebarSize.type}`);
        } else {
          ref.current.classList.remove(
            "sidebar--small",
            "sidebar--full",
            "sidebar--medium-laptop"
          );
          ref.current.classList.add(`sidebar--${sidebarSize.type}`);
        }
      }
    }
  }, [sidebarSize.type, windowWidth]);
  const handleSetSidebarSize = (type: ISidebarSize) => {
    setSidebarSize(type);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="main__wrapper" ref={ref}>
        <Header />
        <CustomErrorBoundary colorText="#fff">
          <Sidebar
            type={sidebarSize.type}
            clickSidebar={handleSetSidebarSize}
            showBtnMore={showBtnMore}
          />
        </CustomErrorBoundary>
        <CurrentTrack />
        <div
          className="center"
          style={{ gridColumn: `${selector ? "" : "2 / 4"}` }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
