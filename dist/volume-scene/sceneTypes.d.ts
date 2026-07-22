import type { IVolumeCameraState } from './cameraTypes';
import type { IVolumeRouteProfile, VolumeDepthMode } from './profileTypes';
import type { IVolumeSource } from './sourceTypes';
import type { IVolumeOpacityStop, VolumeColorMode, VolumeColorStopInput } from './transferTypes';
import type { IVolumeLockedSlice, VolumeSliceAxis, VolumeSliceTool } from './sliceTypes';
import type { VolumeCoordinateSystem } from './geographicTypes';
export type VolumeSceneBackend = 'webgpu';
export type VolumeRenderMode = 'composite' | 'maximum';
export type VolumeQualityPreset = 'auto' | 'performance' | 'balanced' | 'quality';
export type VolumeSceneRenderMode = 'managed' | 'external';
export type VolumeNavigationMode = 'orbit' | 'pan';
export type VolumeInteractionKind = 'camera' | 'slice';
export type VolumeEffectiveQuality = Exclude<VolumeQualityPreset, 'auto'>;
export interface IVolumeClipBox {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
    minZ: number;
    maxZ: number;
}
export interface IVolumeChunkOptions {
    width?: number;
    height?: number;
    depth?: number;
    halo?: number;
    memoryTargetBytes?: number;
    memoryLimitBytes?: number;
}
export interface IVolumeSliceInteractionOptions {
    volumeDimFactor?: number;
    depthMode?: VolumeDepthMode;
    plateColor?: readonly [number, number, number, number];
    maxLockedSlices?: number;
    hitRadius?: number;
    onSlicesChange?: (slices: readonly IVolumeLockedSlice[]) => void;
    onSliceError?: (error: Error) => void;
}
export interface IVolumeSceneOptions {
    canvas: HTMLCanvasElement;
    source: IVolumeSource;
    colorStops: readonly VolumeColorStopInput[];
    opacityStops: readonly IVolumeOpacityStop[];
    colorMode?: VolumeColorMode;
    overlayContainer?: HTMLElement;
    interactionElement?: HTMLElement;
    camera?: IVolumeCameraState;
    modelMatrix?: readonly number[];
    clipBox?: IVolumeClipBox;
    timeIndex?: number;
    mode?: VolumeRenderMode;
    quality?: VolumeQualityPreset;
    navigationMode?: VolumeNavigationMode;
    pixelRatioCap?: number;
    renderScale?: number;
    interactionRenderScale?: number;
    interactionStepScale?: number;
    renderMode?: VolumeSceneRenderMode;
    opacity?: number;
    densityScale?: number;
    verticalScale?: number;
    coordinateSystem?: VolumeCoordinateSystem;
    showDebugGeometry?: boolean;
    chunk?: IVolumeChunkOptions;
    sliceInteraction?: IVolumeSliceInteractionOptions;
}
export interface IVolumeSceneUpdate {
    camera?: IVolumeCameraState;
    modelMatrix?: readonly number[];
    clipBox?: IVolumeClipBox | null;
    mode?: VolumeRenderMode;
    quality?: VolumeQualityPreset;
    navigationMode?: VolumeNavigationMode;
    pixelRatioCap?: number;
    renderScale?: number;
    interactionRenderScale?: number;
    interactionStepScale?: number;
    opacity?: number;
    densityScale?: number;
    verticalScale?: number;
    colorStops?: readonly VolumeColorStopInput[];
    opacityStops?: readonly IVolumeOpacityStop[];
    colorMode?: VolumeColorMode;
}
export interface IVolumeSceneStatistics {
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
    brickScheduleCount: number;
    brickSortCount: number;
    actualFrameIntervalMilliseconds: number;
    estimatedFps: number;
    effectiveQuality: VolumeEffectiveQuality;
    effectiveRenderScale: number;
    interactionKind: VolumeInteractionKind | 'idle' | 'mixed';
    skippedSamples: number;
    skippedCells: number;
}
export interface IVolumeFrameCapture {
    width: number;
    height: number;
    pixels: Uint8Array;
}
export interface IVolumeScene {
    readonly backend: VolumeSceneBackend;
    readonly camera: IVolumeCameraState;
    readonly lockedSlices: readonly IVolumeLockedSlice[];
    readonly statistics: IVolumeSceneStatistics;
    update(options: IVolumeSceneUpdate): void;
    setCamera(camera: IVolumeCameraState): void;
    setTimeIndex(timeIndex: number): void;
    setSource(source: IVolumeSource): void;
    setRouteProfiles(profiles: readonly IVolumeRouteProfile[]): void;
    setSliceTool(axis: VolumeSliceTool): void;
    beginInteraction(kind: VolumeInteractionKind): void;
    endInteraction(kind: VolumeInteractionKind): void;
    lockSlice(axis: VolumeSliceAxis, position: number): IVolumeLockedSlice;
    updateSlice(id: string, position: number): void;
    removeSlice(id: string): void;
    clearLockedSlices(): void;
    resize(): void;
    render(): void;
    captureFrame(): Promise<IVolumeFrameCapture>;
    destroy(): void;
}
