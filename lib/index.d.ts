import { AlbumDetails } from './models/album_details';
import { ApiResponse } from './models/api_response';
import { LaunchDataModel } from './models/launch_data';
import { Lyrics } from './models/lyrics';
import { PlaylistDetails } from './models/playlist_details';
import { SearchAutocomplete } from './models/search_autocomplete';
import { SongsByIdsModel } from './models/song_models';
export default function JioSaavn(): {
    getLaunchData: () => Promise<ApiResponse<LaunchDataModel>>;
    searchAutocomplete: (query: string) => Promise<ApiResponse<SearchAutocomplete>>;
    getSongs: (...ids: string[]) => Promise<ApiResponse<SongsByIdsModel>>;
    getAlbum: (albumid: string) => Promise<ApiResponse<AlbumDetails>>;
    getPlaylist: (listid: string) => Promise<ApiResponse<PlaylistDetails>>;
    getLyrics: (lyrics_id: string) => Promise<ApiResponse<Lyrics>>;
};
export { LaunchDataModel, SongsByIdsModel };
