import type { ILoadVolumeSourceOptions, LoadedVolumeSource } from './volumeDataTypes';
export interface IVolumeDataParser {
    load(bytes: Uint8Array, options: ILoadVolumeSourceOptions): Promise<LoadedVolumeSource>;
}
export declare const getVolumeDataParser: (format: string) => IVolumeDataParser | undefined;
