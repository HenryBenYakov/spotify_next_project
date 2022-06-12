import { atom } from 'recoil';

export const playlistState = atom({
    key: "playlistAtomState",
    default: null,
});

export const playlistIdState = atom({
    key: "playlistIdState",
    default: "4xC08QuEVV4ubigOB4nNbz"
});