import type { RasterGrid } from '../raster-overlay/types';
import type { IVolumeSource } from '../volume-scene/sourceTypes';
export declare const createHorizontalRasterGrid: (source: IVolumeSource, timeIndex: number, levelIndex: number, signal?: AbortSignal) => Promise<RasterGrid>;
