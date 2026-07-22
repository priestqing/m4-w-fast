import type { ColorStopArrays, GridData } from '../../shared/visualization';
/**
 * Own shared WebGPU grid texture and color stop resources.
 * 管理 WebGPU 共用的网格纹理和色标资源。
 */
export declare class WebgpuVisualizationResources {
    private readonly device;
    private readonly label;
    private gridTexture;
    private gridTextureView;
    private colorStopMinsBuffer;
    private colorStopMaxsBuffer;
    private colorStopColorsBuffer;
    constructor(device: GPUDevice, label: string);
    /**
     * Return whether grid and color stop resources are available.
     * 返回网格和色标资源是否已经全部存在。
     */
    get ready(): boolean;
    /**
     * Replace the grid texture while preserving the previous texture on failure.
     * 替换网格纹理，并在更新失败时保留原纹理。
     */
    updateGrid(grid: GridData): void;
    /**
     * Replace all color stop buffers as one resource update.
     * 将全部色标 Buffer 作为一次资源更新进行替换。
     */
    updateColorStops(colorStopArrays: ColorStopArrays): void;
    /**
     * Create a BindGroup using the shared visualization binding contract.
     * 使用公共可视化 binding 契约创建 BindGroup。
     */
    createBindGroup(layout: GPUBindGroupLayout, paramsBuffer: GPUBuffer, additionalEntries?: readonly GPUBindGroupEntry[]): GPUBindGroup;
    /**
     * Destroy all shared visualization resources.
     * 销毁全部公共可视化资源。
     */
    destroy(): void;
    /**
     * Create and upload one read-only storage buffer.
     * 创建并上传单个只读 StorageBuffer。
     */
    private createStorageBuffer;
    /**
     * Return complete resources required by the visualization BindGroup.
     * 返回可视化 BindGroup 需要的完整资源。
     */
    private getResources;
}
