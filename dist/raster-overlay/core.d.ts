import type { RasterGrid, RasterLoadOptions, RasterParams, RasterSource } from './rasterTypes';
/**
 * 根据直接参数创建统一栅格数据
 * @param params
 * @param options
 */
export declare const createGridFromParams: (params: RasterParams, options?: RasterLoadOptions) => RasterGrid;
/**
 * 解析 MICAPS4 文本内容并转换为统一栅格数据
 * @param text
 * @param options
 */
export declare const parseMicaps4Text: (text: string, options?: RasterLoadOptions) => RasterGrid;
/**
 * 从URL加载M4文件
 * @param url
 * @param options
 */
export declare const loadMicaps4Grid: (url: string, options?: RasterLoadOptions) => Promise<RasterGrid>;
/**
 * 从URL加载tif, 首个图像
 * @param url
 * @param options
 */
export declare const loadTifGrid: (url: string, options?: RasterLoadOptions) => Promise<RasterGrid>;
/**
 * 根据数据源加载统一的栅格数据
 * @param source
 * @param options
 */
export declare const loadRasterGrid: (source: RasterSource, options?: RasterLoadOptions) => Promise<RasterGrid>;
/**
 * 验证栅格数据的合法性
 * @param grid
 */
export declare const validateRasterGrid: (grid: RasterGrid) => RasterGrid;
