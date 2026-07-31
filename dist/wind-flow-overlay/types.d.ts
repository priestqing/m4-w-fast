import type * as L from 'leaflet';
import type { ClipMode, CoverageOptions } from '../shared/coverage';
import type { ColorMode, ColorRange, ColorStopInput } from '../shared/visualization';
import type { IWindGrid, WindSource } from '../wind-data';
export type WindFlowRendererType = 'cpu' | 'webgl' | 'webgl2' | 'webgpu';
export type WindFlowParticleCount = number | 'auto';
export type WindFlowTrailColorMode = 'single' | 'color-stops';
export interface IWindFlowParticleOptions {
    count?: WindFlowParticleCount;
    density?: number;
    maxCount?: number;
    maxAge?: number;
    timeScale?: number;
    maxFrameDelta?: number;
}
export interface IWindFlowTrailOptions {
    width?: number;
    opacity?: number;
    fadeOpacity?: number;
    colorMode?: WindFlowTrailColorMode;
    color?: string;
    colorStops?: ColorStopInput[];
    colorMappingMode?: ColorMode;
    colorRange?: ColorRange;
}
export interface IWindFlowFilterOptions {
    valueRange?: boolean;
    clip?: boolean;
}
export interface IWindVectorSample {
    u: number;
    v: number;
    speed: number;
}
export interface IWindFlowLeafletLayerCreateOptions extends L.LayerOptions {
    grid: IWindGrid;
    rendererType?: WindFlowRendererType;
    opacity?: number;
    particle?: IWindFlowParticleOptions;
    trail?: IWindFlowTrailOptions;
    clip?: CoverageOptions;
    filter?: IWindFlowFilterOptions;
    autoStart?: boolean;
}
export interface IWindFlowLeafletLayer extends L.Layer {
    setSource: (source: string | WindSource) => Promise<void>;
    setGrid: (grid: IWindGrid) => Promise<void>;
    setOpacity: (opacity: number) => void;
    setParticleOptions: (particle: IWindFlowParticleOptions) => void;
    setTrailOptions: (trail: IWindFlowTrailOptions) => void;
    setClip: (clip: CoverageOptions) => void;
    setClipMode: (mode: ClipMode) => void;
    clearClip: () => void;
    setFilterOptions: (filter: IWindFlowFilterOptions) => void;
    start: () => void;
    stop: () => void;
    clear: () => void;
    redraw: () => void;
    getCanvas: () => HTMLCanvasElement | null;
    isRunning: () => boolean;
}
export type { ClipMode, ColorMode, ColorRange, ColorStopInput, CoverageOptions, IWindGrid, WindSource };
