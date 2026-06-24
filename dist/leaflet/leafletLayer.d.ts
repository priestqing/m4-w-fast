import type { M4LeafletColorStop, M4LeafletGrid, M4LeafletLayer, M4LeafletLayerInputOptions, M4LeafletLayerOptions } from './types';
export declare const createM4LeafletColorStops: (breaks: number[], colors: M4LeafletColorStop["color"][]) => {
    min: number;
    max: number;
    color: string | [number, number, number] | [number, number, number, number];
}[];
export declare const normalizeM4LeafletOptions: (options: M4LeafletLayerInputOptions) => M4LeafletLayerOptions;
export declare const createM4LeafletLayer: (grid: M4LeafletGrid, options: M4LeafletLayerInputOptions) => M4LeafletLayer;
