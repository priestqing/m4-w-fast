import type { RadarBinaryReader } from '../../common/binaryReader';
import type { IRadarProductParseContext, IRadarProductParser } from '../../common/parserTypes';
import type { OhpRadarProduct } from './types';
export declare class OhpRadarParser implements IRadarProductParser<OhpRadarProduct> {
    parse(reader: RadarBinaryReader, context: IRadarProductParseContext): OhpRadarProduct;
}
