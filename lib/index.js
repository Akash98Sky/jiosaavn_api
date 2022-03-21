"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatter_1 = require("./helpers/formatter");
var api_client_1 = require("./services/api_client");
function JioSaavn() {
    var apiClient = api_client_1.ApiClient();
    var getLaunchData = function () {
        return apiClient.getJson({ '__call': 'webapi.getLaunchData' }).then(function (data) {
            delete data.data['promo:vx:data:32'];
            delete data.data['promo:vx:data:36'];
            delete data.data['promo:vx:data:49'];
            delete data.data['promo:vx:data:68'];
            delete data.data['promo:vx:data:76'];
            delete data.data['promo:vx:data:77'];
            delete data.data['promo:vx:data:56'];
            return data;
        });
    };
    var searchAutocomplete = function (query) {
        return apiClient.getJson({ '__call': 'autocomplete.get', 'query': query });
    };
    var getSongs = function () {
        var ids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ids[_i] = arguments[_i];
        }
        return apiClient
            .getJson({ '__call': 'song.getDetails', 'pids': ids.join(',') })
            .then(function (res) {
            res.data.songs.forEach(function (song) { return formatter_1.formatSongJson(song); });
            return res;
        });
    };
    var getAlbum = function (albumid) {
        return apiClient
            .getJson({ '__call': 'content.getAlbumDetails', 'albumid': albumid })
            .then(function (res) { return formatter_1.formatAlbumJson(res.data); });
    };
    var getPlaylist = function (listid) {
        return apiClient
            .getJson({ '__call': 'playlist.getDetails', 'listid': listid })
            .then(function (res) { return formatter_1.formatPlaylistJson(res.data); });
    };
    var getLyrics = function (lyrics_id) {
        return apiClient.getJson({ '__call': 'lyrics.getLyrics', 'lyrics_id': lyrics_id });
    };
    return {
        getLaunchData: getLaunchData,
        searchAutocomplete: searchAutocomplete,
        getSongs: getSongs,
        getAlbum: getAlbum,
        getPlaylist: getPlaylist,
        getLyrics: getLyrics,
    };
}
exports.default = JioSaavn;
