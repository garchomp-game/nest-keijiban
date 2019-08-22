import * as sha256 from 'sha256';

export const jwtConstants = {
    secret: sha256(Math.random().toString(36).slice(-10)),
};
