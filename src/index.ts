import { formatAlbumJson, formatPlaylistJson, formatSongJson } from './helpers/formatter';
import { AlbumDetails } from './models/album_details';
import { LaunchDataModel } from './models/launch_data';
import { Lyrics } from './models/lyrics';
import { PlaylistDetails } from './models/playlist_details';
import { SearchAutocomplete } from './models/search_autocomplete';
import { SongsByIdsModel } from './models/song_models';
import { ApiClient } from './services/api_client';

export default function JioSaavn() {
    const apiClient = ApiClient();

    const getLaunchData = () => {
        return apiClient.getJson<LaunchDataModel>({ '__call': 'webapi.getLaunchData' }).then((data) => {
            delete (data as any).data['promo:vx:data:32'];
            delete (data as any).data['promo:vx:data:36'];
            delete (data as any).data['promo:vx:data:49'];
            delete (data as any).data['promo:vx:data:68'];
            delete (data as any).data['promo:vx:data:76'];
            delete (data as any).data['promo:vx:data:77'];
            delete (data as any).data['promo:vx:data:56'];

            return data;
        });
    };

    const searchAutocomplete = (query: string) => {
        return apiClient.getJson<SearchAutocomplete>({ '__call': 'autocomplete.get', 'query': query });
    };

    const getSongs = (...ids: string[]) => {
        return apiClient
            .getJson<SongsByIdsModel>({ '__call': 'song.getDetails', 'pids': ids.join(',') })
            .then(res => {
                res.data.songs.forEach(song => formatSongJson(song));

                return res;
            });
    };

    const getAlbum = (albumid: string) => {
        return apiClient
            .getJson<AlbumDetails>({ '__call': 'content.getAlbumDetails', 'albumid': albumid })
            .then(res => formatAlbumJson(res.data));
    };

    const getPlaylist = (listid: string) => {
        return apiClient
            .getJson<PlaylistDetails>({ '__call': 'playlist.getDetails', 'listid': listid })
            .then(res => formatPlaylistJson(res.data));
    };

    const getLyrics = (lyrics_id: string) => {
        return apiClient.getJson<Lyrics>({ '__call': 'lyrics.getLyrics', 'lyrics_id': lyrics_id });
    };

    return {
        getLaunchData,
        searchAutocomplete,
        getSongs,
        getAlbum,
        getPlaylist,
        getLyrics,
    };
}

export {
    LaunchDataModel,
    SongsByIdsModel
};