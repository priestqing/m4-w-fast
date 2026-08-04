import type { RadarBinaryReader } from '../../common/binaryReader';
import type { IRadarRasterBlock } from './types';
/** 解析标准栅格头和栅格数据，不附加具体产品语义。 */
export declare const parseRasterBlock: (reader: RadarBinaryReader, noData: number, productName: string) => IRadarRasterBlock;
