import type { RadarBinaryReader } from '../../common/binaryReader';
import type { IRadarProductParseContext, IRadarProductParser } from '../../common/parserTypes';
import type { VilRadarProduct } from '../../types';
export declare class VilRadarParser implements IRadarProductParser<VilRadarProduct> {
    parse(reader: RadarBinaryReader, context: IRadarProductParseContext): VilRadarProduct;
}
