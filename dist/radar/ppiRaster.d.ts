import type { GridData } from '../shared/visualization';
import type { PpiRasterizeOptions, RadarProduct, RadarRadialProductBase } from './types';
export interface IPpiSample {
    value: number;
    radialIndex: number;
    binIndex: number;
}
/** 将雷达产品转换为现有四后端渲染器可直接使用的规则栅格，已有栅格产品不复制数据。 */
export declare const radarProductToGrid: (product: RadarProduct, options?: PpiRasterizeOptions) => GridData;
/**
 * 将 PPI 极坐标数据采样到站点局部切平面栅格。
 * 这是绘图适配步骤，不改变解析结果中的原始径向数据。
 */
export declare const createPpiRasterGrid: (product: RadarRadialProductBase, options?: PpiRasterizeOptions) => GridData;
/** 按地面距离和方位角查询原始 PPI 径向数据。 */
export declare const samplePpiValue: (product: RadarRadialProductBase, groundDistance: number, azimuth: number) => number;
/** 按地面距离和方位角查询 PPI 值及对应径向、距离库索引。 */
export declare const queryPpiValue: (product: RadarRadialProductBase, groundDistance: number, azimuth: number) => IPpiSample;
export declare const createRadarRadialGrid: (product: RadarRadialProductBase, options?: PpiRasterizeOptions) => GridData;
export declare const sampleRadarRadialValue: (product: RadarRadialProductBase, groundDistance: number, azimuth: number) => number;
export declare const queryRadarRadialValue: (product: RadarRadialProductBase, groundDistance: number, azimuth: number) => IPpiSample;
