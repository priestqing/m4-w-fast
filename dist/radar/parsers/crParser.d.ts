import { RadarBinaryReader } from '../binaryReader';
import type { RadarProductParseContext, RadarProductParser } from '../parserTypes';
import type { CrRadarProduct } from '../types';
/** CR/CRX 规则栅格产品解析器。 */
export declare class CrRadarParser implements RadarProductParser<CrRadarProduct> {
    parse(reader: RadarBinaryReader, context: RadarProductParseContext): CrRadarProduct;
    private parseHeader;
    private validateHeader;
}
