import type { RadarBinaryReader } from '../../common/binaryReader';
import type { IRadarProductParseContext } from '../../common/parserTypes';
/** 解析没有附加尾部数据的标准二维栅格产品。 */
export declare const parseGridProductBlock: (reader: RadarBinaryReader, context: IRadarProductParseContext, productName: string) => {
    projectedGrid: import("../..").IRadarProjectedGrid;
    grid: import("../../../shared/visualization").GridData;
    header: import("../..").RadarGridHeader;
    encodedValues: import("../..").RadarEncodedValues;
    values: Float32Array;
};
