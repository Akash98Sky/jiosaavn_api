import { LaunchDataModel } from './models/launch_data';
import { SongsByIdsModel } from './models/song_models';
import { ApiClient } from './services/api_client';

export default function JioSaavn() {
    const apiClient = ApiClient();

    const getLaunchData = () => {
        return apiClient.getJson<LaunchDataModel>({ '__call': 'webapi.getLaunchData' }).then((data) => {
            delete (data as any).data['promo:vx:data:32'];
            delete (data as any).data['promo:vx:data:36'];
            delete (data as any).data['promo:vx:data:49'];
            delete (data as any).data['promo:vx:data:68'];
            delete (data as any).data['promo:vx:data:76'];
            delete (data as any).data['promo:vx:data:77'];
            delete (data as any).data['promo:vx:data:56'];

            return data;
        });
    };

    const getSongs = (ids: string[]) => {
        return apiClient.getJson<SongsByIdsModel>({ '__call': 'song.getDetails', 'pids': ids.join(',') });
    };

    return {
        getLaunchData,
        getSongs,
    };
}