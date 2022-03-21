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
    type: string;
    perma_url: string;
}
export interface Rights {
    code: string;
    cacheable: string;
    delete_cached_object: string;
    reason: string;
}
export declare enum Role {
    Empty = "",
    Lyricist = "lyricist",
    Music = "music",
    PrimaryArtists = "primary_artists",
    Singer = "singer",
    Starring = "starring"
}
