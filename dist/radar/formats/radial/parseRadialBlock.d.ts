import type { RadarBinaryReader } from '../../common/binaryReader';
import type { IRadarRadialBlock } from './types';
/** 解析标准径向头和径向数据，不附加具体产品语义。 */
export declare const parseRadialBlock: (reader: RadarBinaryReader, noData: number, productName: string) => IRadarRadialBlock;
