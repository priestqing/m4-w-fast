import type { MapRenderViewport } from '../../shared/map/types';
/**
 * Capabilities requested before initializing a WebGPU renderer.
 * WebGPU 渲染器初始化前声明的能力要求。
 */
export interface WebgpuRendererRequirements {
    powerPreference?: GPUPowerPreference;
    forceFallbackAdapter?: boolean;
    requiredFeatures?: readonly GPUFeatureName[];
    requiredLimits?: Readonly<Record<string, number>>;
    alphaMode?: GPUCanvasAlphaMode;
    canvasUsage?: GPUTextureUsageFlags;
    viewFormats?: readonly GPUTextureFormat[];
}
/**
 * Resources owned by the WebGPU renderer lifecycle.
 * WebGPU 渲染器生命周期管理的基础资源。
 */
export interface WebgpuRendererResources {
    readonly adapter: GPUAdapter;
    readonly device: GPUDevice;
    readonly context: GPUCanvasContext;
    readonly format: GPUTextureFormat;
}
/**
 * Fixed context supplied while encoding a WebGPU frame.
 * WebGPU 帧编码过程中使用的固定上下文。
 */
export interface WebgpuFrameContext {
    readonly encoder: GPUCommandEncoder;
    readonly targetView: GPUTextureView;
    readonly viewport: MapRenderViewport;
}
