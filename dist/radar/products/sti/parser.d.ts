import type { RadarBinaryReader } from '../../common/binaryReader';
import type { IRadarProductParseContext, IRadarProductParser } from '../../common/parserTypes';
import type { StiRadarProduct } from './types';
export declare class StiRadarParser implements IRadarProductParser<StiRadarProduct> {
    parse(reader: RadarBinaryReader, context: IRadarProductParseContext): StiRadarProduct;
    private parseParameters;
    private parseHeader;
    private ensureFixedBlocks;
    private parseMotion;
    private parsePositionBlocks;
    private parseStorm;
    private parseComponent;
    private parseAdaptation;
}
