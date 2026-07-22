import type { IWebgpuVolumeSlice } from './webgpuVolumeTypes';
export declare class WebgpuSliceResources {
    private readonly device;
    private readonly layout;
    private resources;
    private uniformUpdateCount;
    private resourceRebuildCount;
    constructor(device: GPUDevice, layout: GPUBindGroupLayout);
    get count(): number;
    get statistics(): {
        uniformUpdateCount: number;
        resourceRebuildCount: number;
    };
    replace(slices: readonly IWebgpuVolumeSlice[]): void;
    draw(pass: GPURenderPassEncoder, pipeline: GPURenderPipeline, depthMode: IWebgpuVolumeSlice['depthMode']): void;
    destroy(): void;
    private createValues;
    private createResource;
    private valuesEqual;
    private destroyResources;
}
