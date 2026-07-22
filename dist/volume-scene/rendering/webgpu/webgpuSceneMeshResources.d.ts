import type { IWebgpuSceneMesh } from './webgpuVolumeTypes';
export declare class WebgpuSceneMeshResources {
    private readonly device;
    private resources;
    constructor(device: GPUDevice);
    get count(): number;
    replace(meshes: readonly IWebgpuSceneMesh[]): void;
    draw(pass: GPURenderPassEncoder, topology: GPUPrimitiveTopology, depthMode: IWebgpuSceneMesh['depthMode']): void;
    destroy(): void;
    private createResource;
    private destroyResources;
}
