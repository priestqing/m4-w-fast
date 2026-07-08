import type { RoadLayerCreateOptions } from './types';
/**
 * Normalized road layer options.
 * 规范化后的道路图层参数
 */
export interface NormalizedRoadLayerOptions extends RoadLayerCreateOptions {
    lineWidth: number;
    opacity: number;
}
/**
 * Normalize road layer create options.
 * 规范化道路图层创建参数
 * @param options
 */
export declare const normalizeRoadLayerOptions: (options: RoadLayerCreateOptions) => NormalizedRoadLayerOptions;
