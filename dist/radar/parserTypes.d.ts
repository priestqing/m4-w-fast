import type { RadarBinaryReader } from './binaryReader';
import type { RadarMetadata, RadarProduct } from './types';
export interface RadarProductParseContext {
    metadata: RadarMetadata;
    dataOffset: number;
    elevation: number;
    noData: number;
}
export interface RadarProductParser<TProduct extends RadarProduct = RadarProduct> {
    parse(reader: RadarBinaryReader, context: RadarProductParseContext): TProduct;
}
export type RadarProductParserFactory = () => RadarProductParser;
