import React from "react";
import HomeHeader from "../components/Home/HomeHeader";
import { useGetSeveralEpisodesQuery } from "../redux/SpotifyAPI";
import { Link } from "react-router-dom";
import Row from "../components/Row/Row";
import SkeletonRow from "../Skeleton/SkeletonRow";

const PodcastsPageLoading: React.FC = () => {
  return (
    <>
      <SkeletonRow />
      <SkeletonRow />
      <SkeletonRow />
    </>
  );
};

const PodcastsPage: React.FC = () => {
  const { data, isLoading, isError } = useGetSeveralEpisodesQuery([
    "0vw8hbjvLAp3RzW6yFkkMZ",
    "0qz5eVJW0cw59CZAEpTFjs",
    "74OY4qubUIAK5ztKCJL4JK",
    "04vVbSYGntM429RyQmqzbY",
    "4hh0RRhOnxwlFZ6ZvRbYM4",
  ]);

  if (isLoading) return <PodcastsPageLoading />;

  if (!data || isError)
    throw new Error("An error occurred while loading podcast page.");

  const formDate = (str: string) => {
    const months = [
      "янв",
      "фев",
      "мар",
      "апр",
      "май",
      "июн",
      "июл",
      "авг",
      "сен",
      "окт",
      "ноя",
      "дек",
    ];
    const date = new Date(str);
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${month}. ${year} г.`;
  };

  return (
    <div>
      <HomeHeader />
      <Row title="Только для тебя" show_text="Показать все">
        {data.episodes.map((item, id) => (
          <Link key={id} to={`/episode/${item.id}`}>
            <div className="row__item">
              <img className="row__img" src={item.images[0].url} alt="" />
              <p className="row__name">{item.name}</p>
              <p className="row__authors">{formDate(item.release_date)}</p>
              <div className="hover_btn"></div>
            </div>
          </Link>
        ))}
      </Row>
    </div>
  );
};

export default PodcastsPage;
