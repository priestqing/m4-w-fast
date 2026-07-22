import type { RasterColorStopInput, RasterColorStop } from './rasterTypes';
/**
 * 归一化到 0-1的rgba
 * @param colorStops
 */
export declare const normalizeColorStops: (colorStops: RasterColorStopInput[]) => RasterColorStop[];
/**
 * 解析颜色
 * @param color
 */
export declare const parseRasterColor: (color: string) => RasterColorStop["color"];
