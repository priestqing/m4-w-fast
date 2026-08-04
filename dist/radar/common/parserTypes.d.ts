import type { RadarMetadata, RadarProduct } from '../types';
import type { RadarBinaryReader } from './binaryReader';
export interface IRadarProductParseContext {
    metadata: RadarMetadata;
    dataOffset: number;
    elevation: number;
    noData: number;
    productParametersOffset?: number;
}
export interface IRadarProductParser<TProduct extends RadarProduct = RadarProduct> {
    parse(reader: RadarBinaryReader, context: IRadarProductParseContext): TProduct;
}
/** 兼容现有公开类型名称。 */
export type RadarProductParseContext = IRadarProductParseContext;
/** 兼容现有公开类型名称。 */
export type RadarProductParser<TProduct extends RadarProduct = RadarProduct> = IRadarProductParser<TProduct>;
export type RadarProductParserFactory = () => IRadarProductParser;
