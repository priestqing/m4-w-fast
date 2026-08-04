import { RadarBinaryReader } from './binaryReader';
import type { RadarMetadata } from '../types';
export interface IParsedRadarHeader {
    metadata: RadarMetadata;
    productParametersOffset: number;
    dataOffset: number;
}
export declare const parseCommonRadarHeader: (reader: RadarBinaryReader) => IParsedRadarHeader;
