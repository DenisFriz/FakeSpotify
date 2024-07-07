import React, { useState } from "react";
import {
  useGetArtistQuery,
  useGetArtistTopTracksQuery,
} from "../redux/SpotifyAPI";
import { useParams } from "react-router-dom";
import { getTimeFromMs } from "../Functions/getTimeFromMs";
import { useAppDispatch } from "../hooks/hooks";
import { changeCurrentTrack } from "../redux/CurrentTrackSlice";
import Skeleton from "../Skeleton/Skeleton";
import { getsAuthors } from "../Functions/getAuthors";

const ArtistsPageLoading: React.FC = () => {
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

interface UserPlaylistState {
  title: string;
  track_name: string;
  names_authors: string;
  img: string;
}

const ArtistsPage: React.FC = () => {
  const { artistId } = useParams();
  const {
    data: artist,
    isLoading: isLoadingArtist,
    isError: isErrorArtists,
  } = useGetArtistQuery(artistId);
  const { data } = useGetArtistTopTracksQuery(artistId);

  const [isShowAll, setIsShowAll] = useState(false);
  const dispatch = useAppDispatch();

  if (isLoadingArtist) return <ArtistsPageLoading />;
  if (!artist || !data) return null;

  if (!artist || isErrorArtists)
    throw new Error("An error occurred while loading artist page.");

  const handleChangeCurrentTrack = ({
    title,
    track_name,
    names_authors,
    img,
  }: UserPlaylistState) => {
    dispatch(
      changeCurrentTrack({
        title,
        track_name,
        names_authors,
        img,
        isShow: true,
      })
    );
  };

  return (
    <div className="artist">
      <div className="artist__header">
        <img className="artist__img" src={artist.images[0].url} alt="" />
        <div className="artist__info">
          <div className="artist__confirm">Подтвержденный исполнитель</div>
          <div className="artist__name">{artist.name}</div>
        </div>
      </div>
      {isShowAll
        ? data.tracks.map((track, id) => (
            <div
              key={id}
              className="music-item"
              onClick={() =>
                handleChangeCurrentTrack({
                  title: track.album.name,
                  track_name: track.album.name,
                  names_authors: getsAuthors(data.tracks[0].artists),
                  img: track.album.images[1].url,
                })
              }
            >
              <div className="music-item__index">{id + 1}</div>
              <div className="music-item__main">
                <img
                  className="music-item__img"
                  src={track.album.images[1].url}
                  alt=""
                />
                <div className="music-item__right">
                  <div className="music-item__title">{track.album.name}</div>
                </div>
              </div>
              <div className="music-item__name">{track.album.name}</div>
              <div className="music-item__time">
                {getTimeFromMs(track.duration_ms)}
              </div>
            </div>
          ))
        : Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className="music-item"
              onClick={() =>
                handleChangeCurrentTrack({
                  title: data.tracks[index].album.name,
                  track_name: data.tracks[index].album.name,
                  names_authors: getsAuthors(data.tracks[0].artists),
                  img: data.tracks[index].album.images[1].url,
                })
              }
            >
              <div className="music-item__index">{index + 1}</div>
              <div className="music-item__main">
                <img
                  className="music-item__img"
                  src={data.tracks[index].album.images[1].url}
                  alt=""
                />
                <div className="music-item__right">
                  <div className="music-item__title">
                    {data.tracks[index].album.name}
                  </div>
                </div>
              </div>
              <div className="music-item__name">
                {data.tracks[index].album.name}
              </div>
              <div className="music-item__time">
                {" "}
                {getTimeFromMs(data.tracks[index].duration_ms)}
              </div>
            </div>
          ))}
      <button
        className="artist__show-more-btn"
        onClick={() => setIsShowAll((prev) => !prev)}
      >
        {isShowAll ? "Свернуть" : "Еще"}
      </button>
    </div>
  );
};

export default ArtistsPage;
