import type { RasterRendererCreateOptions, RasterColorStopInput } from '../raster-overlay/rasterTypes';
/** WebGPU 地理瓦片渲染器配置。 */
export type WebgpuRasterTileRendererOptions = RasterRendererCreateOptions<RasterColorStopInput>;
/** Cesium GeographicTilingScheme 使用的瓦片请求。 */
export interface GeographicRasterTileRequest {
    x: number;
    y: number;
    level: number;
    width?: number;
    height?: number;
    padding?: number;
    signal?: AbortSignal;
}
