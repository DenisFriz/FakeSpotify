import React from "react";
import { useParams } from "react-router-dom";
import { useGetPlaylistQuery } from "../../redux/SpotifyAPI";
import { getTimeFromMs } from "../../Functions/getTimeFromMs";
import Skeleton from "../../Skeleton/Skeleton";
import { useDispatch } from "react-redux";
import { changeCurrentTrack } from "../../redux/CurrentTrackSlice";
import type { ICurrentTrack } from "../../redux/CurrentTrackSlice";
import type { Item } from "../../GlobalTypes/PlaylistTypes";
import { getsAuthors } from "../../Functions/getAuthors";

const PlaylistLoading: React.FC = () => {
  return (
    <>
      <div className="skeleton__list">
        <Skeleton width={185} height={185} borderRadius={5} />
        <Skeleton width={500} height={165} />
      </div>
      <Skeleton width={"100%"} height={40} marginBottom={10} />
      <Skeleton width={"100%"} height={40} marginBottom={10} />
      <Skeleton width={"100%"} height={40} marginBottom={10} />
      <Skeleton width={"100%"} height={40} marginBottom={10} />
      <Skeleton width={"100%"} height={40} marginBottom={10} />
      <Skeleton width={"100%"} height={40} marginBottom={10} />
      <Skeleton width={"100%"} height={40} marginBottom={10} />
      <Skeleton width={"100%"} height={40} marginBottom={10} />
      <Skeleton width={"100%"} height={40} marginBottom={10} />
      <Skeleton width={"100%"} height={40} marginBottom={10} />
      <Skeleton width={"100%"} height={40} marginBottom={10} />
    </>
  );
};

const Playlist: React.FC = () => {
  const { playlistId } = useParams();
  const { data, isLoading, isError } = useGetPlaylistQuery(playlistId);
  const dispatch = useDispatch();

  if (isLoading) return <PlaylistLoading />;

  if (!data || isError)
    throw new Error("An error occurred while loading playlist page.");

  const handleMusicItemClick = (data: Item) => {
    const newData: ICurrentTrack = {
      title: data.track.album.name,
      track_name: data.track.album.name,
      names_authors: getsAuthors(data.track.artists),
      img: data.track.album.images[1].url,
      isShow: true,
    };
    dispatch(changeCurrentTrack(newData));
  };

  return (
    <div className="playlist">
      <div className="playlist__header">
        <div className="playlist__wrapper">
          <img className="playlist__img" src={data.images[0].url} alt="" />
          <div className="playlist__info">
            <div className="playlist__top">Открытый плейлист</div>
            <div className="playlist__name">{data.name}</div>
            <div className="playlist__desc">{data.description || ""}</div>
            <div className="playlist__footer">
              <span className="playlist__followers">
                {data.followers.total} лайков
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="playlist__table-head">
        <div>#</div>
        <div>Название</div>
        <div>Альбом</div>
        <div>Clock</div>
      </div>
      {data.tracks.items.map((item, id) => (
        <div
          key={id}
          className="music-item"
          onClick={() => handleMusicItemClick(item)}
        >
          <div className="music-item__index">{id + 1}</div>
          <div className="music-item__main">
            <img
              className="music-item__img"
              src={item.track?.album.images[1]?.url}
              alt=""
            />
            <div className="music-item__right">
              <div className="music-item__title">{item.track?.album.name}</div>
            </div>
          </div>
          <div className="music-item__name">{item.track?.album.name}</div>
          <div className="music-item__time">
            {getTimeFromMs(item.track?.duration_ms)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Playlist;
