import JioSaavn from '../lib/index';

async function runex() {
    const saavn = JioSaavn();

    console.log((await saavn.getLaunchData()).data.top_playlists[1]);
    // console.log((await saavn.getSongs(['iU7UPQsU'])).data.modules);
}

runex();