import type { IWebgpuVolumeBrickUpload, IWebgpuVolumeMetadata } from './webgpuVolumeTypes';
export declare const MAX_ATLAS_TEXTURE_COUNT = 8;
interface IAtlasLayout {
    slotCountX: number;
    slotCountY: number;
    slotCountZ: number;
    slotCount: number;
    textureCount: number;
    capacity: number;
}
export interface IWebgpuPreparedBrickUpload {
    values: Float32Array<ArrayBuffer>;
    bytesPerRow: number;
    rowsPerImage: number;
    origin: GPUOrigin3D;
    extent: GPUExtent3D;
    atlasIndex: number;
}
export declare class WebgpuBrickAtlas {
    private readonly device;
    private readonly memoryTargetBytes;
    private readonly memoryHardLimitBytes;
    private metadata;
    private layout;
    private atlasTextures;
    private atlasViews;
    private pageTableBuffer;
    private pageTableValues;
    private readonly residentByLogicalIndex;
    private readonly residentBySlotIndex;
    private generation;
    constructor(device: GPUDevice, memoryTargetBytes?: number, memoryHardLimitBytes?: number);
    get volumeMetadata(): IWebgpuVolumeMetadata;
    get atlasLayout(): IAtlasLayout;
    get residentBrickCount(): number;
    get statistics(): {
        logicalBrickCount: number;
        atlasCapacity: number;
        gpuBytes: number;
        memoryLimitBytes: number;
        budgetLimited: boolean;
        skippedSamples: number;
        skippedCells: number;
    };
    configure(metadata: IWebgpuVolumeMetadata): void;
    prepareBrickUpload(upload: IWebgpuVolumeBrickUpload, frameIndex: number): IWebgpuPreparedBrickUpload;
    encodePreparedBrickUpload(encoder: GPUCommandEncoder, stagingBuffer: GPUBuffer, bufferOffset: number, upload: IWebgpuPreparedBrickUpload): void;
    touch(logicalIndices: readonly number[], frameIndex: number): void;
    createBindGroup(layout: GPUBindGroupLayout, metadataBuffer: GPUBuffer): GPUBindGroup;
    destroy(): void;
    private acquireSlot;
    private writePageEntry;
    private clearPageEntry;
    private getAtlasTexture;
    private clearAtlasTexture;
    private getPageTableBuffer;
    private destroyResources;
}
export {};
