import type { MapCrs } from './types';
/** 将地图世界像素 X 坐标反算为数据坐标 X。 */
export declare const worldToCoordinateX: (worldX: number, zoom: number, crs: MapCrs) => number;
/** 将地图世界像素 Y 坐标反算为数据坐标 Y。 */
export declare const worldToCoordinateY: (worldY: number, zoom: number, crs: MapCrs) => number;
/** 将数据坐标投影为地图世界像素。 */
export declare const coordinateToWorld: (x: number, y: number, zoom: number, crs: MapCrs) => readonly [number, number];
