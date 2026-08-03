import { RadarParserRegistry } from './registry';
import type { RadarBufferSource, RadarParseOptions, RadarProduct, RadarSource } from './types';
/** 同步解析已加载的雷达二进制数据。 */
export declare const parseRadar: (source: RadarBufferSource, options?: RadarParseOptions, registry?: RadarParserRegistry) => RadarProduct;
/** 从 URL、Blob 或内存数据加载并解析雷达产品。 */
export declare const loadRadar: (source: RadarSource, options?: RadarParseOptions, registry?: RadarParserRegistry) => Promise<RadarProduct>;
