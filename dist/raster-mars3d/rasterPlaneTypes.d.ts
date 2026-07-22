import type { RasterColorMode, RasterColorRange, RasterColorStopInput, RasterGrid, RasterSampleMode } from '../raster-rendering';
import type { IMars3dBaseLayerLike, IMars3dCesiumRuntime } from './rasterPlaneCesiumTypes';
export interface IMars3dRasterPlaneLayerOptions {
    grid: RasterGrid;
    height: number;
    colorStops: RasterColorStopInput[];
    colorRange?: RasterColorRange;
    colorMode?: RasterColorMode;
    sampleMode?: RasterSampleMode;
    opacity?: number;
    name?: string;
    show?: boolean;
}
export interface IMars3dRasterPlaneLayerUpdate {
    grid?: RasterGrid;
    height?: number;
    colorStops?: RasterColorStopInput[];
    colorRange?: RasterColorRange | null;
    colorMode?: RasterColorMode;
    sampleMode?: RasterSampleMode;
    opacity?: number;
}
export interface IMars3dRasterPlaneLayer {
    readonly height: number;
    update(options: IMars3dRasterPlaneLayerUpdate): void;
    destroy(noDel?: boolean): void;
}
export interface IMars3dRuntime {
    readonly Cesium: IMars3dCesiumRuntime;
    readonly layer: {
        readonly BaseLayer: new (options?: unknown) => IMars3dBaseLayerLike;
    };
}
