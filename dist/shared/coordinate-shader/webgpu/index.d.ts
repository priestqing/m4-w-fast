import type { MapCrs } from '../../map';
/** 注入地图坐标到世界坐标的正向转换。 */
export declare const createWebgpuCoordinateShaderSource: (shaderSource: string, crs: MapCrs) => string;
/** 注入屏幕像素到地图坐标的反向转换。 */
export declare const createWebgpuInverseCoordinateShaderSource: (shaderSource: string, crs: MapCrs) => string;
