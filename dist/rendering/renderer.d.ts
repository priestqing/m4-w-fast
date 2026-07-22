import type { MapCrs, MapRenderViewport } from '../shared/map/types';
import type { RendererBackend, RendererLifecycleState } from './types';
/**
 * Minimal interface implemented by every map renderer.
 * 所有地图渲染器必须实现的最小接口。
 */
export interface MapRenderer<TBackend extends RendererBackend = RendererBackend> {
    readonly backend: TBackend;
    readonly state: RendererLifecycleState;
    /**
     * Initialize the render target and backend resources.
     * 初始化渲染目标和后端资源。
     */
    initialize(canvas: HTMLCanvasElement, crs: MapCrs): void | Promise<void>;
    /**
     * Render the current map viewport.
     * 渲染当前地图视口。
     */
    render(viewport: MapRenderViewport): void;
    /**
     * Destroy the renderer and release its resources.
     * 销毁渲染器并释放资源。
     */
    destroy(): void;
}
/**
 * Factory used to create a feature renderer.
 * 用于创建功能渲染器的工厂。
 */
export type RendererFactory<TOptions, TRenderer extends MapRenderer> = (options: TOptions) => TRenderer;
/**
 * Mapping from renderer backends to feature renderer factories.
 * 渲染后端到功能渲染器工厂的映射。
 */
export type RendererFactoryMap<TBackend extends RendererBackend, TOptions, TRenderer extends MapRenderer> = Readonly<Partial<Record<TBackend, RendererFactory<TOptions, TRenderer>>>>;
