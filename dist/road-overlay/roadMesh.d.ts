import type { RoadGeometry, RoadMesh } from './types';
/**
 * Build road mesh from normalized road geometries.
 * 根据规范化道路几何数据构建道路 mesh
 * @param roads
 */
export declare const buildRoadMesh: (roads: RoadGeometry[]) => RoadMesh;
