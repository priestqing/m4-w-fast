import type { IWebgpuOpacityStop, IWebgpuTransferStop } from './webgpuVolumeTypes';
export declare class WebgpuTransferResources {
    private readonly device;
    private colorValuesBuffer;
    private colorBuffer;
    private opacityValuesBuffer;
    private opacityBuffer;
    private colorStopCount;
    private opacityStopCount;
    constructor(device: GPUDevice);
    get counts(): readonly [number, number];
    update(colorStops: readonly IWebgpuTransferStop[], opacityStops: readonly IWebgpuOpacityStop[]): void;
    createBindGroup(layout: GPUBindGroupLayout): GPUBindGroup;
    destroy(): void;
    private destroyBuffers;
}
