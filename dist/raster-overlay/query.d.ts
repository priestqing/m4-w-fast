import type { RasterGrid, RasterQueryPoint, RasterQueryResult, RasterQueryOptions } from './rasterTypes';
export declare const formatRasterQueryResult: (result: RasterQueryResult) => string;
/**
 * Query a raster value with the sampling rules used by the renderers.
 * 使用和渲染器一样的采样规则查询栅格
 *
 * @param grid
 * @param point
 * @param options
 */
export declare const queryRasterValue: (grid: RasterGrid, point: RasterQueryPoint, options?: RasterQueryOptions) => RasterQueryResult;
/**
 * Query raster values while preserving the input point order.
 * 按输入点顺序批量查询栅格值
 *
 * @param grid
 * @param points
 * @param options
 */
export declare const queryRasterValues: (grid: RasterGrid, points: readonly RasterQueryPoint[], options?: RasterQueryOptions) => RasterQueryResult[];
