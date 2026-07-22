export type WebgpuVolumeRenderMode = 'composite' | 'maximum';
export type WebgpuVolumeColorMode = 'step' | 'smooth';
export type WebgpuDepthMode = 'scene' | 'always-visible';
export type WebgpuMeshTopology = 'triangle-list' | 'line-list';
export interface IWebgpuDirectedAxis {
    start: number;
    end: number;
    count: number;
}
export interface IWebgpuVolumeMetadata {
    xAxis: IWebgpuDirectedAxis;
    yAxis: IWebgpuDirectedAxis;
    zAxis: IWebgpuDirectedAxis;
    brickWidth: number;
    brickHeight: number;
    brickDepth: number;
    halo: 1;
    noData?: number;
}
export interface IWebgpuVolumeBrickUpload {
    logicalIndex: number;
    values: Float32Array;
}
export interface IWebgpuTransferStop {
    value: number;
    color: readonly [number, number, number, number];
}
export interface IWebgpuOpacityStop {
    value: number;
    opacity: number;
}
export interface IWebgpuSceneMesh {
    id: string;
    topology: WebgpuMeshTopology;
    depthMode: WebgpuDepthMode;
    vertices: Float32Array;
}
export interface IWebgpuVolumeSlice {
    id: string;
    axis: 'x' | 'y' | 'z';
    position: number;
    depthMode: WebgpuDepthMode;
    visible: boolean;
    opacity?: number;
    plateColor?: readonly [number, number, number, number];
}
export interface IWebgpuVolumeFrame {
    width: number;
    height: number;
    viewProjection: readonly number[];
    inverseViewProjection: readonly number[];
    modelMatrix: readonly number[];
    inverseModelMatrix: readonly number[];
    cameraPosition: readonly [number, number, number];
    clipMinimum: readonly [number, number, number];
    clipMaximum: readonly [number, number, number];
    renderMode: WebgpuVolumeRenderMode;
    opacity: number;
    densityScale: number;
    stepLength: number;
    volumeDimFactor: number;
}
export interface IWebgpuVolumeCamera {
    viewProjection: readonly number[];
    inverseViewProjection: readonly number[];
    cameraPosition: readonly [number, number, number];
}
export interface IWebgpuVolumeSceneUpdate {
    modelMatrix?: readonly number[];
    inverseModelMatrix?: readonly number[];
    clipMinimum?: readonly [number, number, number];
    clipMaximum?: readonly [number, number, number];
    renderMode?: WebgpuVolumeRenderMode;
    opacity?: number;
    densityScale?: number;
    stepLength?: number;
    volumeDimFactor?: number;
    colorMode?: WebgpuVolumeColorMode;
    geographicTransform?: import('../../geographicTypes').IWebgpuGeographicTransform | null;
}
export interface IWebgpuVolumeStatistics {
    logicalBrickCount: number;
    residentBrickCount: number;
    pendingBrickCount: number;
    atlasCapacity: number;
    gpuBytes: number;
    memoryLimitBytes: number;
    budgetLimited: boolean;
    frameTimeMilliseconds: number;
    submittedFrameCount: number;
    uploadedBrickCount: number;
    uploadBatchCount: number;
    maximumUploadBatchBytes: number;
    sliceUniformUpdateCount: number;
    sliceResourceRebuildCount: number;
    skippedSamples: number;
    skippedCells: number;
}
export interface IWebgpuFrameCapture {
    width: number;
    height: number;
    pixels: Uint8Array;
}
export interface IWebgpuVolumeRendererOptions {
    memoryTargetBytes?: number;
    memoryHardLimitBytes?: number;
    powerPreference?: GPUPowerPreference;
}
