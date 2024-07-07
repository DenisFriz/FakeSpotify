import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  ISeveralAlbums,
  IPlaylist,
  ICurrentUserPlaylists,
  ISeveralArtists,
  IArtist,
  IArtistTopTracks,
  IEpisode,
  ISeveralEpisodes,
} from "../GlobalTypes/PlaylistTypes";
import type { ISearchData } from "../GlobalTypes/SearchTypes";

interface ISearchDataProps {
  query: string;
  type: string[];
}

export const SpotifyAPI = createApi({
  reducerPath: "TokenAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1/",
    prepareHeaders: (headers) => {
      const access_token = localStorage.getItem("access_token");
      if (access_token) {
        headers.set("Authorization", `Bearer ${access_token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSeveralAlbums: builder.query<ISeveralAlbums, string>({
      query: (albums_ids) => `albums?ids=${albums_ids}`,
    }),
    getPlaylist: builder.query<IPlaylist, string | undefined>({
      query: (playlist_id) => `playlists/${playlist_id}`,
    }),
    getSeveralPlaylists: builder.query<IPlaylist[], string[]>({
      queryFn: async (playlists_ids) => {
        try {
          const access_token = localStorage.getItem("access_token");
          const playlists = await Promise.all(
            playlists_ids.map(async (id) => {
              try {
                const response = await fetch(
                  `https://api.spotify.com/v1/playlists/${id}`,
                  {
                    headers: {
                      Authorization: `Bearer ${access_token}`,
                    },
                  }
                );
                if (response.ok) {
                  const playlistData = await response.json();
                  return playlistData;
                } else {
                  throw new Error("Failed to fetch playlist");
                }
              } catch (error) {
                return null;
              }
            })
          );

          // Фильтруем и удаляем все null значения из массива плейлистов
          const filteredPlaylists = playlists.filter(
            (playlist): playlist is IPlaylist => playlist !== null
          ) as IPlaylist[];

          return { data: filteredPlaylists };
        } catch (error) {
          throw new Error("Failed to fetch playlists");
        }
      },
    }),
    getCurrentUserPlaylists: builder.query<ICurrentUserPlaylists, void>({
      query: () => "me/playlists?limit=10&offset=0",
    }),
    getSeveralArtists: builder.query<ISeveralArtists, string[]>({
      query: (episodes_ids) => `artists?ids=${episodes_ids.join(",")}`,
    }),
    getArtist: builder.query<IArtist, string | undefined>({
      query: (artist_id) => `artists/${artist_id}`,
    }),
    getArtistTopTracks: builder.query<IArtistTopTracks, string | undefined>({
      query: (artist_id) => `artists/${artist_id}/top-tracks`,
    }),
    getSearchData: builder.query<ISearchData, ISearchDataProps>({
      query: ({ query, type }) => `search?q=${query}&type=${type.join(",")}`,
    }),
    getEpisode: builder.query<IEpisode, string>({
      query: (id) => `episodes/${id}`,
    }),
    getSeveralEpisodes: builder.query<ISeveralEpisodes, string[]>({
      query: (query) => `episodes?ids=${query.join(",")}`,
    }),
  }),
});
export const {
  useGetSeveralAlbumsQuery,
  useGetPlaylistQuery,
  useGetSeveralPlaylistsQuery,
  useGetCurrentUserPlaylistsQuery,
  useGetSeveralArtistsQuery,
  useGetArtistQuery,
  useGetArtistTopTracksQuery,
  useGetSearchDataQuery,
  useGetEpisodeQuery,
  useGetSeveralEpisodesQuery,
} = SpotifyAPI;
