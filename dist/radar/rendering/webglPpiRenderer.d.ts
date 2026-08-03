import type { RendererReleaseReason, WebglFrameContext, WebglRendererRequirements } from '../../rendering';
import { BaseWebglRenderer } from '../../rendering';
import type { ColorMode, ColorRange, ColorStop } from '../../shared/visualization';
import type { PpiMesh } from '../ppiMesh';
import type { PpiRenderer } from './ppiRenderer';
import { PpiRenderState } from './ppiRenderState';
export declare class WebglPpiRenderer extends BaseWebglRenderer implements PpiRenderer<'webgl'> {
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
    protected getRequirements(): WebglRendererRequirements;
    protected createFeatureResources(): void;
    protected releaseFeatureResources(_reason: RendererReleaseReason): void;
    protected prepareFrame(): void;
    protected encodeMainPass(frame: WebglFrameContext): void;
    private syncResources;
}
