import type { ILoadVolumeSourceOptions, LoadedVolumeSource, VolumeDataInput } from './volumeDataTypes';
export declare const loadVolumeSource: (input: VolumeDataInput, options: ILoadVolumeSourceOptions) => Promise<LoadedVolumeSource>;
