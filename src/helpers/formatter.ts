import { AlbumDetails } from '../models/album_details';
import { PlaylistDetails } from '../models/playlist_details';
import { SongDetails } from '../models/song_models';
import CryptoJS from 'crypto-js';

export function formatSongJson(data: SongDetails): SongDetails {
    data['title'] = _formatString(data['title']);
    data['subtitle'] = _formatString(data['subtitle']);
    data['more_info']['media_url'] =
        _decryptUrl(data['more_info']['encrypted_media_url']);

    return data;
}

export function formatAlbumJson(data: AlbumDetails): AlbumDetails {
    data['title'] = _formatString(data['title']);
    data['list'].forEach((song) => formatSongJson(song));

    return data;
}

export function formatPlaylistJson(data: PlaylistDetails): PlaylistDetails {
    data['more_info']['firstname'] =
        _formatString(data['more_info']['firstname']);
    data['more_info']['lastname'] = _formatString(data['more_info']['lastname']);
    data['list'].forEach((song) => formatSongJson(song));

    return data;
}

const _formatString = (str: string) => str
    .replace(/&quot;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&#039;/g, "'");

const _decryptUrl = (url: string) => {
    const keyHex = CryptoJS.enc.Utf8.parse('38346591');

    // direct decrypt ciphertext
    const decrypted = CryptoJS.DES.decrypt(url.trim(), keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
};