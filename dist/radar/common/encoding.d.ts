import type { RadarEncodedValues } from '../types';
import type { RadarBinaryReader } from './binaryReader';
export declare const validateDataEncoding: (dataType: number, scale: number, binLength: number) => void;
export declare const createEncodedValues: (binLength: number, length: number) => RadarEncodedValues;
export declare const readEncodedCode: (reader: RadarBinaryReader, binLength: number) => number;
export declare const decodeEncodedValue: (encoded: number, scale: number, offset: number, noData: number) => number;
export declare const normalizeAngle: (angle: number) => number;
