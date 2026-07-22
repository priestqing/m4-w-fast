import type { MapCrs, MapRenderViewport } from '../../shared/map/types';
import type { MapRenderer } from '../renderer';
import type { RendererLifecycleState, RendererReleaseReason } from '../types';
import type { Webgl2FrameContext, Webgl2RendererRequirements } from './types';
/** 管理 WebGL2 上下文、帧循环、丢失恢复和公共资源工具。 */
export declare abstract class BaseWebgl2Renderer implements MapRenderer<'webgl2'> {
    readonly backend: "webgl2";
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
    protected getRequirements(): Webgl2RendererRequirements;
    protected abstract createFeatureResources(): void;
    protected abstract releaseFeatureResources(reason: RendererReleaseReason): void;
    protected prepareFrame(_frame: Webgl2FrameContext): void;
    protected encodePrePasses(_frame: Webgl2FrameContext): void;
    protected abstract encodeMainPass(frame: Webgl2FrameContext): void;
    protected encodePostPasses(_frame: Webgl2FrameContext): void;
    protected getGl(): WebGL2RenderingContext;
    protected getCrs(): MapCrs;
    protected createProgram(vertexSource: string, fragmentSource: string): WebGLProgram;
    protected getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation;
    private getCanvas;
    private createContextAndResources;
    private createShader;
    private resetFrameState;
    private handleContextLost;
    private handleContextRestored;
    private releaseCurrentResources;
}
