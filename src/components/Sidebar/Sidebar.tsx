import Popover from "../Popover/Popover";
import { useGetCurrentUserPlaylistsQuery } from "../../redux/SpotifyAPI";
import React from "react";
import Skeleton from "../../Skeleton/Skeleton";
import { ISidebarSize } from "../Layout/Layout";

const popoverData = ["Создать плейлист", "Создать папку с плейлистами"];

interface ISidebarProps {
  type: "small" | "medium" | "full";
  clickSidebar: (type: ISidebarSize) => void;
  showBtnMore: boolean;
}

const Sidebar: React.FC<ISidebarProps> = ({
  type,
  clickSidebar,
  showBtnMore,
}: ISidebarProps) => {
  const { data, isLoading, isError } = useGetCurrentUserPlaylistsQuery();

  if (isLoading)
    return (
      <>
        <div className="row__container row__container-sidebar">
          <div>
            <Skeleton
              width={94}
              height={110}
              borderRadius={8}
              marginBottom={8}
              bgColor="rgba(33 55 70 / 11%)"
            />
            <Skeleton
              width={94}
              height={36}
              borderRadius={8}
              bgColor="rgba(33 55 70 / 11%)"
            />
          </div>
          <div>
            <Skeleton
              width={94}
              height={110}
              borderRadius={8}
              marginBottom={8}
              bgColor="rgba(33 55 70 / 11%)"
            />
            <Skeleton
              width={94}
              height={36}
              borderRadius={8}
              bgColor="rgba(33 55 70 / 11%)"
            />
          </div>
        </div>
      </>
    );

  if (!data || isError) throw new Error("Unable to accept custom playlists.");

  const handleOpenFull = () => {
    if (type === "medium") clickSidebar({ type: "full" });
    else if (type === "full") clickSidebar({ type: "medium" });
    else clickSidebar({ type: "medium" });
  };

  const handleOpenSmall = () => {
    if (type === "medium") clickSidebar({ type: "small" });
    else if (type === "full") clickSidebar({ type: "small" });
    else clickSidebar({ type: "medium" });
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <span onClick={handleOpenSmall}>Моя медиатека</span>
        <div className="sidebar__buttons">
          <Popover>
            <Popover.Button className="popover__button">&#43;</Popover.Button>
            <Popover.List>
              {popoverData.map((item) => (
                <Popover.ListItem
                  key={item}
                  onClick={() => console.log("1111")}
                >
                  <div>{"+"}</div>
                  <div>{item}</div>
                </Popover.ListItem>
              ))}
            </Popover.List>
          </Popover>
          <span className="sidebar__open" onClick={handleOpenFull}>
            {showBtnMore ? <span>&#8677;</span> : ""}
          </span>
        </div>
      </div>
      <div className="row__container row__container-sidebar">
        {data.items.map((item, id) => (
          <div key={id} className="row__item row-size--small">
            <img className="row__img" src={item.images[0].url} alt="" />
            <p className="row__name">{item.name}</p>
            <p className="row__authors">{""}</p>
            <div className="hover_btn"></div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
