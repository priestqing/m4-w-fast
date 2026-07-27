import type { ILoadRadarGridVolumeZipOptions, ILoadedRadarGridVolume } from './volumeDataTypes';
export declare const loadRadarGridVolumeZip: (archiveBytes: Uint8Array, options: ILoadRadarGridVolumeZipOptions) => Promise<ILoadedRadarGridVolume>;
