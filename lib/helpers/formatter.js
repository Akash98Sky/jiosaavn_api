"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPlaylistJson = exports.formatAlbumJson = exports.formatSongJson = void 0;
var crypto_js_1 = __importDefault(require("crypto-js"));
function formatSongJson(data) {
    data['title'] = _formatString(data['title']);
    data['subtitle'] = _formatString(data['subtitle']);
    data['more_info']['media_url'] =
        _decryptUrl(data['more_info']['encrypted_media_url']);
    return data;
}
exports.formatSongJson = formatSongJson;
function formatAlbumJson(data) {
    data['title'] = _formatString(data['title']);
    data['list'].forEach(function (song) { return formatSongJson(song); });
    return data;
}
exports.formatAlbumJson = formatAlbumJson;
function formatPlaylistJson(data) {
    data['more_info']['firstname'] =
        _formatString(data['more_info']['firstname']);
    data['more_info']['lastname'] = _formatString(data['more_info']['lastname']);
    data['list'].forEach(function (song) { return formatSongJson(song); });
    return data;
}
exports.formatPlaylistJson = formatPlaylistJson;
var _formatString = function (str) { return str
    .replace(/&quot;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&#039;/g, "'"); };
var _decryptUrl = function (url) {
    var keyHex = crypto_js_1.default.enc.Utf8.parse('38346591');
    // direct decrypt ciphertext
    var decrypted = crypto_js_1.default.DES.decrypt(url.trim(), keyHex, {
        mode: crypto_js_1.default.mode.ECB,
        padding: crypto_js_1.default.pad.Pkcs7
    });
    return decrypted.toString(crypto_js_1.default.enc.Utf8);
};
