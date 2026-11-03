import type { RadarBinaryReader } from '../../common/binaryReader';
import type { IRadarProductParseContext } from '../../common/parserTypes';
import type { IOhpAdaptationData } from '../ohp/types';
import type { IPrecipitationRadarParameters, IQpeBiasData } from './types';
export declare const parsePrecipitationParameters: (reader: RadarBinaryReader, context: IRadarProductParseContext) => IPrecipitationRadarParameters;
export declare const parsePrecipitationRadials: (reader: RadarBinaryReader, context: IRadarProductParseContext, productName: string) => import("../../formats/radial/types").IRadarRadialBlock;
export declare const parseQpeBiasData: (reader: RadarBinaryReader, productName: string) => IQpeBiasData;
export declare const parseOhpAdaptation: (reader: RadarBinaryReader) => IOhpAdaptationData;
