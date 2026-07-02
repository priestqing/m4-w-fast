import type * as L from 'leaflet';
/**
 * 栅格图层支持的渲染方案
 */
export type RasterRendererType = 'cpu' | 'webgl' | 'webgl2' | 'webgpu';
/**
 * 栅格颜色的映射模式
 * - step: 分段式
 * - smooth: 平滑
 */
export type RasterColorMode = 'step' | 'smooth';
/**
 * 栅格空间采样模式
 * - interpolate: 双线性插值采样
 * - cell: 单元格采样
 */
export type RasterSampleMode = 'interpolate' | 'cell';
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
    /**
     * 颜色映射模式
     */
    colorMode?: RasterColorMode;
    /**
     * 栅格空间采样模式
     */
    sampleMode?: RasterSampleMode;
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
    onHover?: RasterQueryCallback;
    onClick?: RasterQueryCallback;
    tooltip?: RasterTooltipOptions;
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
/**
 * Raster query result reason
 * 栅格查询结果原因
 */
export type RasterQueryReason = 'ok' | 'no-data' | 'out-of-bounds' | 'out-of-range';
/**
 * Raster query coordinate
 * 栅格查询坐标 (考虑到 crs -> simple 这里统一用 x,y 不用 lng,lat )
 */
export interface RasterQueryPoint {
    x: number;
    y: number;
}
/**
 * Raster query result
 * 栅格查询结果
 */
export interface RasterQueryResult {
    x: number;
    y: number;
    /**
     * 原始栅格值
     */
    rawValue: number;
    /**
     * 栅格值 (正常数据时等于 rawValue * valueScale)
     */
    value: number;
    /**
     * 当前栅格缩放值
     */
    valueScale: number;
    /**
     * 栅格网格 X 坐标
     */
    gridX: number;
    /**
     * 栅格网格 Y 坐标
     */
    gridY: number;
    /**
     * 是否有效业务数据
     */
    valid: boolean;
    /**
     * 是否能被当前 colorRange 显示
     */
    visible: boolean;
    /**
     * 查询结果原因, 解释为什么有效/无效/不可见
     */
    reason: RasterQueryReason;
}
/**
 * Raster query options
 * 栅格查询配置
 */
export interface RasterQueryOptions {
    /**
     * Visible value range, matching the renderer's color range.
     * 当前可见值范围, 和渲染器使用的色标范围保持一致
     */
    colorRange?: RasterColorRange | null;
    /**
     * Sampling mode used by query, matching the renderer's sample mode.
     * 查询使用的采样模式, 和渲染器采样模式保持一致
     */
    sampleMode?: RasterSampleMode;
}
/**
 * Raster interaction callback.
 * 栅格交互回调
 */
export type RasterQueryCallback = (result: RasterQueryResult) => void;
/**
 * Raster query leaflet event.
 * 栅格查询 Leaflet 事件对象
 */
export interface RasterQueryEvent extends L.LeafletEvent {
    result: RasterQueryResult;
    latlng: L.LatLng;
    originalEvent: MouseEvent;
}
/**
 * Raster tooltip options.
 * 栅格 tooltip 配置, 只控制内置 UI
 */
export interface RasterTooltipOptions {
    /**
     * Whether built-in tooltip is enabled.
     * 是否启用内置 tooltip
     */
    enabled?: boolean;
    /**
     * Tooltip display position.
     * tooltip显示位置, follow 跟随鼠标, fixed 固定在地图左下角
     */
    position?: 'follow' | 'fixed';
    /**
     * Format tooltip content.
     * 格式化 tooltip 内容
     */
    formatter?: (result: RasterQueryResult) => string;
}
