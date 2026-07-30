import type { RendererReleaseReason, WebglFrameContext, WebglRendererRequirements } from '../../rendering';
import { BaseWebglRenderer } from '../../rendering';
import type { ClipMode } from '../../shared/coverage';
import type { PolygonMeshInput } from '../../shared/polygon';
import type { ColorMode, ColorRange, ColorStop, GridData, SampleMode } from '../../shared/visualization';
import { RasterRenderState } from './rasterRenderState';
import type { RasterRenderer } from './renderer';
/** 通过公共 WebGL 生命周期渲染栅格及其四种裁剪模式。 */
export declare class WebglRasterRenderer extends BaseWebglRenderer implements RasterRenderer<'webgl'> {
    private readonly rasterState;
    private normalProgram;
    private directProgram;
    private fullscreenBuffer;
    private visualizationResources;
    private coverageResources;
    private appliedGridRevision;
    private appliedColorStopsRevision;
    private appliedClipRevision;
    constructor(rasterState?: RasterRenderState);
    setGrid(grid: GridData): void;
    setColorStops(colorStops: readonly ColorStop[]): void;
    setColorRange(colorRange: ColorRange | null): void;
    setOpacity(opacity: number): void;
    setColorMode(colorMode: ColorMode): void;
    setSampleMode(sampleMode: SampleMode): void;
    setClip(data: PolygonMeshInput | null, mode?: ClipMode): void;
    setClipMode(mode: ClipMode): void;
    protected getRequirements(): WebglRendererRequirements;
    protected createFeatureResources(): void;
    protected releaseFeatureResources(_reason: RendererReleaseReason): void;
    protected prepareFrame(frame: WebglFrameContext): void;
    protected encodePrePasses(frame: WebglFrameContext): void;
    protected encodeMainPass(frame: WebglFrameContext): void;
    private bindFullscreenGeometry;
    private syncResources;
}
