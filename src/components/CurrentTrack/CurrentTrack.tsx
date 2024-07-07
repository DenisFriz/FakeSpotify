import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import React from "react";
import { changeCurrentTrack } from "../../redux/CurrentTrackSlice";

const CurrentTrack: React.FC = () => {
  const selector = useAppSelector((state) => state.currentTrack);
  const dispatch = useAppDispatch();
  if (!selector.isShow) return null;

  const handleClickClose = () => {
    dispatch(
      changeCurrentTrack({
        title: "",
        track_name: "",
        names_authors: "",
        img: "",
        isShow: false,
      })
    );
  };

  return (
    <div className="current-track">
      <div className="current-track__header">
        <div className="current-track__top">
          <span>{selector.title}</span>
          <div onClick={handleClickClose}>X</div>
        </div>
        <img className="current-track__img" src={selector.img} alt="" />
        <div className="current-track__title">
          <div className="current-track__left">
            <div>{selector.track_name}</div>
            <div>{selector.names_authors}</div>
          </div>
          <div className="current-track__actions">+</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentTrack;
