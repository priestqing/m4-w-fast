import type { RoadGeoJsonInput, RoadGeometryParseResult, RoadCoordinateTransform, RoadSampleCoordinateMode } from './types';
/**
 * Parse road GeoJSON into normalized road geometries.
 * 将道路 GeoJSON 解析为规范化道路几何数据
 * @param input
 */
export declare const parseRoadGeoJson: (input: RoadGeoJsonInput, coordinateTransform?: RoadCoordinateTransform, sampleCoordinateMode?: RoadSampleCoordinateMode) => RoadGeometryParseResult;
