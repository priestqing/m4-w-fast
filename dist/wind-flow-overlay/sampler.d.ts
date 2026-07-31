import type { IWindGrid } from '../wind-data';
import type { IWindFlowStep } from './particleTypes';
import type { IWindVectorSample } from './types';
export type WindVectorSampler = (lng: number, lat: number) => IWindVectorSample | null;
export declare const sampleWindVector: (windGrid: IWindGrid, lng: number, lat: number) => IWindVectorSample | null;
export declare const createWindVectorSampler: (windGrid: IWindGrid) => WindVectorSampler;
export declare const advanceWindCoordinate: (sampleWind: WindVectorSampler, lng: number, lat: number, deltaSeconds: number, timeScale: number) => IWindFlowStep | null;
