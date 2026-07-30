import type * as L from 'leaflet';
import type { ClipMode, CoverageOptions } from '../shared/coverage';
import type { ColorRange } from '../shared/visualization';
import type { RasterPointFilterOptions, RasterPointLodOptions } from '../raster-point-overlay/frameTypes';
import type { IWindGrid, WindSource } from '../wind-data';
export type WindPointLabelContent = 'none' | 'speed' | 'direction' | 'speed-direction';
export interface IWindPointFeature {
    index: number;
    gridX: number;
    gridY: number;
    x: number;
    y: number;
    u: number;
    v: number;
    speed: number;
    direction: number | null;
}
export interface IWindPointFramePoint extends IWindPointFeature {
    screenX: number;
    screenY: number;
}
export interface IWindPointFrame {
    rowStride: number;
    columnStride: number;
    points: IWindPointFramePoint[];
}
export interface IWindBarbIcon {
    image: CanvasImageSource;
    width?: number;
    height?: number;
    anchorX?: number;
    anchorY?: number;
    rotationOffset?: number;
}
export type WindBarbIconProvider = (point: IWindPointFeature) => IWindBarbIcon | null | undefined;
export interface IWindBarbStyleOptions {
    showBarb?: boolean;
    width?: number;
    height?: number;
    anchorX?: number;
    anchorY?: number;
    rotationOffset?: number;
    opacity?: number;
}
export interface IWindPointLabelOptions {
    content?: WindPointLabelContent;
    speedFormatter?: (speed: number, point: IWindPointFeature) => string;
    directionFormatter?: (direction: number | null, point: IWindPointFeature) => string;
    formatter?: (point: IWindPointFeature) => string;
    minZoom?: number;
    collision?: boolean;
    color?: string;
    font?: string;
    offset?: number;
    lineHeight?: number;
}
export interface IWindPointTooltipOptions {
    enabled?: boolean;
    formatter?: (point: IWindPointFeature) => string;
}
export interface IWindPointInteractionOptions {
    hover?: boolean;
    click?: boolean;
    selectOnClick?: boolean;
    hitRadius?: number;
    tooltip?: IWindPointTooltipOptions;
}
export type WindPointCallback = (point: IWindPointFeature) => void;
export interface IWindPointLeafletLayerCreateOptions extends L.LayerOptions {
    grid: IWindGrid;
    getIcon?: WindBarbIconProvider;
    colorRange?: ColorRange;
    opacity?: number;
    lod?: RasterPointLodOptions;
    style?: IWindBarbStyleOptions;
    label?: IWindPointLabelOptions;
    interaction?: IWindPointInteractionOptions;
    clip?: CoverageOptions;
    filter?: RasterPointFilterOptions;
    onHover?: WindPointCallback;
    onClick?: WindPointCallback;
}
export interface IWindPointEvent extends L.LeafletEvent {
    point: IWindPointFeature;
    latlng: L.LatLng;
    originalEvent: MouseEvent;
}
export interface IWindPointLeafletLayer extends L.Layer {
    setSource: (source: string | WindSource) => Promise<void>;
    setGrid: (grid: IWindGrid) => Promise<void>;
    redraw: () => void;
    getCanvas: () => HTMLCanvasElement | null;
    setIconProvider: (getIcon: WindBarbIconProvider | null) => void;
    setColorRange: (range: ColorRange | null) => void;
    setOpacity: (opacity: number) => void;
    setClip: (clip: CoverageOptions) => void;
    setClipMode: (mode: ClipMode) => void;
    clearClip: () => void;
    setLod: (lod: RasterPointLodOptions) => void;
    setBarbStyle: (style: IWindBarbStyleOptions) => void;
    setLabelOptions: (label: IWindPointLabelOptions) => void;
    setInteractionOptions: (interaction: IWindPointInteractionOptions) => void;
    setFilterOptions: (filter: RasterPointFilterOptions) => void;
    clearSelection: () => void;
}
export type { ClipMode, ColorRange, CoverageOptions, IWindGrid, RasterPointFilterOptions, RasterPointLodOptions, WindSource };
