import { SongDetails } from './song_models';
export interface PlaylistDetails {
    id: string;
    title: string;
    subtitle: string;
    header_desc: string;
    type: PlaylistTypeEnum;
    perma_url: string;
    image: string;
    language: string;
    year: string;
    play_count: string;
    explicit_content: string;
    list_count: string;
    list_type: string;
    list: SongDetails[];
    more_info: PlaylistDetailsMoreInfo;
    modules: Modules;
}
export declare enum PlaylistTypeEnum {
    Playlist = "playlist"
}
export interface Modules {
    list: RelatedPlaylistClass;
    relatedPlaylist: RelatedPlaylistClass;
}
export interface RelatedPlaylistClass {
    source: string;
    position: number;
    scroll_type: string;
    title: string;
    subtitle: string;
    highlight: string;
    simpleHeader: boolean;
    noHeader: boolean;
    view_more: any[];
    is_JT_module: boolean;
    source_api?: boolean;
    source_params?: SourceParams;
}
export interface SourceParams {
    listid: string;
}
export interface PlaylistDetailsMoreInfo {
    uid: string;
    is_dolby_content: boolean;
    subtype: any[];
    last_updated: string;
    username: string;
    firstname: string;
    lastname: string;
    is_followed: string;
    isFY: boolean;
    follower_count: string;
    fan_count: string;
    playlist_type: PlaylistTypeEnum;
    share: string;
    sub_types: any[];
    images: any[];
    H2: null;
    subheading: null;
    video_count: string;
}
