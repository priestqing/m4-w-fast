import type { RadarBinaryReader } from '../binaryReader';
export declare const validateDataEncoding: (scale: number, binLength: number) => void;
export declare const readEncodedValue: (reader: RadarBinaryReader, binLength: number, scale: number, offset: number, noData: number) => number;
export declare const normalizeAngle: (angle: number) => number;
