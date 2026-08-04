import type { RadarBinaryReader } from '../../common/binaryReader';
import type { IRadarProductParseContext, IRadarProductParser } from '../../common/parserTypes';
import type { CrRadarProduct } from '../../types';
/** CR 产品解析器，组合标准栅格、投影适配和风暴属性。 */
export declare class CrRadarParser implements IRadarProductParser<CrRadarProduct> {
    parse(reader: RadarBinaryReader, context: IRadarProductParseContext): CrRadarProduct;
}
