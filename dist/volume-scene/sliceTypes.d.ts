import type { VolumeDepthMode } from './profileTypes';
import type { IVolumeAxis } from './sourceTypes';
export type VolumeSliceAxis = 'x' | 'y' | 'z';
export type VolumeSliceTool = VolumeSliceAxis | 'auto' | null;
export type VolumeSliceAxisMode = VolumeSliceTool;
export interface IVolumeSliceAxes {
    xAxis: IVolumeAxis;
    yAxis: IVolumeAxis;
    zAxis: IVolumeAxis;
}
export interface IVolumeDomainBounds {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
    minZ: number;
    maxZ: number;
}
export interface IVolumeSlicePreview {
    axis: VolumeSliceAxis;
    position: number;
}
export interface IVolumeLockedSlice extends IVolumeSlicePreview {
    id: string;
    depthMode: VolumeDepthMode;
    visible: boolean;
}
export interface IVolumeSliceStateSnapshot {
    preview: IVolumeSlicePreview | null;
    lockedSlices: readonly IVolumeLockedSlice[];
    toolMode: VolumeSliceAxisMode;
    volumeDimFactor: number;
}
export type VolumeSliceStateListener = (snapshot: IVolumeSliceStateSnapshot) => void;
export interface IVolumeSliceStateOptions {
    volumeDimFactor?: number;
    depthMode?: VolumeDepthMode;
    maxLockedSlices?: number;
    onLimitReached?: (limit: number) => void;
}
export interface IVolumeSliceProjectionFrame {
    viewProjectionMatrix: Float32Array;
    modelMatrix: Float32Array;
    viewportWidth: number;
    viewportHeight: number;
}
export interface IVolumeSliceControllerOptions {
    hitTolerancePixels?: number;
    axisHysteresisPixels?: number;
    onInteractionStart?: () => void;
    onInteractionEnd?: () => void;
}
