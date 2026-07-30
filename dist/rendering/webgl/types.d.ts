import type { MapRenderViewport } from '../../shared/map/types';
/** WebGL 渲染器初始化前声明的能力要求。 */
export interface WebglRendererRequirements {
    contextAttributes?: WebGLContextAttributes;
    extensions?: readonly string[];
    fragmentHighp?: boolean;
}
/** WebGL 生命周期管理的基础资源。 */
export interface WebglRendererResources {
    readonly gl: WebGLRenderingContext;
}
/** WebGL 帧渲染过程中使用的固定上下文。 */
export interface WebglFrameContext {
    readonly gl: WebGLRenderingContext;
    readonly viewport: MapRenderViewport;
}
