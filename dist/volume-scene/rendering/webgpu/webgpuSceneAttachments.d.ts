export declare class WebgpuSceneAttachments {
    private readonly device;
    private depthTexture;
    private depthView;
    private width;
    private height;
    constructor(device: GPUDevice);
    get sceneDepthView(): GPUTextureView;
    resize(width: number, height: number): void;
    destroy(): void;
}
