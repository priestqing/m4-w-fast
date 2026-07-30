import type { MapRenderViewport } from '../../shared/map/types';
/** CPU 渲染器初始化前声明的 Canvas 2D 要求。 */
export interface CpuRendererRequirements {
    contextAttributes?: CanvasRenderingContext2DSettings;
}
/** CPU 生命周期管理的基础资源。 */
export interface CpuRendererResources {
    readonly context: CanvasRenderingContext2D;
}
/** CPU 帧渲染过程中使用的固定上下文。 */
export interface CpuFrameContext {
    readonly context: CanvasRenderingContext2D;
    readonly viewport: MapRenderViewport;
}
