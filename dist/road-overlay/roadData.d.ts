import type { RoadGeoJsonInput, RoadGeometryParseResult, RoadMesh, RoadCoordinateTransform } from './types';
/**
 * Prepared road data for GPU rendering.
 * 准备好用 GPU 渲染的道路数据
 */
export interface PreparedRoadData {
    geometry: RoadGeometryParseResult;
    mesh: RoadMesh;
}
/**
 * Prepare road GeoJSON into geometry and mesh data.
 * 将道路 GeoJSON 准备为几何和 mesh 数据
 * @param roads
 * @param coordinateTransform
 */
export declare const prepareRoadData: (roads: RoadGeoJsonInput, coordinateTransform?: RoadCoordinateTransform) => PreparedRoadData;
