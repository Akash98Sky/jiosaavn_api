import { ArtistMap } from './artist';
import { SongDetails } from './song_models';
export interface AlbumDetails {
    id: string;
    title: string;
    subtitle: string;
    header_desc: string;
    type: string;
    perma_url: string;
    image: string;
    language: Language;
    year: string;
    play_count: string;
    explicit_content: string;
    list_count: string;
    list_type: ListTypeEnum;
    list: SongDetails[];
    more_info: AlbumDetailsMoreInfo;
    modules: Modules;
}
export declare enum Language {
    Hindi = "hindi"
}
export declare enum ListTypeEnum {
    Song = "song"
}
export interface Modules {
    list: RecoClass;
    reco: RecoClass;
    topAlbumsFromSameYear: RecoClass;
}
export interface RecoClass {
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
    albumid?: string;
    album_year?: string;
}
export interface AlbumDetailsMoreInfo {
    artistMap: ArtistMap;
    song_count: string;
    copyright_text: string;
    is_dolby_content: boolean;
    label_url: string;
}
