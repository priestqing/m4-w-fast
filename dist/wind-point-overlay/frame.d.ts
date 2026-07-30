import type { RasterPointFrameOptions } from '../raster-point-overlay/frameTypes';
import type { MapCrs, MapRenderViewport } from '../shared/map/types';
import type { GridData } from '../shared/visualization';
import type { IWindGrid } from '../wind-data';
import type { IWindPointFrame } from './types';
export declare const createWindPointFrame: (windGrid: IWindGrid, viewport: MapRenderViewport, crs: MapCrs, options?: RasterPointFrameOptions) => IWindPointFrame;
export declare const createWindPointFrameWithSpeedGrid: (windGrid: IWindGrid, speedGrid: GridData, viewport: MapRenderViewport, crs: MapCrs, options?: RasterPointFrameOptions) => IWindPointFrame;
