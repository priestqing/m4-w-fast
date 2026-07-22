import type { RasterColorMode, RasterColorRange, RasterColorStopInput, RasterGrid, RasterSampleMode } from '../raster-overlay/rasterTypes';
import type { ClipMode } from '../shared/coverage';
import type { PolygonMeshInput } from '../shared/polygon';
import type { GeographicRasterTileRequest, WebgpuRasterTileRendererOptions } from './types';
/** 将规则栅格绘制为 Cesium GeographicTilingScheme 使用的透明瓦片。 */
export declare class WebgpuRasterTileRenderer {
    private readonly renderer;
    private canvas;
    private initializationPromise;
    private renderQueue;
    private destroyed;
    constructor(options: WebgpuRasterTileRendererOptions);
    setGrid(grid: RasterGrid): void;
    setColorStops(colorStops: RasterColorStopInput[]): void;
    setColorRange(colorRange: RasterColorRange | null): void;
    setOpacity(opacity: number): void;
    setColorMode(colorMode: RasterColorMode): void;
    setSampleMode(sampleMode: RasterSampleMode): void;
    setClip(data: PolygonMeshInput | null, mode?: ClipMode): void;
    setClipMode(mode: ClipMode): void;
    renderTile(request: GeographicRasterTileRequest): Promise<HTMLCanvasElement>;
    destroy(): void;
    private renderTileNow;
    private captureTileCanvas;
    private ensureInitialized;
    private createViewport;
    private validateRequest;
    private createAbortError;
}
