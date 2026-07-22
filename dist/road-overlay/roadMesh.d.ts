import type { RoadGeometry, RoadMesh, RoadMeshVertexLayout } from './types';
export declare const ROAD_VERTEX_FLOAT_COUNT = 9;
export declare const ROAD_VERTICES_PER_SEGMENT = 6;
export declare const ROAD_MESH_VERTEX_LAYOUT: RoadMeshVertexLayout;
/**
 * Build a triangle mesh from normalized Road geometries.
 * 根据规范化道路几何构建三角形 mesh。
 */
export declare const buildRoadMesh: (roads: readonly RoadGeometry[]) => RoadMesh;
