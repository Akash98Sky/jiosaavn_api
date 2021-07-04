"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    var getSongs = function (ids) {
        return apiClient.getJson({ '__call': 'song.getDetails', 'pids': ids.join(',') });
    };
    return {
        getLaunchData: getLaunchData,
        getSongs: getSongs,
    };
}
exports.default = JioSaavn;
