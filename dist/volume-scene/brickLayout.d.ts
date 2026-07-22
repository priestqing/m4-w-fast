import type { IVolumeChunkRange, IVolumeMetadata } from './sourceTypes';
export declare const defaultVolumeBrickWidth = 256;
export declare const defaultVolumeBrickHeight = 8;
export declare const defaultVolumeBrickDepth = 256;
export declare const defaultVolumeBrickHalo = 1;
export declare const defaultVolumeMemoryLimitBytes: number;
export interface IVolumeBrickShape {
    width: number;
    height: number;
    depth: number;
    halo: number;
}
export interface IVolumeBrickCoordinate {
    x: number;
    y: number;
    z: number;
}
export interface IVolumeBrickLayout {
    shape: IVolumeBrickShape;
    countX: number;
    countY: number;
    countZ: number;
    brickCount: number;
}
export interface IVolumeBrickDescriptor {
    key: string;
    coordinate: IVolumeBrickCoordinate;
    coreRange: IVolumeChunkRange;
    readRange: IVolumeChunkRange;
    physicalWidth: number;
    physicalHeight: number;
    physicalDepth: number;
    byteLength: number;
}
export interface IVolumeAtlasLayoutOptions {
    metadata: IVolumeMetadata;
    brickShape?: Partial<IVolumeBrickShape>;
    maxTextureDimension3D: number;
    memoryLimitBytes?: number;
    reservedBytes?: number;
}
export interface IVolumeAtlasLayout {
    brickLayout: IVolumeBrickLayout;
    slotCountX: number;
    slotCountY: number;
    slotCountZ: number;
    capacity: number;
    atlasWidth: number;
    atlasHeight: number;
    atlasDepth: number;
    bytesPerBrick: number;
    atlasBytes: number;
    pageTableBytes: number;
    reservedBytes: number;
    estimatedBytes: number;
    memoryLimitBytes: number;
}
/** Create the normalized brick shape. */
/** 创建规范化分块形状。 */
export declare const resolveVolumeBrickShape: (shape?: Partial<IVolumeBrickShape>) => IVolumeBrickShape;
/** Create a fixed logical brick layout for one source. */
/** 为一个数据源创建固定逻辑分块布局。 */
export declare const createVolumeBrickLayout: (metadata: IVolumeMetadata, inputShape?: Partial<IVolumeBrickShape>) => IVolumeBrickLayout;
/** Return a stable key for one logical brick coordinate. */
/** 返回一个逻辑分块坐标的稳定 key。 */
export declare const createVolumeBrickKey: (coordinate: IVolumeBrickCoordinate) => string;
/** Describe core and clamped halo ranges for one brick. */
/** 描述一个分块的核心范围和裁剪后 halo 范围。 */
export declare const createVolumeBrickDescriptor: (metadata: IVolumeMetadata, layout: IVolumeBrickLayout, coordinate: IVolumeBrickCoordinate) => IVolumeBrickDescriptor;
/** Enumerate all fixed logical bricks in Z, Y, X order. */
/** 按 Z、Y、X 顺序枚举全部固定逻辑分块。 */
export declare const createVolumeBrickDescriptors: (metadata: IVolumeMetadata, layout: IVolumeBrickLayout) => IVolumeBrickDescriptor[];
/** Solve an atlas layout under device and hard memory limits. */
/** 在设备限制和硬内存上限内求解 atlas 布局。 */
export declare const calculateVolumeAtlasLayout: (options: IVolumeAtlasLayoutOptions) => IVolumeAtlasLayout;
