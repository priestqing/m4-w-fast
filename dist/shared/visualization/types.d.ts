/**
 * Color mapping mode shared by visualization features.
 * 可视化功能共用的颜色映射模式。
 */
export type ColorMode = 'step' | 'smooth';
/**
 * Grid sampling mode shared by visualization features.
 * 可视化功能共用的网格采样模式。
 */
export type SampleMode = 'interpolate' | 'cell';
/**
 * External color stop input.
 * 外部传入的色标配置。
 */
export interface ColorStopInput {
    min: number;
    max: number;
    color: string;
}
/**
 * Normalized color stop.
 * 归一化后的色标配置。
 */
export interface ColorStop {
    min: number;
    max: number;
    color: [number, number, number, number];
}
/**
 * Visible value range used by color mapping.
 * 颜色映射使用的可见数据范围。
 */
export interface ColorRange {
    minValue: number;
    maxValue: number;
}
/**
 * Regular grid data sampled by visualization features.
 * 可视化功能采样的规则网格数据。
 */
export interface GridData {
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
 * Flat color stop arrays consumed by renderers.
 * 渲染器使用的扁平色标数组。
 */
export interface ColorStopArrays {
    mins: Float32Array<ArrayBuffer>;
    maxs: Float32Array<ArrayBuffer>;
    colors: Float32Array<ArrayBuffer>;
}
/**
 * Validated color stops and their renderer arrays.
 * 已校验的色标及其渲染器数组。
 */
export interface PreparedColorStops {
    colorStops: ColorStop[];
    arrays: ColorStopArrays;
}
