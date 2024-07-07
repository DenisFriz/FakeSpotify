import React from "react";
import HomeList from "../components/Home/HomeList";
import { useGetSeveralPlaylistsQuery } from "../redux/SpotifyAPI";
import { Link } from "react-router-dom";
import Row from "../components/Row/Row";
import HomeHeader from "../components/Home/HomeHeader";
import Skeleton from "../Skeleton/Skeleton";
import SkeletonRow from "../Skeleton/SkeletonRow";
import { getsAuthors } from "../Functions/getAuthors";

const MusicPageLoading: React.FC = () => {
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

const MusicPage: React.FC = () => {
  const { data, isLoading, isError } = useGetSeveralPlaylistsQuery([
    "37i9dQZF1EIUX9F88pCGK7",
    "37i9dQZF1EIV0OUs67j4We",
    "37i9dQZF1E8OBcwX9gYxOx",
    "3OD1DuTZ0s1Rzmo60A32SP",
    "37i9dQZF1E37G5EjEhem0C",
    "37i9dQZF1E37G5EjEhem0C",
  ]);

  if (isLoading) return <MusicPageLoading />;

  if (!data || isError)
    throw new Error("An error occurred while loading music page.");

  return (
    <div>
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
    </div>
  );
};

export default MusicPage;
