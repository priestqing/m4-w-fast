import type { IVolumeSource } from '../volume-scene/sourceTypes';
export declare const RADAR_GRID_VOLUME_ZIP_FORMAT: "radar-grid-volume-zip";
export type VolumeDataFormat = typeof RADAR_GRID_VOLUME_ZIP_FORMAT;
export type VolumeDataInput = string | URL | ArrayBuffer | Uint8Array;
export interface IVolumeDataLoadLimits {
    maxArchiveBytes?: number;
    maxEntryBytes?: number;
    maxEntryCount?: number;
    maxHeaderBytes?: number;
    maxCompressionRatio?: number;
}
export interface ILoadRadarGridVolumeZipOptions extends IVolumeDataLoadLimits {
    format: typeof RADAR_GRID_VOLUME_ZIP_FORMAT;
    signal?: AbortSignal;
    sourceName?: string;
    productTime?: string;
    revision?: number;
}
export type ILoadVolumeSourceOptions = ILoadRadarGridVolumeZipOptions;
export interface IRadarGridVolumeFileMetadata {
    xStart: number;
    yStart: number;
    xDelta: number;
    yDelta: number;
    xSize: number;
    ySize: number;
    xEnd: number;
    yEnd: number;
    times: number;
    levels: number;
    timestamp: number;
    levelList: readonly number[];
    timeList: readonly string[];
    dataType: string;
    undef: number;
    dataScale: number;
    dataOffset: number;
    units: number;
    littleEndian: boolean;
    unsigned: boolean;
    properties: Readonly<Record<string, unknown>>;
}
export interface IRadarGridVolumeMetadata extends IRadarGridVolumeFileMetadata {
    longitudeDelta: number;
    latitudeDelta: number;
    sourceName?: string;
    productTime?: string;
}
export interface ILoadedRadarGridVolume {
    format: typeof RADAR_GRID_VOLUME_ZIP_FORMAT;
    source: IVolumeSource;
    metadata: IRadarGridVolumeMetadata;
}
export type LoadedVolumeSource = ILoadedRadarGridVolume;
