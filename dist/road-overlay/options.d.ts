import type { RoadLayerCreateOptions, RoadSampleCoordinateMode } from './types';
import type { RasterColorMode, RasterSampleMode } from '../raster-overlay';
/**
 * Normalized road layer options.
 * 规范化后的道路图层参数
 */
export interface NormalizedRoadLayerOptions extends RoadLayerCreateOptions {
    lineWidth: number;
    opacity: number;
    colorMode: RasterColorMode;
    sampleMode: RasterSampleMode;
    sampleCoordinateMode: RoadSampleCoordinateMode;
}
/**
 * Normalize road layer create options.
 * 规范化道路图层创建参数
 * @param options
 */
export declare const normalizeRoadLayerOptions: (options: RoadLayerCreateOptions) => NormalizedRoadLayerOptions;
