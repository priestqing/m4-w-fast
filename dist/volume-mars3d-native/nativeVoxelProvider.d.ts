import type { IVolumeSource } from '../volume-scene/sourceTypes';
import type { ICesiumNativeRuntime } from './nativeTypes';
import type { INativeVoxelData } from './voxelData';
/** 按 Cesium 八叉树瓦片坐标从完整规则网格生成固定尺寸体素块。 */
export declare const createNativeVoxelTile: (data: INativeVoxelData, tileLevel: number, tileX: number, tileY: number, tileZ: number) => Uint8Array;
export declare const createNativeVoxelProvider: (cesium: ICesiumNativeRuntime, source: IVolumeSource, data: INativeVoxelData, verticalScale: number) => Record<string, unknown>;
