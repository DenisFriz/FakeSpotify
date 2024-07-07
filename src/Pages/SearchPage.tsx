import { useGetSearchDataQuery } from "../redux/SpotifyAPI";
import Row from "../components/Row/Row";
import { Link, useParams } from "react-router-dom";
import React from "react";
import Skeleton from "../Skeleton/Skeleton";
import SkeletonRow from "../Skeleton/SkeletonRow";
import { useAppDispatch } from "../hooks/hooks";
import { changeCurrentTrack } from "../redux/CurrentTrackSlice";
import { getsAuthors } from "../Functions/getAuthors";
import { Item } from "../GlobalTypes/SearchTypes";

const SearchPageLoading: React.FC = () => {
  return (
    <>
      <div className="skeleton__list">
        <Skeleton width={253} height={265} />
        <div style={{ width: "100%", height: "100%" }}>
          <Skeleton width={"100%"} height={40} marginBottom={5} />
          <Skeleton width={"100%"} height={40} marginBottom={5} />
          <Skeleton width={"100%"} height={40} marginBottom={5} />
          <Skeleton width={"100%"} height={40} marginBottom={5} />
        </div>
      </div>
      <SkeletonRow />
      <SkeletonRow />
      <SkeletonRow />
    </>
  );
};

const SearchPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { query } = useParams();
  const { data, isLoading, isError } = useGetSearchDataQuery({
    query: query || "",
    type: ["artist", "playlist", "track"],
  });

  if (isLoading) return <SearchPageLoading />;
  if (!data || isError)
    throw new Error("An error occurred while loading search page.");

  const handleClickTrack = (track: Item) => {
    dispatch(
      changeCurrentTrack({
        title: track.name,
        track_name: track.name,
        names_authors: getsAuthors(track.artists),
        img: track.album.images[1].url,
        isShow: true,
      })
    );
  };
  return (
    <div className="search">
      <div className="search__top">
        <div className="search__left">
          <p data-testid="search-page">Лучший результат</p>
          <Link to={`/FakeSpotify/artist/${data.artists.items[0].id}`}>
            <div className="search__artist">
              <img
                className="search__img"
                src={data.artists.items[0].images[2].url}
                alt=""
              />
              <div className="search__name">{data.artists.items[0].name}</div>
              <span>Исполнитель</span>
              <div className="hover_btn"></div>
            </div>
          </Link>
        </div>
        <div className="search__right">
          <div>Треки</div>
          {data.tracks.items.slice(0, 4).map((item, id) => (
            <div
              onClick={() => handleClickTrack(item)}
              key={id}
              className="music-item music-item--without-index"
            >
              <div className="music-item__main">
                <img
                  className="music-item__img"
                  src={item.album.images[2].url}
                  alt=""
                />
                <div className="music-item__right">
                  <div className="music-item__title">{item.name}</div>
                </div>
              </div>
              <div className="music-item__name">{item.name}</div>
              <div className="music-item__time">3:13</div>
            </div>
          ))}
        </div>
      </div>
      <Row title="Исполнители" classNames="row__container-fullpage">
        {data.artists.items.map((item, id) => (
          <Link key={id} to={`/FakeSpotify/artist/${item.id}`}>
            <div className="row__item row__item-artists">
              <img
                className="row__img"
                src={item.images[0] ? item.images[0].url : ""}
                alt=""
              />
              <p className="row__name">{item.name}</p>
              <p className="row__authors">Исполнитель</p>
              <div className="hover_btn"></div>
            </div>
          </Link>
        ))}
      </Row>
      <Row title="Плейлисты" classNames="row__container-fullpage">
        {data.playlists.items.map((item, id) => (
          <Link key={id} to={`/FakeSpotify/playlist/${item.id}`}>
            <div className="row__item">
              <img className="row__img" src={item.images[0].url} alt="" />
              <p className="row__name">{item.name}</p>
              <p className="row__authors">{}</p>
              <div className="hover_btn"></div>
            </div>
          </Link>
        ))}
      </Row>
    </div>
  );
};

export default SearchPage;
