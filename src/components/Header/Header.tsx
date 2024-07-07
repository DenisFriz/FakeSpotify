import { useNavigate } from "react-router-dom";
import homeIcon from "../../assets/images/white-home.svg";
import searchIcon from "../../assets/images/search-icon.png";
import React, { useEffect, useState } from "react";

const client_id = "55e9c94a6b3147c09dca2ce8422270a4";
const REDIRECT_URL = "https://denisfriz.github.io/FakeSpotify";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/FakeSpotify");
  };

  const handlePrevPage = () => {
    navigate(-1);
  };
  const handleNextPage = () => {
    navigate(1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    navigate(`/FakeSpotify/search/${query}`);
  };

  const [token, setToken] = useState("");
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("access_token");

    if (!token && hash) {
      const hashParams = hash.substring(1).split("&");
      const tokenParam = hashParams.find((elem) =>
        elem.startsWith("access_token")
      );

      if (tokenParam) {
        token = tokenParam.split("=")[1];
        if (token) {
          window.location.hash = "";
          window.localStorage.setItem("access_token", token);
          setTimeout(() => {}, 3480);
        }
      }
    }
    if (token) setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("access_token");
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__arrows">
          <div className="header__arrowPrev" onClick={handlePrevPage}>
            &#60;
          </div>
          <div className="header__arrowNext" onClick={handleNextPage}>
            &#62;
          </div>
        </div>
        <div
          className="header__home"
          onClick={handleClick}
          data-testid="main-page-link"
        >
          <img src={homeIcon} alt="Home" />
        </div>
        <form
          action=""
          className="header__form"
          onSubmit={handleSubmit}
          data-testid="search-form"
        >
          <img className="form__searchIcon" src={searchIcon} alt="Search" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What do you want to listen?"
          />
        </form>
        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${client_id}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}`}
            className="login__button"
          >
            login to spotify
          </a>
        ) : (
          <button onClick={logout} className="unlogin__button">
            logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
