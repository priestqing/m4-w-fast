import type { IWindGrid, IWindLoadOptions, IWindParams, WindSource, WindSpeedGrid } from './types';
export declare const calculateWindSpeed: (u: number, v: number) => number;
/**
 * 按气象约定计算风向：0 度表示北风，角度顺时针增加，表示风吹来的方向。
 */
export declare const calculateWindDirection: (u: number, v: number) => number | null;
export declare const createWindGridFromParams: (params: IWindParams) => IWindGrid;
export declare const parseWindText: (text: string, options?: IWindLoadOptions) => IWindGrid;
export declare const loadWindGrid: (source: string | WindSource, options?: IWindLoadOptions) => Promise<IWindGrid>;
export declare const createWindSpeedGrid: (windGrid: IWindGrid) => WindSpeedGrid;
export declare const validateWindGrid: (grid: IWindGrid) => IWindGrid;
