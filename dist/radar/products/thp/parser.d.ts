import type { RadarBinaryReader } from '../../common/binaryReader';
import type { IRadarProductParseContext, IRadarProductParser } from '../../common/parserTypes';
import type { ThpRadarProduct } from './types';
export declare class ThpRadarParser implements IRadarProductParser<ThpRadarProduct> {
    parse(reader: RadarBinaryReader, context: IRadarProductParseContext): ThpRadarProduct;
    private parseParameters;
    private parseBias;
}
