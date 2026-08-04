import type { RadarEncodedValues, RadarGridHeader } from '../../types';
export interface IRadarRasterBlock {
    header: RadarGridHeader;
    encodedValues: RadarEncodedValues;
    values: Float32Array;
}
