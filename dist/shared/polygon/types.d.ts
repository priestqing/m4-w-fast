import type { Feature, FeatureCollection, MultiPolygon, Polygon } from 'geojson';
/** 支持的多边形几何类型。 */
export type PolygonGeometry = Polygon | MultiPolygon;
/** 可用于生成覆盖网格的 GeoJSON 输入。 */
export type PolygonMeshInput = PolygonGeometry | Feature<PolygonGeometry> | FeatureCollection<PolygonGeometry>;
/** 三角化后的多边形覆盖网格。 */
export interface PolygonMesh {
    vertices: Float32Array<ArrayBuffer>;
    vertexCount: number;
    triangleCount: number;
}
