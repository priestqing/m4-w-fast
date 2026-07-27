import type { VolumeDataInput } from './volumeDataTypes';
export declare const normalizeVolumeDataInput: (input: VolumeDataInput, maximumBytes: number, signal?: AbortSignal) => Promise<Uint8Array>;
