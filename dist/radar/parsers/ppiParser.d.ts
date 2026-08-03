import { RadarBinaryReader } from '../binaryReader';
import type { RadarProductParseContext, RadarProductParser } from '../parserTypes';
import type { PpiRadarProduct } from '../types';
/** PPI 径向产品解析器，只负责保留原始极坐标数据。 */
export declare class PpiRadarParser implements RadarProductParser<PpiRadarProduct> {
    parse(reader: RadarBinaryReader, context: RadarProductParseContext): PpiRadarProduct;
    private parseHeader;
    private validateHeader;
}
