import type { GridData } from '../shared/visualization';
export type WindFileFormat = 'micaps4-wind' | 'micaps11';
export interface IWindMetadata {
    format: WindFileFormat;
    title: string;
    year: number;
    month: number;
    day: number;
    hour: number;
    forecastHour: number;
    level: number;
}
export interface IWindGrid {
    uValues: Float32Array;
    vValues: Float32Array;
    width: number;
    height: number;
    minLng: number;
    maxLng: number;
    minLat: number;
    maxLat: number;
    noData?: number;
    valueScale: number;
    metadata?: IWindMetadata;
}
export interface IWindParams {
    uValues: ArrayLike<number>;
    vValues: ArrayLike<number>;
    nx: number;
    ny: number;
    startLng: number;
    startLat: number;
    gjLng: number;
    gjLat: number;
    noData?: number;
    valueScale?: number;
    flipX?: boolean;
    flipY?: boolean;
    metadata?: IWindMetadata;
}
export interface IWindLoadOptions {
    noData?: number;
    valueScale?: number;
    flipX?: boolean;
    flipY?: boolean;
}
export interface IWindFileSource {
    type: 'micaps-wind';
    url: string;
}
export interface IWindParamsSource {
    type: 'params';
    params: IWindParams;
}
export type WindSource = IWindFileSource | IWindParamsSource;
export type WindSpeedGrid = GridData;
