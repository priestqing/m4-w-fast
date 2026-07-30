import type { CoverageOptions } from '../shared/coverage';
import type { MapCrs, MapRenderViewport } from '../shared/map/types';
import type { ColorRange, GridData } from '../shared/visualization';
export interface RasterPointFeature {
    index: number;
    gridX: number;
    gridY: number;
    x: number;
    y: number;
    rawValue: number;
    value: number;
}
export interface RasterPointFramePoint extends RasterPointFeature {
    screenX: number;
    screenY: number;
}
export interface RasterPointFrame {
    rowStride: number;
    columnStride: number;
    points: RasterPointFramePoint[];
}
export interface RasterPointAutoLodOptions {
    mode?: 'auto';
    minSpacing?: number;
    maxPoints?: number;
}
export interface RasterPointLodLevel {
    minZoom: number;
    rowStride: number;
    columnStride?: number;
}
export interface RasterPointManualLodOptions {
    mode: 'manual';
    levels: RasterPointLodLevel[];
}
export type RasterPointLodOptions = RasterPointAutoLodOptions | RasterPointManualLodOptions;
export interface RasterPointFilterOptions {
    valueRange?: boolean;
    clip?: boolean;
}
export interface RasterPointLodViewportSize {
    width: number;
    height: number;
}
export interface RasterPointFrameOptions {
    lod?: RasterPointLodOptions;
    lodViewportSize?: RasterPointLodViewportSize;
    colorRange?: ColorRange | null;
    clip?: CoverageOptions | null;
    filter?: RasterPointFilterOptions;
}
export type { ColorRange, GridData, MapCrs, MapRenderViewport };
