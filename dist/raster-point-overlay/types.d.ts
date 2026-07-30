import type * as L from 'leaflet';
import type { ClipMode, CoverageOptions } from '../shared/coverage';
import type { ColorRange, ColorStopInput, GridData } from '../shared/visualization';
import type { RasterParams, RasterSource } from '../raster-overlay/rasterTypes';
import type { RasterPointFeature, RasterPointFilterOptions, RasterPointLodOptions } from './frameTypes';
export type RasterPointFillColor = string | 'value';
export type RasterPointColorMode = 'single' | 'color-stops';
export type RasterPointLabelContent = 'none' | 'value' | 'name' | 'name-value';
export interface RasterPointStyleOptions {
    showPoint?: boolean;
    radius?: number;
    colorMode?: RasterPointColorMode;
    fillColor?: RasterPointFillColor;
    strokeColor?: string;
    strokeWidth?: number;
    opacity?: number;
}
export interface RasterPointLabelOptions {
    content?: RasterPointLabelContent;
    getName?: (point: RasterPointFeature) => string | null | undefined;
    formatter?: (point: RasterPointFeature, name: string | null) => string;
    valueFormatter?: (value: number, point: RasterPointFeature) => string;
    minZoom?: number;
    collision?: boolean;
    color?: string;
    font?: string;
    offset?: number;
    lineHeight?: number;
}
export interface RasterPointTooltipOptions {
    enabled?: boolean;
    formatter?: (point: RasterPointFeature) => string;
}
export interface RasterPointInteractionOptions {
    hover?: boolean;
    click?: boolean;
    selectOnClick?: boolean;
    hitRadius?: number;
    tooltip?: RasterPointTooltipOptions;
}
export type RasterPointCallback = (point: RasterPointFeature) => void;
export interface RasterPointLeafletLayerCreateOptions extends L.LayerOptions {
    grid: GridData;
    colorStops?: ColorStopInput[];
    colorRange?: ColorRange;
    opacity?: number;
    lod?: RasterPointLodOptions;
    style?: RasterPointStyleOptions;
    label?: RasterPointLabelOptions;
    interaction?: RasterPointInteractionOptions;
    clip?: CoverageOptions;
    filter?: RasterPointFilterOptions;
    onHover?: RasterPointCallback;
    onClick?: RasterPointCallback;
}
export interface RasterPointEvent extends L.LeafletEvent {
    point: RasterPointFeature;
    latlng: L.LatLng;
    originalEvent: MouseEvent;
}
export interface RasterPointLeafletLayer extends L.Layer {
    setParams: (params: RasterParams) => Promise<void>;
    setSource: (source: RasterSource) => Promise<void>;
    setGrid: (grid: GridData) => Promise<void>;
    redraw: () => void;
    getCanvas: () => HTMLCanvasElement | null;
    setColorStops: (colorStops: ColorStopInput[]) => void;
    setColorRange: (range: ColorRange | null) => void;
    setOpacity: (opacity: number) => void;
    setClip: (clip: CoverageOptions) => void;
    setClipMode: (mode: ClipMode) => void;
    clearClip: () => void;
    setLod: (lod: RasterPointLodOptions) => void;
    setPointStyle: (style: RasterPointStyleOptions) => void;
    setLabelOptions: (label: RasterPointLabelOptions) => void;
    setInteractionOptions: (interaction: RasterPointInteractionOptions) => void;
    setFilterOptions: (filter: RasterPointFilterOptions) => void;
    clearSelection: () => void;
}
export type { ClipMode, ColorRange, ColorStopInput, GridData };
export type { RasterPointAutoLodOptions, RasterPointFeature, RasterPointFilterOptions, RasterPointFrame, RasterPointFrameOptions, RasterPointFramePoint, RasterPointLodLevel, RasterPointLodOptions, RasterPointLodViewportSize, RasterPointManualLodOptions } from './frameTypes';
