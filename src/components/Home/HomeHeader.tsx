import React from "react";
import { NavLink } from "react-router-dom";

const HomeHeader: React.FC = () => {
  return (
    <div className="home__header">
      <ul className="home__list">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "home__link"
              : isActive
              ? "home__link--active"
              : "home__link"
          }
        >
          Все
        </NavLink>
        <NavLink
          to="/music"
          className={({ isActive, isPending }) =>
            isPending
              ? "home__link"
              : isActive
              ? "home__link--active"
              : "home__link"
          }
        >
          Музыка
        </NavLink>
        <NavLink
          to="/podcasts"
          className={({ isActive, isPending }) =>
            isPending
              ? "home__link"
              : isActive
              ? "home__link--active"
              : "home__link"
          }
        >
          Подкасты
        </NavLink>
      </ul>
    </div>
  );
};

export default HomeHeader;
