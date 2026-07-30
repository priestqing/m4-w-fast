import type { CpuFrameContext, RendererReleaseReason } from '../../rendering';
import { BaseCpuRenderer } from '../../rendering';
import type { ClipMode } from '../../shared/coverage';
import type { PolygonMeshInput } from '../../shared/polygon';
import type { ColorMode, ColorRange, ColorStop, GridData, SampleMode } from '../../shared/visualization';
import { RasterRenderState } from './rasterRenderState';
import type { RasterRenderer } from './renderer';
/** 使用 Canvas 2D ImageData 渲染栅格，并保持与 GPU Adapter 一致的显示语义。 */
export declare class CpuRasterRenderer extends BaseCpuRenderer implements RasterRenderer<'cpu'> {
    private readonly rasterState;
    private bufferCanvas;
    private bufferContext;
    private imageData;
    private xCoordinates;
    private yCoordinates;
    constructor(rasterState?: RasterRenderState);
    setGrid(grid: GridData): void;
    setColorStops(colorStops: readonly ColorStop[]): void;
    setColorRange(colorRange: ColorRange | null): void;
    setOpacity(opacity: number): void;
    setColorMode(colorMode: ColorMode): void;
    setSampleMode(sampleMode: SampleMode): void;
    setClip(data: PolygonMeshInput | null, mode?: ClipMode): void;
    setClipMode(mode: ClipMode): void;
    protected createFeatureResources(): void;
    protected releaseFeatureResources(_reason: RendererReleaseReason): void;
    protected encodeFrame(frame: CpuFrameContext): void;
    private ensureFrameResources;
    private updateCoordinateCache;
    private renderPixels;
    private sampleGrid;
    private resolveColor;
    private applyClipPath;
    private isInvalidRawValue;
    private mix;
}
