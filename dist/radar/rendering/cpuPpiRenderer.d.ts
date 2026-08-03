import type { CpuFrameContext, RendererReleaseReason } from '../../rendering';
import { BaseCpuRenderer } from '../../rendering';
import type { ColorMode, ColorRange, ColorStop } from '../../shared/visualization';
import type { PpiMesh } from '../ppiMesh';
import type { PpiRenderer } from './ppiRenderer';
import { PpiRenderState } from './ppiRenderState';
export declare class CpuPpiRenderer extends BaseCpuRenderer implements PpiRenderer<'cpu'> {
    private readonly ppiState;
    constructor(ppiState?: PpiRenderState);
    setMesh(mesh: PpiMesh): void;
    setColorStops(stops: readonly ColorStop[]): void;
    setColorRange(range: ColorRange | null): void;
    setOpacity(opacity: number): void;
    setColorMode(mode: ColorMode): void;
    protected createFeatureResources(): void;
    protected releaseFeatureResources(_reason: RendererReleaseReason): void;
    protected encodeFrame(frame: CpuFrameContext): void;
    private isVisible;
    private resolveColor;
}
