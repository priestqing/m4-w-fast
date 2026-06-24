import type * as L from 'leaflet';
export type M4LeafletRenderMode = 'step' | 'smooth';
export interface M4LeafletColorStop {
    min: number;
    max: number;
    color: [number, number, number] | [number, number, number, number] | string;
}
export interface M4LeafletGrid {
    gjLat: number;
    gjLng: number;
    maxLat: number;
    maxLng: number;
    minLat: number;
    minLng: number;
    nx: number;
    ny: number;
    values: number[];
}
export interface M4LeafletLayerOptions extends L.LayerOptions {
    colorStops: M4LeafletColorStop[];
    leaflet?: typeof L;
    maxValue?: number;
    minValue?: number;
    opacity?: number;
    renderMode?: M4LeafletRenderMode;
}
export interface M4LeafletLayerInputOptions extends Omit<M4LeafletLayerOptions, 'colorStops'> {
    breaks?: number[];
    colors?: M4LeafletColorStop['color'][];
    colorStops?: M4LeafletColorStop[];
}
export interface M4LeafletColorRange {
    maxValue: number;
    minValue: number;
}
export interface M4LeafletLayer extends L.Layer {
    getSnapshotCanvas: () => HTMLCanvasElement | null;
    redraw: () => M4LeafletLayer;
    setColorRange: (range: M4LeafletColorRange) => void;
    setGrid: (grid: M4LeafletGrid) => void;
    setRenderMode: (renderMode: M4LeafletRenderMode) => void;
}
