import type { Feature, FeatureCollection, GeoJsonProperties, LineString, MultiLineString } from 'geojson';
import type { RasterColorMode, RasterColorRange, RasterColorStopInput, RasterGrid, RasterRendererType, RasterSampleMode, RasterSource } from '../raster-overlay';
import type { CoverageOptions } from '../shared/coverage';
/**
 * Road GeoJSON input type.
 * 道路 GeoJSON 输入类型
 */
export type RoadGeoJsonInput = FeatureCollection<LineString | MultiLineString> | Feature<LineString | MultiLineString> | LineString | MultiLineString;
/**
 * Road coordinate point.
 * 道路坐标点
 * x/y: display 坐标，用于贴地图绘制。高德时可以是 GCJ-02
 * sampleX/sampleY: sample 坐标，用于采样 grid。micaps4 时保持 可能使用源坐标或显示坐标
 */
export interface RoadCoordinate {
    x: number;
    y: number;
    sampleX: number;
    sampleY: number;
    z?: number;
}
/**
 * Road geometry bounds.
 * 道路线坐标范围
 */
export interface RoadBounds {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
}
/**
 * Normalized single road geometry.
 * 规范化的单条道路几何信息
 */
export interface RoadGeometry {
    id: string;
    featureIndex: number;
    lineIndex: number;
    coordinates: RoadCoordinate[];
    properties: GeoJsonProperties;
    bounds: RoadBounds;
}
/**
 * Road geometry parse result.
 * 道路几何解析结果
 */
export interface RoadGeometryParseResult {
    roads: RoadGeometry[];
    bounds: RoadBounds | null;
    pointCount: number;
    lineCount: number;
}
/**
 * Road mesh vertex layout.
 * 道路 mesh 顶点布局
 *
 * 每个顶点暂时使用 9 个 float:
 * displayX, displayY,
 * segmentStartDisplayX, segmentStartDisplayY,
 * segmentEndDisplayX, segmentEndDisplayY,
 * sampleX, sampleY,
 * localIndex
 */
export interface RoadMeshVertexLayout {
    stride: 9;
    displayXOffset: 0;
    displayYOffset: 1;
    segmentStartDisplayXOffset: 2;
    segmentStartDisplayYOffset: 3;
    segmentEndDisplayXOffset: 4;
    segmentEndDisplayYOffset: 5;
    sampleXOffset: 6;
    sampleYOffset: 7;
    localIndexOffset: 8;
}
/**
 * Road mesh segment metadata.
 * 道路 mesh 路段元信息
 */
export interface RoadMeshSegment {
    roadIndex: number;
    pointStartIndex: number;
    pointEndIndex: number;
    vertexStart: number;
    vertexCount: number;
}
/**
 * Road mesh build result.
 * 道路 mesh 构建结果
 */
export interface RoadMesh {
    vertices: Float32Array<ArrayBuffer>;
    segments: RoadMeshSegment[];
    vertexCount: number;
    triangleCount: number;
    layout: RoadMeshVertexLayout;
}
/**
 * Road renderer type.
 * 道路图层支持的渲染方案
 */
export type RoadRendererType = Extract<RasterRendererType, 'webgl2' | 'webgpu'>;
/**
 * Road coordinate transform.
 * 地图坐标系转换
 */
export type RoadCoordinateTransform = 'none' | 'wgs84-to-gcj02';
/**
 * Road grid sampling coordinate mode.
 * 道路栅格采样坐标模式。
 */
export type RoadSampleCoordinateMode = 'source' | 'display';
/**
 * Road layer create options.
 * 道路图层创建参数
 */
export interface RoadLayerCreateOptions {
    rendererType: RoadRendererType;
    coordinateTransform?: RoadCoordinateTransform;
    sampleCoordinateMode?: RoadSampleCoordinateMode;
    roads: RoadGeoJsonInput;
    grid?: RasterGrid;
    source?: RasterSource;
    colorStops: RasterColorStopInput[];
    colorRange?: RasterColorRange;
    colorMode?: RasterColorMode;
    sampleMode?: RasterSampleMode;
    lineWidth?: number;
    opacity?: number;
    pane?: string;
    tooltip?: RoadTooltipOptions;
    onHover?: RoadQueryCallback;
    onClick?: RoadQueryCallback;
    clip?: CoverageOptions;
}
/**
 * Road hover/click result.
 * 道路 hover/click 查询结果
 */
export interface RoadQueryResult {
    road: RoadGeometry;
    segment: RoadMeshSegment | null;
    x: number;
    y: number;
    value: number | null;
    rawValue: number | null;
    distance: number;
}
/**
 * Road query callback.
 * 道路查询回调
 */
export type RoadQueryCallback = (result: RoadQueryResult) => void;
/**
 * Road tooltip options.
 * 道路 tooltip 配置
 */
export interface RoadTooltipOptions {
    enabled?: boolean;
    formatter?: (result: RoadQueryResult) => string;
}
