import type { ClipMode, CoverageOptions } from '../shared/coverage';
import type { ColorMode, ColorRange, ColorStop, ColorStopInput, GridData, SampleMode } from '../shared/visualization';
export type RasterRendererType = 'cpu' | 'webgl' | 'webgl2' | 'webgpu';
export type RasterColorMode = ColorMode;
export type RasterSampleMode = SampleMode;
export type RasterColorStopInput = ColorStopInput;
export type RasterColorStop = ColorStop;
export type RasterGrid = GridData;
export type RasterColorRange = ColorRange;
export type RasterClipMode = ClipMode;
export type RasterClipOptions = CoverageOptions;
/** 所有栅格渲染器共用的显示配置。 */
export interface RasterRenderOptions {
    colorRange?: RasterColorRange;
    opacity?: number;
    colorMode?: RasterColorMode;
    sampleMode?: RasterSampleMode;
}
/** 栅格渲染器初始化配置。 */
export interface RasterRendererCreateOptions<T = RasterColorStop> extends RasterRenderOptions {
    colorStops: T[];
    grid: RasterGrid;
    clip?: RasterClipOptions;
}
/** 由参数创建栅格所需的数据。 */
export interface RasterParams {
    values: ArrayLike<number>;
    nx: number;
    ny: number;
    minLng: number;
    minLat: number;
    gjLat: number;
    gjLng: number;
    noData?: number;
    valueScale?: number;
    flipY?: boolean;
}
export interface RasterFileSource {
    type: 'tif' | 'micaps4';
    url: string;
}
export interface RasterParamsSource {
    type: 'params';
    params: RasterParams;
}
export type RasterSource = RasterFileSource | RasterParamsSource;
export interface RasterLoadOptions {
    flipY?: boolean;
    noData?: number;
    valueScale?: number;
}
export type RasterQueryReason = 'ok' | 'no-data' | 'out-of-bounds' | 'out-of-range' | 'outside-clip' | 'invalid-point';
export interface RasterQueryPoint {
    x: number;
    y: number;
}
export interface RasterQueryResult {
    x: number;
    y: number;
    rawValue: number;
    value: number;
    valueScale: number;
    gridX: number;
    gridY: number;
    valid: boolean;
    visible: boolean;
    reason: RasterQueryReason;
}
export interface RasterQueryOptions {
    colorRange?: RasterColorRange | null;
    sampleMode?: RasterSampleMode;
}
export type RasterQueryCallback = (result: RasterQueryResult) => void;
