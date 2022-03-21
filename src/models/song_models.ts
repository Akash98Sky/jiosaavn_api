import { ArtistMap, Rights } from './artist';

export interface SongsByIdsModel {
    songs: SongDetails[];
    modules: Modules;
}

export interface Modules {
    reco: Relevant;
    artists: Relevant;
    songsBysameArtists: Relevant;
    songsBysameActors: Relevant;
}

export interface Relevant {
    source: string;
    position: number;
    scroll_type: string;
    title: string;
    subtitle: string;
    highlight: string;
    simpleHeader: boolean;
    noHeader: boolean;
    view_more: any[];
    source_api?: boolean;
    source_params?: SourceParams;
}

export interface SourceParams {
    pid?: string;
    actor_ids?: string;
    song_id?: string;
    artist_ids?: string;
}

export interface SongDetails {
    id: string;
    title: string;
    subtitle: string;
    header_desc: string;
    type: string;
    perma_url: string;
    image: string;
    language: string;
    year: string;
    play_count: string;
    explicit_content: string;
    list_count: string;
    list_type: string;
    list: string;
    more_info: MoreInfo;
}

export interface MoreInfo {
    music: string;
    album_id: string;
    album: string;
    label: string;
    origin: string;
    is_dolby_content: boolean;
    "320kbps": string;
    media_url: string;
    encrypted_media_url: string;
    encrypted_cache_url: string;
    album_url: string;
    duration: string;
    rights: Rights;
    cache_state: string;
    has_lyrics: string;
    lyrics_snippet: string;
    starred: string;
    copyright_text: string;
    artistMap: ArtistMap;
    release_date: Date;
    label_url: string;
    vcode: string;
    vlink: string;
    triller_available: boolean;
    lyrics_id: string;
}
