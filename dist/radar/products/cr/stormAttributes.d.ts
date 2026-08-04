import type { RadarBinaryReader } from '../../common/binaryReader';
import type { IRadarStormAttribute } from '../../types';
/** 解析 CR 栅格后的风暴单体附表。 */
export declare const parseCrStormAttributes: (reader: RadarBinaryReader) => IRadarStormAttribute[];
