import { LaunchDataModel } from './models/launch_data';
import { SongsByIdsModel } from './models/song_models';
export default function JioSaavn(): {
    getLaunchData: () => Promise<import("./models/api_response").ApiResponse<LaunchDataModel>>;
    getSongs: (ids: string[]) => Promise<import("./models/api_response").ApiResponse<SongsByIdsModel>>;
};
