import JioSaavn from '../src';

async function runex() {
    const saavn = JioSaavn();

    console.log((await saavn.getLaunchData()).data.top_playlists[1]);
    console.log((await saavn.searchAutocomplete('raabta')).data);
    console.log((await saavn.getAlbum('33416182')).data);
    console.log((await saavn.getPlaylist('5148894')).data);
    console.log((await saavn.getLyrics('33416182')).data);    
    console.log((await saavn.getSongs('iU7UPQsU')).data);
}

runex();