import type { RendererReleaseReason, Webgl2FrameContext } from '../../rendering';
import { BaseWebgl2Renderer } from '../../rendering';
import type { ColorMode, ColorRange, ColorStop } from '../../shared/visualization';
import type { PpiMesh } from '../ppiMesh';
import type { PpiRenderer } from './ppiRenderer';
import { PpiRenderState } from './ppiRenderState';
export declare class Webgl2PpiRenderer extends BaseWebgl2Renderer implements PpiRenderer<'webgl2'> {
    private readonly ppiState;
    private program;
    private vertexBuffer;
    private visualization;
    private meshRevision;
    private gridRevision;
    private colorRevision;
    constructor(ppiState?: PpiRenderState);
    setMesh(mesh: PpiMesh): void;
    setColorStops(stops: readonly ColorStop[]): void;
    setColorRange(range: ColorRange | null): void;
    setOpacity(opacity: number): void;
    setColorMode(mode: ColorMode): void;
    protected createFeatureResources(): void;
    protected releaseFeatureResources(_reason: RendererReleaseReason): void;
    protected prepareFrame(): void;
    protected encodeMainPass(frame: Webgl2FrameContext): void;
    private syncResources;
}
