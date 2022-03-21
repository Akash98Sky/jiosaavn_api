export interface SearchAutocomplete {
    albums: Albums;
    songs: Songs;
    playlists: Albums;
    artists: Artists;
    topquery: Albums;
    shows: Shows;
    episodes: Albums;
}
export interface Albums {
    data: AlbumsDatum[];
    position: number;
}
export interface AlbumsDatum {
    id: string;
    title: string;
    subtitle: string;
    type: string;
    image: string;
    perma_url: string;
    more_info: PurpleMoreInfo;
    explicit_content: string;
    mini_obj: boolean;
    description: string;
}
export interface PurpleMoreInfo {
    music: string;
    ctr: number;
    year: string;
    is_movie: string;
    language: string;
    song_pids: string;
}
export interface Artists {
    data: ArtistsDatum[];
    position: number;
}
export interface ArtistsDatum {
    id: string;
    title: string;
    image: string;
    extra: string;
    type: string;
    mini_obj: boolean;
    isRadioPresent: boolean;
    ctr: number;
    entity: number;
    description: string;
    position: number;
}
export interface Shows {
    data: ShowsDatum[];
    position: number;
}
export interface ShowsDatum {
    id: string;
    title: string;
    subtitle: string;
    type: string;
    image: string;
    perma_url: string;
    more_info: FluffyMoreInfo;
    explicit_content: string;
    mini_obj: boolean;
    description: string;
}
export interface FluffyMoreInfo {
    season_number: number;
}
export interface Songs {
    data: SongsDatum[];
    position: number;
}
export interface SongsDatum {
    id: string;
    title: string;
    subtitle: string;
    type: string;
    image: string;
    perma_url: string;
    more_info: TentacledMoreInfo;
    explicit_content: string;
    mini_obj: boolean;
    description: string;
}
export interface TentacledMoreInfo {
    album: string;
    ctr: number;
    score: string;
    vcode: string;
    vlink: string;
    primary_artists: string;
    singers: string;
    video_available: null;
    triller_available: boolean;
    language: string;
}
