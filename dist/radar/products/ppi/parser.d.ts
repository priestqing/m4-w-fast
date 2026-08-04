import type { RadarBinaryReader } from '../../common/binaryReader';
import type { IRadarProductParseContext, IRadarProductParser } from '../../common/parserTypes';
import type { PpiRadarProduct } from '../../types';
/** PPI 产品解析器，产品参数与标准径向数据分别解析。 */
export declare class PpiRadarParser implements IRadarProductParser<PpiRadarProduct> {
    parse(reader: RadarBinaryReader, context: IRadarProductParseContext): PpiRadarProduct;
    private parseParameters;
}
