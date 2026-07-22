import type { RasterGrid } from '../raster-rendering';
/** 按数据索引稳定分块，相邻分块共享边界样本以保持插值连续。 */
export declare const createRasterPlaneGridChunks: (grid: RasterGrid, maximumTextureSize: number) => RasterGrid[];
export declare const gridChunkLayoutEqual: (left: readonly RasterGrid[], right: readonly RasterGrid[]) => boolean;
