import type { MapCrs, MapRenderViewport } from '../../shared/map/types';
import type { MapRenderer } from '../renderer';
import type { RendererLifecycleState, RendererReleaseReason } from '../types';
import type { CpuFrameContext, CpuRendererRequirements } from './types';
/** 管理 Canvas 2D 上下文、画布尺寸和公共 CPU 渲染生命周期。 */
export declare abstract class BaseCpuRenderer implements MapRenderer<'cpu'> {
    readonly backend: "cpu";
    private lifecycleState;
    private canvas;
    private context;
    private crs;
    get state(): RendererLifecycleState;
    initialize(canvas: HTMLCanvasElement, crs: MapCrs): void;
    render(viewport: MapRenderViewport): void;
    destroy(): void;
    protected getRequirements(): CpuRendererRequirements;
    protected abstract createFeatureResources(): void;
    protected abstract releaseFeatureResources(reason: RendererReleaseReason): void;
    protected prepareFrame(_frame: CpuFrameContext): void;
    protected abstract encodeFrame(frame: CpuFrameContext): void;
    protected getCanvas(): HTMLCanvasElement;
    protected getContext(): CanvasRenderingContext2D;
    protected getCrs(): MapCrs;
}
