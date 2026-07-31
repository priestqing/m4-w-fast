import type * as L from 'leaflet';
import type { ColorRange, ColorStopInput } from '../shared/visualization';
import type { MapCrs, MapRenderViewport } from '../shared/map/types';
export type PointCoordinateArray = Float32Array | Float64Array;
export type PointValueArray = Float32Array | Float64Array;
export type PointId = string | number;
export type PointIdArray = readonly PointId[] | Uint32Array;
export type PointNameArray = readonly string[] | Uint32Array;
export type PointProperties = Record<string, unknown>;
export type PointLabelContent = 'none' | 'value' | 'name' | 'name-value';
export interface IPointDataItem {
    id?: PointId;
    x: number;
    y: number;
    value: number;
    name?: string | number;
    properties?: PointProperties;
}
export interface PointLabelOptions {
    content?: PointLabelContent;
    getName?: (point: IPointFeature) => string | null | undefined;
    formatter?: (point: IPointFeature, name: string | null) => string;
    valueFormatter?: (value: number | string, point: IPointFeature) => string;
    minZoom?: number;
    color?: string;
    font?: string;
    offset?: number;
    lineHeight?: number;
}
export interface IPointColumnData {
    x: PointCoordinateArray;
    y: PointCoordinateArray;
    values: PointValueArray;
    ids?: PointIdArray;
    names?: PointNameArray;
    properties?: readonly (PointProperties | undefined)[];
    noData?: number;
}
export type PointDataSource = readonly IPointDataItem[] | IPointColumnData;
export interface IPointFeature extends IPointDataItem {
    index: number;
}
export interface IPointFrame {
    indices: Uint32Array;
    screenX: Float32Array;
    screenY: Float32Array;
}
export interface IPointFrameOptions {
    minSpacing?: number;
    maxPoints?: number;
    candidateFactor?: number;
    colorRange?: ColorRange | null;
}
export interface IPointCircleIcon {
    type: 'circle';
    radius?: number;
    strokeColor?: string;
    strokeWidth?: number;
}
export interface IPointImageIconBase {
    source: string | CanvasImageSource;
    width?: number;
    height?: number;
    anchorX?: number;
    anchorY?: number;
}
export interface IPointSvgIcon extends IPointImageIconBase {
    type: 'svg';
}
export interface IPointPngIcon extends IPointImageIconBase {
    type: 'png';
}
export interface IPointNoneIcon {
    type: 'none';
}
export type PointIconOptions = IPointCircleIcon | IPointSvgIcon | IPointPngIcon | IPointNoneIcon;
export type PointColorMode = 'fixed' | 'value';
export interface IPointColorOptions {
    mode?: PointColorMode;
    color?: string;
    colorStops?: ColorStopInput[];
    colorRange?: ColorRange | null;
}
export interface IPointLodOptions {
    minSpacing?: number;
    maxPoints?: number;
    candidateFactor?: number;
}
export interface IPointInteractionOptions {
    hover?: boolean;
    click?: boolean;
    selectOnClick?: boolean;
    hitRadius?: number;
    tooltip?: {
        enabled?: boolean;
        formatter?: (point: IPointFeature) => string;
    };
}
export type PointRendererType = 'webgl2' | 'canvas';
export type PointCallback = (point: IPointFeature) => void;
export interface IPointLeafletLayerCreateOptions extends L.LayerOptions {
    data: PointDataSource;
    rendererType?: PointRendererType;
    icon?: PointIconOptions;
    color?: IPointColorOptions;
    lod?: IPointLodOptions;
    label?: PointLabelOptions;
    opacity?: number;
    interaction?: IPointInteractionOptions;
    onHover?: PointCallback;
    onClick?: PointCallback;
}
export interface IPointLeafletLayer extends L.Layer {
    setData: (data: PointDataSource) => Promise<void>;
    setValues: (values: PointValueArray) => void;
    setIcon: (icon: PointIconOptions) => Promise<void>;
    setColorOptions: (color: IPointColorOptions) => void;
    setLodOptions: (lod: IPointLodOptions) => void;
    setInteractionOptions: (interaction: IPointInteractionOptions) => void;
    setOpacity: (opacity: number) => void;
    redraw: () => void;
    getCanvas: () => HTMLCanvasElement | null;
    clearSelection: () => void;
}
export type { ColorRange, ColorStopInput, MapCrs, MapRenderViewport };
