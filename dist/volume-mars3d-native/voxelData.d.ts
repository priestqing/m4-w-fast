import type { IVolumeChunk, IVolumeSource } from '../volume-scene/sourceTypes';
export interface INativeVoxelData {
    values: Uint8Array;
    dimensions: readonly [number, number, number];
    minimumValue: number;
    maximumValue: number;
}
export declare const normalizeNativeVoxelValues: (chunk: IVolumeChunk, source: IVolumeSource) => INativeVoxelData;
export declare const loadNativeVoxelData: (source: IVolumeSource, timeIndex: number, signal?: AbortSignal) => Promise<INativeVoxelData>;
