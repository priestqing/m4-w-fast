import type { RasterSampleMode } from '../raster-overlay/types';
import type { VolumeDepthMode } from '../volume-scene/profileTypes';
export interface IVolumeSectionPoint {
    longitude: number;
    latitude: number;
}
export interface IVolumeSectionRouteVertex extends IVolumeSectionPoint {
    routeIndex: number;
    sampleIndex: number;
    distanceKm: number;
}
export interface ICreateVolumeSectionOptions {
    timeIndex: number;
    route: readonly IVolumeSectionPoint[];
    sampleCount?: number;
    sampleIntervalKm?: number;
    sampleMode?: RasterSampleMode;
    signal?: AbortSignal;
}
export interface IVolumeSection {
    timeIndex: number;
    sampleMode: RasterSampleMode;
    width: number;
    height: number;
    values: Float32Array;
    heights: Float32Array;
    longitudes: Float64Array;
    latitudes: Float64Array;
    distancesKm: Float64Array;
    totalDistanceKm: number;
    routeVertices: readonly IVolumeSectionRouteVertex[];
    noData: number;
}
export interface ICreateVolumeSectionRouteProfileOptions {
    id: string;
    opacity?: number;
    depthMode?: VolumeDepthMode;
    revision?: number;
}
