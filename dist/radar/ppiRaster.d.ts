import type { GridData } from '../shared/visualization';
import type { PpiRadarProduct, PpiRasterizeOptions, RadarProduct } from './types';
/** 将雷达产品转换为现有四后端渲染器可直接使用的规则栅格。CR 不复制数据。 */
export declare const radarProductToGrid: (product: RadarProduct, options?: PpiRasterizeOptions) => GridData;
/**
 * 将 PPI 极坐标数据采样到站点局部切平面栅格。
 * 这是绘图适配步骤，不改变解析结果中的原始径向数据。
 */
export declare const createPpiRasterGrid: (product: PpiRadarProduct, options?: PpiRasterizeOptions) => GridData;
/** 按地面距离和方位角查询原始 PPI 径向数据。 */
export declare const samplePpiValue: (product: PpiRadarProduct, groundDistance: number, azimuth: number) => number;
