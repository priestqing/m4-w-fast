import type { IVolumeBrickDescriptor, IVolumeBrickShape } from './brickLayout';
import type { IVolumeChunk, IVolumeMetadata } from './sourceTypes';
export declare const createPhysicalBrickValues: (metadata: IVolumeMetadata, shape: IVolumeBrickShape, descriptor: IVolumeBrickDescriptor, chunk: IVolumeChunk) => Float32Array;
