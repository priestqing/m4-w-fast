import type { IVolumeSource } from '../volume-scene/sourceTypes';
import type { IRadarGridVolumeMetadata } from './volumeDataTypes';
export declare const createRadarGridVolumeSource: (dataBytes: Uint8Array, payloadOffset: number, metadata: IRadarGridVolumeMetadata, revision?: number) => IVolumeSource;
