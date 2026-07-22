import type { IVolumeRouteProfile } from './profileTypes';
import type { IVolumeChunk, IVolumeChunkRange, IVolumeMetadata, IVolumeSource } from './sourceTypes';
import type { IVolumeOpacityStop } from './transferTypes';
/** Validate volume metadata without scanning source values. */
/** 校验体积元数据，不扫描源数值。 */
export declare const validateVolumeMetadata: (metadata: IVolumeMetadata) => void;
/** Validate one source time index. */
/** 校验一个源时间索引。 */
export declare const validateVolumeTimeIndex: (metadata: IVolumeMetadata, timeIndex: number) => void;
/** Validate a read range against source dimensions. */
/** 根据源尺寸校验读取范围。 */
export declare const validateVolumeChunkRange: (metadata: IVolumeMetadata, range: IVolumeChunkRange) => void;
/** Validate a returned chunk and its fixed X-fastest memory layout. */
/** 校验返回分块及其固定的 X 最快内存布局。 */
export declare const validateVolumeChunk: (metadata: IVolumeMetadata, chunk: IVolumeChunk, requestedRange?: IVolumeChunkRange, requestedTimeIndex?: number) => void;
/** Validate the public source contract. */
/** 校验公共数据源契约。 */
export declare const validateVolumeSource: (source: IVolumeSource) => void;
/** Validate ordered opacity transfer stops. */
/** 校验有序的透明度传递函数节点。 */
export declare const validateVolumeOpacityStops: (opacityStops: readonly IVolumeOpacityStop[]) => void;
/** Validate one full Float32 route profile. */
/** 校验一个完整 Float32 路线剖面。 */
export declare const validateVolumeRouteProfile: (profile: IVolumeRouteProfile) => void;
/** Validate profile ids and each profile payload. */
/** 校验剖面 id 唯一性及每个剖面数据。 */
export declare const validateVolumeRouteProfiles: (profiles: readonly IVolumeRouteProfile[]) => void;
