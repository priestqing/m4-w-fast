import type { ClipMode } from '../../shared/coverage';
import type { MapCrs } from '../../shared/map/types';
import type { PolygonMesh } from '../../shared/polygon';
/** 管理 WebGPU 多边形、模板和遮罩覆盖资源。 */
export declare class WebgpuCoverageResources {
    private readonly device;
    private readonly crs;
    private readonly paramsBuffer;
    private vertexBuffer;
    private vertexCount;
    private stencilTexture;
    private maskTexture;
    private readonly stencilPipeline;
    private readonly maskPipeline;
    private readonly stencilBindGroup;
    private readonly maskBindGroup;
    private width;
    private height;
    constructor(device: GPUDevice, crs: MapCrs, paramsBuffer: GPUBuffer);
    get maskView(): GPUTextureView | null;
    updateMesh(mesh: PolygonMesh | null): void;
    resize(width: number, height: number): void;
    encode(encoder: GPUCommandEncoder, mode: ClipMode): void;
    createStencilAttachment(): GPURenderPassDepthStencilAttachment | undefined;
    /** 使用公共多边形顶点编码一次直接绘制。 */
    drawDirect(pass: GPURenderPassEncoder): boolean;
    destroy(): void;
    private createStencilPipeline;
    private createMaskPipeline;
    private createVertexSource;
    private createVertexLayout;
    private createParamsBindGroup;
    private createVertexBuffer;
    private encodeStencil;
    private encodeMask;
}
