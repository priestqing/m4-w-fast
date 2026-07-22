import * as L from 'leaflet';
import type { MapCrs } from './types';
/**
 * Resolve a Leaflet CRS into the internal map CRS identifier.
 * 将 Leaflet CRS 转换为内部地图坐标系标识。
 */
export declare const resolveLeafletCrs: (crs: L.CRS) => MapCrs | null;
