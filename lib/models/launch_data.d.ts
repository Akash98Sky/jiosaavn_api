export interface LaunchDataModel {
    new_trending: NewTrending[];
    top_playlists: TopPlaylist[];
    new_albums: NewAlbum[];
    browse_discover: BrowseDiscover[];
    global_config: GlobalConfig;
    charts: Chart[];
    radio: Radio[];
    modules: Modules;
    greeting: string;
}
export interface BrowseDiscover {
    id: string;
    title: string;
    subtitle: string;
    type: BrowseDiscoverType;
    image: string;
    perma_url: string;
    more_info: BrowseDiscoverMoreInfo;
    explicit_content: string;
    mini_obj: boolean;
}
export interface BrowseDiscoverMoreInfo {
    badge: string;
    sub_type: SubType;
    available: string;
    is_featured: string;
    tags: Tags;
    video_url: string;
    video_thumbnail: string;
}
export declare enum SubType {
    Brand = "brand",
    Genre = "genre",
    Mood = "mood",
    MusicPlus = "music_plus"
}
export interface Tags {
    seasonality?: string[];
    situation?: string[];
    mood?: string[];
    genre?: any[];
}
export declare enum BrowseDiscoverType {
    Channel = "channel"
}
export interface Chart {
    image: string;
    title: string;
    listname?: string;
    perma_url: string;
    id: string;
    type: ChartType;
    more_info: ChartMoreInfo;
    subtitle?: FirstnameEnum;
    explicit_content?: string;
    mini_obj?: boolean;
}
export interface ChartMoreInfo {
    song_count?: number;
    firstname?: FirstnameEnum;
}
export declare enum FirstnameEnum {
    JioSaavn = "JioSaavn"
}
export declare enum ChartType {
    Album = "album",
    Playlist = "playlist",
    Song = "song"
}
export interface GlobalConfig {
    weekly_top_songs_listid: WeeklyTopSongsListid;
    random_songs_listid: RandomSongsListid;
    phn_otp_providers: PhnOtpProviders;
}
export interface PhnOtpProviders {
    "+91": string;
}
export interface RandomSongsListid {
    hindi: RandomSongsListidHindi;
}
export interface RandomSongsListidHindi {
    listid: string;
    image: string;
}
export interface WeeklyTopSongsListid {
    hindi: WeeklyTopSongsListidHindi;
}
export interface WeeklyTopSongsListidHindi {
    listid: string;
    image: string;
    count: number;
    title: string;
}
export interface Modules {
    new_trending: Charts;
    charts: Charts;
    new_albums: Charts;
    top_playlists: Charts;
    radio: Charts;
}
export interface Charts {
    source: string;
    position: number;
    scroll_type: string;
    title: string;
    subtitle: string;
    highlight: null | string;
    simpleHeader: boolean;
    noHeader: boolean;
    hideMeta?: boolean;
    featured?: boolean;
    featured_text?: string;
    view_more: ViewMore;
}
export interface ViewMore {
    api: string;
    page_param: string;
    size_param: string;
    default_size: number;
    scroll_type: string;
}
export interface NewAlbum {
    id: string;
    title: string;
    subtitle: string;
    header_desc: string;
    type: ChartType;
    perma_url: string;
    image: string;
    language: Language;
    year: string;
    play_count: string;
    explicit_content: string;
    list_count: string;
    list_type: string;
    list: string;
    more_info: NewAlbumMoreInfo;
}
export declare enum Language {
    Empty = "",
    Hindi = "hindi"
}
export interface NewAlbumMoreInfo {
    song_count: string;
    release_date: Date;
    artistMap: ArtistMap;
}
export interface ArtistMap {
    primary_artists: Artist[];
    featured_artists: any[];
    artists: Artist[];
}
export interface Artist {
    id: string;
    name: string;
    role: Role;
    image: string;
    type: FeaturedStationTypeEnum;
    perma_url: string;
}
export declare enum Role {
    Empty = "",
    Music = "music",
    Singer = "singer",
    Starring = "starring"
}
export declare enum FeaturedStationTypeEnum {
    Artist = "artist",
    Featured = "featured"
}
export interface NewTrending {
    id: string;
    title: string;
    subtitle: string;
    header_desc: string;
    type: ChartType;
    perma_url: string;
    image: string;
    language: Language;
    year: string;
    play_count: string;
    explicit_content: string;
    list_count: string;
    list_type: string;
    list: string;
    more_info: NewTrendingMoreInfo;
    modules: null;
}
export interface NewTrendingMoreInfo {
    isWeekly?: string;
    firstname?: FirstnameEnum;
    song_count?: string;
    follower_count?: string;
    fan_count?: string;
    release_date?: Date;
    artistMap?: ArtistMap;
    music?: string;
    album_id?: string;
    album?: string;
    label?: string;
    origin?: Origin;
    is_dolby_content?: boolean;
    "320kbps"?: string;
    encrypted_media_url?: string;
    encrypted_cache_url?: string;
    album_url?: string;
    duration?: string;
    rights?: Rights;
    cache_state?: string;
    has_lyrics?: string;
    lyrics_snippet?: string;
    starred?: string;
    copyright_text?: string;
    label_url?: string;
    vcode?: string;
    vlink?: string;
    triller_available?: boolean;
    lyrics_id?: string;
}
export declare enum Origin {
    None = "none"
}
export interface Rights {
    code: string;
    cacheable: string;
    delete_cached_object: string;
    reason: Reason;
}
export declare enum Reason {
    Empty = "",
    ProOnly = "Pro Only"
}
export interface Radio {
    id: string;
    title: string;
    subtitle: RadioSubtitle;
    type: RadioType;
    image: string;
    perma_url: string;
    more_info: RadioMoreInfo;
    explicit_content: string;
    mini_obj: boolean;
}
export interface RadioMoreInfo {
    description: null | string;
    featured_station_type: FeaturedStationTypeEnum;
    query: string;
    color: null | string;
    language: Language;
    station_display_text: string;
}
export declare enum RadioSubtitle {
    ArtistRadio = "Artist Radio",
    HindiRadio = "Hindi Radio"
}
export declare enum RadioType {
    RadioStation = "radio_station"
}
export interface TopPlaylist {
    id: string;
    title: string;
    subtitle: string;
    type: ChartType;
    image: string;
    perma_url: string;
    more_info: TopPlaylistMoreInfo;
    explicit_content: string;
    mini_obj: boolean;
}
export interface TopPlaylistMoreInfo {
    song_count: string;
    firstname: FirstnameEnum;
    follower_count: string;
    last_updated: string;
    uid: Uid;
}
export declare enum Uid {
    PhulkiUser = "phulki_user"
}
