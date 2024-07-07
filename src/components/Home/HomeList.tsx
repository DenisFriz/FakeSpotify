import React from "react";
import { useGetSeveralPlaylistsQuery } from "../../redux/SpotifyAPI";
import { Link } from "react-router-dom";
import Skeleton from "../../Skeleton/Skeleton";

const HomeList: React.FC = () => {
  const { data, isLoading, isError } = useGetSeveralPlaylistsQuery([
    "37i9dQZF1DX1qNZsqIInBz",
    "37i9dQZF1E4vKlbQdh9tmb",
    "37i9dQZF1E389IjqEKEuJN",
    "37i9dQZF1EIWqWGZ4WGfUb",
  ]);

  if (isLoading)
    return (
      <div className="home__listsplit">
        <Skeleton width={328} height={50} borderRadius={6} />
        <Skeleton width={328} height={50} borderRadius={6} />
        <Skeleton width={328} height={50} borderRadius={6} />
        <Skeleton width={328} height={50} borderRadius={6} />
      </div>
    );

  if (isError || !data)
    throw new Error("An error occurred while loading home list.");

  return (
    <div className="home__listsplit">
      {data.map((item, id) => (
        <Link key={id} to={`/playlist/${item.id}`}>
          <div className="home__listsplit-item">
            <img src={item.images[0].url} alt="" />
            <span>{item.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomeList;
