/**
 * 栅格图层支持的渲染方案
 */
export type RasterRendererType = 'cpu' | 'webgl' | 'webgl2' | 'webgpu';
/**
 * 栅格颜色的映射模式
 * - step: 分段式
 * - smooth: 平滑
 */
export type RasterRenderMode = 'step' | 'smooth';
/**
 * 外部传入色标配置
 */
export interface RasterColorStopInput {
    min: number;
    max: number;
    color: string;
}
/**
 * 归一化之后的色标配置, ? -> rgba
 */
export interface RasterColorStop {
    min: number;
    max: number;
    color: [number, number, number, number];
}
/**
 * 解析后的栅格数据结构, **所有的**渲染器都是用这个结构
 */
export interface RasterGrid {
    values: Float32Array;
    width: number;
    height: number;
    minLng: number;
    maxLng: number;
    minLat: number;
    maxLat: number;
    noData?: number;
    valueScale: number;
}
/**
 * 当前显示的数据范围 (这里是用来拖动色标滑块显示对应内容用的 )
 */
export interface RasterColorRange {
    minValue: number;
    maxValue: number;
}
/**
 * 所有渲染器共用的显示配置
 */
export interface RasterRenderOptions {
    colorRange?: RasterColorRange;
    opacity?: number;
    renderMode?: RasterRenderMode;
}
/**
 * 渲染器初始化所需配置
 */
export interface RasterRendererCreateOptions<T = RasterColorStop> extends RasterRenderOptions {
    colorStops: T[];
    grid: RasterGrid;
}
/**
 * leaflet栅格图层所需创建参数配置
 */
export interface RasterLeafletLayerCreateOptions extends RasterRendererCreateOptions<RasterColorStopInput> {
    colorStops: RasterColorStopInput[];
    pane?: string;
    rendererType: RasterRendererType;
}
/**
 * 创建栅格数据所需参数
 */
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
    /**
     * 是否上下翻转
     */
    flipY?: boolean;
}
/**
 * 文件类型栅格数据源
 */
export interface RasterFileSource {
    type: 'tif' | 'micaps4';
    url: string;
}
/**
 * 参数类型栅格数据源
 */
export interface RasterParamsSource {
    type: 'params';
    params: RasterParams;
}
/**
 * 栅格数据源
 */
export type RasterSource = RasterFileSource | RasterParamsSource;
/**
 * 栅格数据加载配置
 */
export interface RasterLoadOptions {
    flipY?: boolean;
    noData?: number;
    valueScale?: number;
}
