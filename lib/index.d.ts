import { AlbumDetails } from './models/album_details';
import { LaunchDataModel } from './models/launch_data';
import { Lyrics } from './models/lyrics';
import { PlaylistDetails } from './models/playlist_details';
import { SearchAutocomplete } from './models/search_autocomplete';
import { SongsByIdsModel } from './models/song_models';
export default function JioSaavn(): {
    getLaunchData: () => Promise<import("./models/api_response").ApiResponse<LaunchDataModel>>;
    searchAutocomplete: (query: string) => Promise<import("./models/api_response").ApiResponse<SearchAutocomplete>>;
    getSongs: (...ids: string[]) => Promise<import("./models/api_response").ApiResponse<SongsByIdsModel>>;
    getAlbum: (albumid: string) => Promise<AlbumDetails>;
    getPlaylist: (listid: string) => Promise<PlaylistDetails>;
    getLyrics: (lyrics_id: string) => Promise<import("./models/api_response").ApiResponse<Lyrics>>;
};
export { LaunchDataModel, SongsByIdsModel };
