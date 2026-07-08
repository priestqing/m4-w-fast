import type { RasterColorMode, RasterColorRange, RasterColorStop, RasterGrid, RasterSampleMode } from '../../raster-overlay';
import type { RoadMesh } from '../types';
import type { RoadLeafletCrs, RoadLeafletRenderer, RoadLeafletRenderViewport } from './renderer';
/**
 * WebGPU road renderer.
 * WebGPU 道路渲染器
 */
export declare class WebGpuRoadRenderer implements RoadLeafletRenderer {
    private canvas;
    private crs;
    private mesh;
    private grid;
    private colorStops;
    private colorRange;
    private opacity;
    private lineWidth;
    private colorMode;
    private sampleMode;
    private adapter;
    private device;
    private context;
    private format;
    private vertexBuffer;
    private pipeline;
    private paramsBuffer;
    private bindGroup;
    private readonly paramsData;
    private texture;
    private textureView;
    private colorStopMins;
    private colorStopMaxs;
    private colorStopColors;
    private colorStopMinsBuffer;
    private colorStopMaxsBuffer;
    private colorStopColorsBuffer;
    initialize(canvas: HTMLCanvasElement, crs: RoadLeafletCrs | null): Promise<void>;
    render(viewport: RoadLeafletRenderViewport): void | Promise<void>;
    setColorMode(colorMode: RasterColorMode): void;
    setColorRange(range: RasterColorRange): void;
    setColorStops(colorStops: RasterColorStop[]): void;
    setGrid(grid: RasterGrid): void | Promise<void>;
    setLineWidth(lineWidth: number): void;
    setMesh(mesh: RoadMesh): void;
    setOpacity(opacity: number): void;
    setSampleMode(sampleMode: RasterSampleMode): void;
    destroy(): void;
    private createPipeline;
    private writeParams;
    private getResources;
    private createParamsBuffer;
    private updateColorStopArrays;
    private createColorStopBuffers;
    private uploadGridTexture;
    private createBindGroup;
}
