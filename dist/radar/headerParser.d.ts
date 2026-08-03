import { RadarBinaryReader } from './binaryReader';
import type { RadarMetadata } from './types';
export interface ParsedRadarHeader {
    metadata: RadarMetadata;
    dataOffset: number;
    elevation: number;
}
export declare const parseRadarHeader: (reader: RadarBinaryReader) => ParsedRadarHeader;
