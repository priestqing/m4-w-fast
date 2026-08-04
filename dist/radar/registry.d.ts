import type { RadarProductParserFactory } from './common/parserTypes';
/** 雷达产品解析器注册表，后续产品只需按 productType 注册。 */
export declare class RadarParserRegistry {
    private readonly factories;
    register(productType: number, factory: RadarProductParserFactory): this;
    create(productType: number): import("./common/parserTypes").IRadarProductParser<import("./types").RadarProduct>;
}
export declare const radarParserRegistry: RadarParserRegistry;
