import {
  useGetSeveralArtistsQuery,
  useGetSeveralPlaylistsQuery,
} from "../redux/SpotifyAPI";
import HomeHeader from "../components/Home/HomeHeader";
import HomeList from "../components/Home/HomeList";
import Row from "../components/Row/Row";
import { Link } from "react-router-dom";
import React from "react";
import SkeletonRow from "../Skeleton/SkeletonRow";
import { getsAuthors } from "../Functions/getAuthors";
import Skeleton from "../Skeleton/Skeleton";

const AllPageLoading: React.FC = () => {
  return (
    <>
      <div className="home__listsplit">
        <Skeleton width={328} height={50} borderRadius={6} />
        <Skeleton width={328} height={50} borderRadius={6} />
        <Skeleton width={328} height={50} borderRadius={6} />
        <Skeleton width={328} height={50} borderRadius={6} />
      </div>
      <SkeletonRow />
      <SkeletonRow />
      <SkeletonRow />
    </>
  );
};

const AllPage: React.FC = () => {
  const {
    data,
    isLoading: isLoadingPlaylists,
    isError: isErrorPlaylists,
  } = useGetSeveralPlaylistsQuery([
    "37i9dQZF1DX1qNZsqIInBz",
    "37i9dQZF1E4vKlbQdh9tmb",
    "37i9dQZF1E389IjqEKEuJN",
    "37i9dQZF1E37G5EjEhem0C",
    "37i9dQZF1E37G5EjEhem0C",
    "37i9dQZF1E37G5EjEhem0C",
  ]);

  const {
    data: artists,
    isLoading: isLoadingArtists,
    isError: isErrorArtists,
  } = useGetSeveralArtistsQuery([
    "1nnaE1FllcW0TlDdPVmdPg",
    "6Y5o021VaeAm5iRncZhLei",
    "5NMwoStnfHT4LdETlJSwDT",
  ]);

  if (isLoadingPlaylists || isLoadingArtists) return <AllPageLoading />;

  if (isErrorPlaylists || isErrorArtists || !data || !artists)
    throw new Error("An error occurred while loading the main page.");

  return (
    <div className="home" data-testid="allPage">
      <HomeHeader />
      <HomeList />
      <Row title="Только для тебя" show_text="Показать все">
        {data.map((item, id) => (
          <Link key={id} to={`/FakeSpotify/playlist/${item.id}`}>
            <div className="row__item">
              <img className="row__img" src={item.images[0].url} alt="" />
              <p className="row__name">{item.name}</p>
              <p className="row__authors">
                {getsAuthors(item.tracks.items[0].track.artists)}
              </p>
              <div className="hover_btn"></div>
            </div>
          </Link>
        ))}
      </Row>
      <Row title="Только для тебя" show_text="Показать все">
        {data.map((item, id) => (
          <Link key={id} to={`/FakeSpotify/playlist/${item.id}`}>
            <div className="row__item">
              <img className="row__img" src={item.images[0].url} alt="" />
              <p className="row__name">{item.name}</p>
              <p className="row__authors">
                {getsAuthors(item.tracks.items[0].track.artists)}
              </p>
              <div className="hover_btn"></div>
            </div>
          </Link>
        ))}
      </Row>
      <Row title="Любимые исполнители" show_text="Показать все">
        {artists.artists.map((item, id) => (
          <Link key={id} to={`/FakeSpotify/artist/${item.id}`}>
            <div className="row__item row__item-artists">
              <img className="row__img" src={item.images[2].url} alt="" />
              <p className="row__name">{item.name}</p>
              <p className="row__authors">Исполнитель</p>
              <div className="hover_btn"></div>
            </div>
          </Link>
        ))}
      </Row>
    </div>
  );
};

export default AllPage;
