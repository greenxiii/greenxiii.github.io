import { MOOVE } from "./actionTypes";

export const moove = movement => ({ type: MOOVE, payload: { movement } });