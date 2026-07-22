/**
 * Available renderer backends.
 * 可用的渲染后端。
 */
export type RendererBackend = 'cpu' | 'webgl' | 'webgl2' | 'webgpu';
/**
 * GPU renderer backends.
 * GPU 渲染后端。
 */
export type GpuRendererBackend = Extract<RendererBackend, 'webgl2' | 'webgpu'>;
/**
 * Renderer lifecycle states.
 * 渲染器生命周期状态。
 */
export type RendererLifecycleState = 'idle' | 'initializing' | 'ready' | 'lost' | 'restoring' | 'destroyed';
/**
 * Reasons for releasing feature resources.
 * 释放功能资源的原因。
 */
export type RendererReleaseReason = 'destroy' | 'device-lost' | 'context-lost' | 'reinitialize' | 'initialization-failed';
