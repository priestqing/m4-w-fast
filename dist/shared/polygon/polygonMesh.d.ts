import type { PolygonMesh, PolygonMeshInput } from './types';
/** 将 GeoJSON Polygon 或 MultiPolygon 转换为三角形网格。 */
export declare const createPolygonMesh: (input: PolygonMeshInput) => PolygonMesh;
