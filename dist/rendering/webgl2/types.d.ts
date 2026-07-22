import type { MapRenderViewport } from '../../shared/map/types';
/**
 * Capabilities requested before initializing a WebGL2 renderer.
 * WebGL2 渲染器初始化前声明的能力要求。
 */
export interface Webgl2RendererRequirements {
    contextAttributes?: WebGLContextAttributes;
    extensions?: readonly string[];
}
/**
 * Resources owned by the WebGL2 renderer lifecycle.
 * WebGL2 渲染器生命周期管理的基础资源。
 */
export interface Webgl2RendererResources {
    readonly gl: WebGL2RenderingContext;
}
/**
 * Fixed context supplied while rendering a WebGL2 frame.
 * WebGL2 帧渲染过程中使用的固定上下文。
 */
export interface Webgl2FrameContext {
    readonly gl: WebGL2RenderingContext;
    readonly viewport: MapRenderViewport;
}
