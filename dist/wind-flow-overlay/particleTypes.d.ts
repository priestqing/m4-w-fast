import type { IWindVectorSample } from './types';
export interface IWindFlowBounds {
    minLng: number;
    maxLng: number;
    minLat: number;
    maxLat: number;
}
export interface IWindFlowParticle {
    lng: number;
    lat: number;
    age: number;
}
export interface IWindFlowStep {
    nextLng: number;
    nextLat: number;
    wind: IWindVectorSample;
}
export interface IWindFlowScreenPoint {
    x: number;
    y: number;
}
