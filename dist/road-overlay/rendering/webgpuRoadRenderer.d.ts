import type { WebgpuFrameContext } from '../../rendering';
import { BaseWebgpuRenderer } from '../../rendering';
import type { RendererReleaseReason } from '../../rendering';
import type { ClipMode } from '../../shared/coverage';
import type { PolygonMeshInput } from '../../shared/polygon';
import type { ColorMode, ColorRange, ColorStop, GridData, SampleMode } from '../../shared/visualization';
import type { RoadMesh } from '../types';
import type { RoadRenderer } from './renderer';
import { RoadRenderState } from './roadRenderState';
/**
 * Render grid-colored Roads through the shared WebGPU lifecycle.
 * 通过公共 WebGPU 生命周期渲染网格染色道路。
 */
export declare class WebgpuRoadRenderer extends BaseWebgpuRenderer implements RoadRenderer<'webgpu'> {
    private readonly roadState;
    private readonly paramsData;
    private pipeline;
    private stencilPipeline;
    private maskPipeline;
    private vertexBuffer;
    private paramsBuffer;
    private bindGroup;
    private stencilBindGroup;
    private maskBindGroup;
    private visualizationResources;
    private coverageResources;
    private appliedMeshRevision;
    private appliedGridRevision;
    private appliedColorStopsRevision;
    private appliedClipRevision;
    constructor(roadState?: RoadRenderState);
    /**
     * Replace the Road mesh.
     * 替换道路 mesh。
     */
    setMesh(mesh: RoadMesh): void;
    /**
     * Replace the grid sampled while coloring Roads.
     * 替换道路染色时采样的网格。
     */
    setGrid(grid: GridData): void;
    /**
     * Replace normalized color stops.
     * 替换归一化色标。
     */
    setColorStops(colorStops: readonly ColorStop[]): void;
    /**
     * Set or clear the visible value range.
     * 设置或清除可见数据范围。
     */
    setColorRange(colorRange: ColorRange | null): void;
    /**
     * Set Road opacity.
     * 设置道路透明度。
     */
    setOpacity(opacity: number): void;
    /**
     * Set Road width in CSS pixels.
     * 设置以 CSS 像素为单位的道路线宽。
     */
    setLineWidth(lineWidth: number): void;
    /**
     * Set the color mapping mode.
     * 设置颜色映射模式。
     */
    setColorMode(colorMode: ColorMode): void;
    /**
     * Set the grid sampling mode.
     * 设置网格采样模式。
     */
    setSampleMode(sampleMode: SampleMode): void;
    setClip(data: PolygonMeshInput | null, mode?: ClipMode): void;
    setClipMode(mode: ClipMode): void;
    /**
     * Create Road resources owned by the active WebGPU device.
     * 创建当前 WebGPU device 拥有的道路资源。
     */
    protected createFeatureResources(): void;
    /**
     * Release resources owned by the Road renderer.
     * 释放道路渲染器拥有的资源。
     */
    protected releaseFeatureResources(_reason: RendererReleaseReason): void;
    /**
     * Synchronize changed state and write frame parameters.
     * 同步发生变化的状态并写入当前帧参数。
     */
    protected prepareFrame(frame: WebgpuFrameContext): void;
    protected handleResize(width: number, height: number): void;
    protected encodePrePasses(frame: WebgpuFrameContext): void;
    protected createMainPassDescriptor(frame: WebgpuFrameContext): GPURenderPassDescriptor;
    /**
     * Encode Road triangles into the main render pass.
     * 将道路三角形编码到主渲染通道。
     */
    protected encodeMainPass(pass: GPURenderPassEncoder, _frame: WebgpuFrameContext): void;
    /**
     * Create the Road render pipeline for the active CRS and canvas format.
     * 为当前 CRS 和画布格式创建道路渲染 Pipeline。
     */
    private createRoadPipeline;
    /**
     * Synchronize mesh, grid, and color stop GPU resources by revision.
     * 根据修订版本同步 mesh、网格和色标 GPU 资源。
     */
    private syncFeatureResources;
    /**
     * Synchronize the Road vertex buffer.
     * 同步道路顶点 Buffer。
     */
    private syncMeshResource;
    /**
     * Synchronize the shared grid texture.
     * 同步公共网格纹理。
     */
    private syncGridResource;
    /**
     * Synchronize shared color stop buffers.
     * 同步公共色标 Buffer。
     */
    private syncColorStopResources;
    /**
     * Create the Road BindGroup after all shared resources become available.
     * 在全部公共资源可用后创建道路 BindGroup。
     */
    private ensureBindGroup;
    private syncClipResource;
    private getCoverageMode;
    /**
     * Return initialized shared visualization resources.
     * 返回已经初始化的公共可视化资源。
     */
    private getVisualizationResources;
}
