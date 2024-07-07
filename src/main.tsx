import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.scss";
import { store } from "./redux/store.ts";
import Layout from "./components/Layout/Layout.tsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./components/ErrorComponent/ErrorComponent.tsx";

const LazyAllPage = lazy(() => import("./Pages/AllPage.tsx"));
const LazyMusicPage = lazy(() => import("./Pages/MusicPage.tsx"));
const LazyPodcastsPage = lazy(() => import("./Pages/PodcastsPage.tsx"));
const LazyEpisode = lazy(() => import("./components/Episode/Episode.tsx"));
const LazyArtistsPage = lazy(() => import("./Pages/ArtistsPage.tsx"));
const LazyPlaylist = lazy(() => import("./components/Playlist/Playlist.tsx"));
const LazySearchPage = lazy(() => import("./Pages/SearchPage.tsx"));
const LazyNotFoundPage = lazy(() => import("./Pages/NotFoundPage.tsx"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <ErrorBoundary
              FallbackComponent={ErrorComponent}
              onReset={() => (location.href = "/")}
            >
              <Suspense fallback={<div></div>}>
                <LazyAllPage />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="music"
          element={
            <ErrorBoundary
              FallbackComponent={ErrorComponent}
              onReset={() => (location.href = "/")}
            >
              <Suspense fallback={<div></div>}>
                <LazyMusicPage />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="podcasts"
          element={
            <ErrorBoundary
              FallbackComponent={ErrorComponent}
              onReset={() => (location.href = "/")}
            >
              <Suspense fallback={<div></div>}>
                <LazyPodcastsPage />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="episode/:episodeId"
          element={
            <ErrorBoundary
              FallbackComponent={ErrorComponent}
              onReset={() => (location.href = "/")}
            >
              <Suspense fallback={<div></div>}>
                <LazyEpisode />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="artist/:artistId"
          element={
            <ErrorBoundary
              FallbackComponent={ErrorComponent}
              onReset={() => (location.href = "/")}
            >
              <Suspense fallback={<div></div>}>
                <LazyArtistsPage />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="playlist/:playlistId"
          element={
            <ErrorBoundary
              FallbackComponent={ErrorComponent}
              onReset={() => (location.href = "/")}
            >
              <Suspense fallback={<div></div>}>
                <LazyPlaylist />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="search/:query"
          element={
            <ErrorBoundary
              FallbackComponent={ErrorComponent}
              onReset={() => (location.href = "/")}
            >
              <Suspense fallback={<div></div>}>
                <LazySearchPage />
              </Suspense>
            </ErrorBoundary>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <Suspense fallback={<div></div>}>
            <LazyNotFoundPage />
          </Suspense>
        }
      />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
