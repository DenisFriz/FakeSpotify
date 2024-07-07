import React from "react";
import { useParams } from "react-router-dom";
import { useGetEpisodeQuery } from "../../redux/SpotifyAPI";
import Skeleton from "../../Skeleton/Skeleton";

const EpisodeLoading: React.FC = () => {
  return (
    <>
      <div className="skeleton__list">
        <Skeleton width={185} height={185} borderRadius={5} />
        <Skeleton width={500} height={165} />
      </div>
      <Skeleton width={180} height={40} marginBottom={10} />
      <Skeleton width={"100%"} height={100} marginBottom={10} />
    </>
  );
};

const Episode: React.FC = () => {
  const { episodeId } = useParams();
  if (!episodeId) return -1;

  const { data, isLoading, isError } = useGetEpisodeQuery(episodeId);

  if (isLoading) return <EpisodeLoading />;

  if (isError || !data)
    throw new Error("An error occurred while loading episode page.");

  return (
    <div>
      <div className="playlist__header">
        <div className="playlist__wrapper">
          <img className="playlist__img" src={data.images[0].url} alt="" />
          <div className="playlist__info">
            <div className="playlist__top">Открытый плейлист</div>
            <div className="playlist__name">{data.name}</div>
          </div>
        </div>
      </div>
      <div className="episode">
        <h3 className="episode__top">Описание выпуска</h3>
        <p className="episode__description">{data.description}</p>
      </div>
    </div>
  );
};

export default Episode;
