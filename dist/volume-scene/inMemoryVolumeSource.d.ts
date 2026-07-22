import type { IInMemoryVolumeData, IVolumeSource } from './sourceTypes';
/** Create an IVolumeSource over a complete x-fastest Float32 array. 使用完整 X 最快 Float32 数组创建体积数据源。 */
export declare const createInMemoryVolumeSource: (data: IInMemoryVolumeData) => IVolumeSource;
