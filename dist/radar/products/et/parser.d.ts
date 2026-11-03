import type { RadarBinaryReader } from '../../common/binaryReader';
import type { IRadarProductParseContext, IRadarProductParser } from '../../common/parserTypes';
import type { EtRadarProduct } from '../../types';
export declare class EtRadarParser implements IRadarProductParser<EtRadarProduct> {
    parse(reader: RadarBinaryReader, context: IRadarProductParseContext): EtRadarProduct;
    private parseParameters;
}
