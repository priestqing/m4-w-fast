import type { MapCrs, MapRenderViewport } from '../../shared/map/types';
import type { MapRenderer } from '../renderer';
import type { RendererLifecycleState, RendererReleaseReason } from '../types';
import type { WebgpuFrameContext, WebgpuRendererRequirements, WebgpuRendererResources } from './types';
/**
 * Owns the complete WebGPU renderer lifecycle and fixed frame structure.
 * 管理完整的 WebGPU 渲染器生命周期和固定帧结构。
 */
export declare abstract class BaseWebgpuRenderer implements MapRenderer<'webgpu'> {
    readonly backend: "webgpu";
    private lifecycleState;
    private canvas;
    private crs;
    private resources;
    private lastViewport;
    private initializationGeneration;
    private restorePromise;
    private featureResourcesActive;
    private frameWidth;
    private frameHeight;
    /**
     * Return the current renderer lifecycle state.
     * 返回当前渲染器生命周期状态。
     */
    get state(): RendererLifecycleState;
    /**
     * Initialize the WebGPU backend and feature resources.
     * 初始化 WebGPU 后端和功能资源。
     */
    initialize(canvas: HTMLCanvasElement, crs: MapCrs): Promise<void>;
    /**
     * Encode and submit one complete WebGPU frame.
     * 编码并提交一帧完整的 WebGPU 渲染。
     */
    render(viewport: MapRenderViewport): void;
    /** 等待当前提交完成并复制画布内容，供地图宿主安全持有该帧。 */
    captureImageBitmap(): Promise<ImageBitmap>;
    /**
     * Destroy backend and feature resources.
     * 销毁后端资源和具体功能资源。
     */
    destroy(): void;
    /**
     * Declare WebGPU capabilities before requesting the adapter and device.
     * 在请求 adapter 和 device 前声明 WebGPU 能力要求。
     */
    protected getRequirements(): WebgpuRendererRequirements;
    /**
     * Create resources owned by the concrete feature renderer.
     * 创建具体功能渲染器拥有的资源。
     */
    protected abstract createFeatureResources(): void;
    /**
     * Release resources owned by the concrete feature renderer.
     * 释放具体功能渲染器拥有的资源。
     */
    protected abstract releaseFeatureResources(reason: RendererReleaseReason): void;
    /**
     * Prepare CPU and GPU state before encoding render passes.
     * 在编码渲染通道前准备 CPU 和 GPU 状态。
     */
    protected prepareFrame(_frame: WebgpuFrameContext): void;
    /**
     * Encode offscreen, stencil, or compute passes before the main pass.
     * 在主通道之前编码离屏、模板或计算通道。
     */
    protected encodePrePasses(_frame: WebgpuFrameContext): void;
    /**
     * Create the default main render pass descriptor.
     * 创建默认主渲染通道描述。
     *
     * Renderers requiring depth, stencil, or multiple color attachments may override this method.
     * 需要深度、模板或多颜色附件的渲染器可以覆盖该方法。
     */
    protected createMainPassDescriptor(frame: WebgpuFrameContext): GPURenderPassDescriptor;
    /**
     * Encode feature drawing commands into the main render pass.
     * 将具体功能绘制命令编码到主渲染通道。
     */
    protected abstract encodeMainPass(pass: GPURenderPassEncoder, frame: WebgpuFrameContext): void;
    /**
     * Encode optional passes after the main pass.
     * 在主通道之后编码可选通道。
     */
    protected encodePostPasses(_frame: WebgpuFrameContext): void;
    /**
     * Resize feature attachments after the physical canvas size changes.
     * 在画布物理尺寸变化后调整具体功能使用的附件。
     */
    protected handleResize(_width: number, _height: number): void;
    /**
     * Return initialized WebGPU resources.
     * 返回已经初始化的 WebGPU 资源。
     */
    protected getResources(): WebgpuRendererResources;
    /**
     * Return the current render canvas.
     * 返回当前渲染画布。
     */
    protected getCanvas(): HTMLCanvasElement;
    /**
     * Return the current map coordinate system.
     * 返回当前地图坐标系。
     */
    protected getCrs(): MapCrs;
    /**
     * Create a labeled shader module.
     * 创建带标签的 ShaderModule。
     */
    protected createShaderModule(source: string, label: string): GPUShaderModule;
    /**
     * Create a buffer with a four-byte aligned size.
     * 创建尺寸按四字节对齐的 Buffer。
     */
    protected createBuffer(size: number, usage: GPUBufferUsageFlags, label: string): GPUBuffer;
    /**
     * Create a buffer and upload its initial data.
     * 创建 Buffer 并上传初始数据。
     */
    protected createBufferWithData(data: ArrayBufferView<ArrayBuffer>, usage: GPUBufferUsageFlags, label: string): GPUBuffer;
    /**
     * Create a transparent color attachment.
     * 创建透明颜色附件。
     */
    protected createTransparentColorAttachment(view: GPUTextureView, loadOp?: GPULoadOp, storeOp?: GPUStoreOp): GPURenderPassColorAttachment;
    /**
     * Create backend and feature resources for the active initialization generation.
     * 为当前初始化代次创建后端资源和功能资源。
     */
    private initializeResources;
    /**
     * Request and configure the WebGPU adapter, device, and canvas context.
     * 请求并配置 WebGPU adapter、device 和画布上下文。
     */
    private createBackendResources;
    /**
     * Validate renderer requirements that can be checked before requesting a device.
     * 校验能够在请求 device 前检查的渲染器能力要求。
     */
    private validateRequirements;
    /**
     * Validate that the adapter supports all required WebGPU features.
     * 校验 adapter 是否支持全部必需的 WebGPU feature。
     */
    private validateAdapterFeatures;
    /**
     * Validate the physical dimensions of the current viewport.
     * 校验当前视口的物理尺寸。
     */
    private validateViewport;
    /**
     * Synchronize the canvas physical size with the current viewport.
     * 将画布物理尺寸与当前视口同步。
     */
    private resizeCanvas;
    /**
     * Observe the device loss promise for the active WebGPU device.
     * 监听当前 WebGPU device 的丢失状态。
     */
    private watchDeviceLost;
    /**
     * Release invalid resources and start device restoration after device loss.
     * 在 device 丢失后释放失效资源并开始恢复。
     */
    private handleDeviceLost;
    /**
     * Recreate backend and feature resources after device loss.
     * 在 device 丢失后重新创建后端资源和功能资源。
     */
    private restoreDevice;
    /**
     * Release feature resources, canvas configuration, and the active device.
     * 释放功能资源、画布配置和当前 device。
     */
    private releaseCurrentResources;
    /**
     * Check whether an asynchronous initialization still belongs to the active generation.
     * 检查异步初始化是否仍属于当前有效代次。
     */
    private isGenerationActive;
}
