import type { MapCrs, MapRenderViewport } from '../../shared/map/types';
import type { MapRenderer } from '../renderer';
import type { RendererLifecycleState, RendererReleaseReason } from '../types';
import type { WebglFrameContext, WebglRendererRequirements } from './types';
/** 管理 WebGL 上下文、帧循环、丢失恢复和公共资源工具。 */
export declare abstract class BaseWebglRenderer implements MapRenderer<'webgl'> {
    readonly backend: "webgl";
    private lifecycleState;
    private canvas;
    private context;
    private crs;
    private lastViewport;
    private readonly contextLostHandler;
    private readonly contextRestoredHandler;
    get state(): RendererLifecycleState;
    initialize(canvas: HTMLCanvasElement, crs: MapCrs): void;
    render(viewport: MapRenderViewport): void;
    destroy(): void;
    protected getRequirements(): WebglRendererRequirements;
    protected abstract createFeatureResources(): void;
    protected abstract releaseFeatureResources(reason: RendererReleaseReason): void;
    protected prepareFrame(_frame: WebglFrameContext): void;
    protected encodePrePasses(_frame: WebglFrameContext): void;
    protected abstract encodeMainPass(frame: WebglFrameContext): void;
    protected encodePostPasses(_frame: WebglFrameContext): void;
    protected getGl(): WebGLRenderingContext;
    protected getCrs(): MapCrs;
    protected createProgram(vertexSource: string, fragmentSource: string): WebGLProgram;
    private getCanvas;
    private createContextAndResources;
    private createShader;
    private resetFrameState;
    private handleContextLost;
    private handleContextRestored;
    private releaseCurrentResources;
}
