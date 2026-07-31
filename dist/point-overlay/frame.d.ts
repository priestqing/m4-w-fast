import type { INormalizedPointData } from './data';
import type { IPointFrame, IPointFrameOptions, MapCrs, MapRenderViewport } from './types';
export { normalizePointData } from './data';
export declare const createPointFrame: (data: INormalizedPointData, viewport: MapRenderViewport, crs: MapCrs, options?: IPointFrameOptions) => IPointFrame;
