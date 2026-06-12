import type { FeatureCollection, Polygon, MultiPolygon } from 'geojson';
import type { IReadFileM4, ReadConfig, ParamsConfig, JSONData, CanvasOptions, Point } from './types';
import * as L from 'leaflet';
export declare class readFileM4 implements IReadFileM4 {
    filePath: string;
    nx: number;
    ny: number;
    minLng: number;
    minLat: number;
    gjLng: number;
    gjLat: number;
    values: number[];
    maxVal: number;
    minVal: number;
    private _maskCacheKey;
    private _maskCache;
    /**
     * filePath 可选
     * - filePath -> async start(config?: ReadConfig)
     * - !filePath -> setParams(params: ParamsConfig, config?: ReadConfig)
     * @param filePath
     */
    constructor(filePath?: string);
    start(config?: ReadConfig): Promise<void>;
    /**
     * 自定义数据, 使用他不需要接文件, 也不需要执行start(). 但是需要提供详细的数据
     * @param params
     * @param config
     */
    setParams(params: ParamsConfig, config?: ReadConfig): void;
    /**
     * 获取等值带
     * @param breaks
     */
    getIsoBandsFast(breaks: number[]): FeatureCollection;
    /**
     * 获取等值带 Canvas
     * @param breaks
     * @param colors
     * @param options : { width?: number, height?: number, pixelRatio?: number }
     */
    getIsoBandsCanvas(breaks: number[], colors: (number[] | string)[], options?: CanvasOptions): HTMLCanvasElement | null;
    getIsoBandsCanvasByMap(breaks: number[], colors: (number[] | string)[], map: L.Map, options?: CanvasOptions): HTMLCanvasElement | null;
    /**
     * 提取分级对应的颜色
     * @param z 当前分级
     * @param level 分级数组
     * @param color 分级颜色数组
     */
    getColorFast(z: number | string, level: (number | string)[], color: (number[] | string)[]): string;
    /**
     * 裁剪数据
     * @param iosBands 等值带数据
     * @param json 裁剪范围数据
     * @param intersectWorkerUrl 裁剪 Worker 脚本 URL
     * @param useCpuCount 可选，使用的 CPU 核心数
     */
    clipDataByJson(iosBands: FeatureCollection, json: FeatureCollection, intersectWorkerUrl: string, useCpuCount?: number): Promise<import("@turf/helpers").FeatureCollection<Polygon | MultiPolygon, import("geojson").GeoJsonProperties>>;
    /**
     * 使用 Worker 多线程获取等值带
     * @param breaks 等值带分级
     * @param bandsWorkerUrl 等值带计算 Worker 脚本 URL
     * @param useCpuCount 可选，使用的 CPU 核心数
     * @deprecated 即将弃用, 请使用 `getIsoBandsFast`
     */
    getIsoBandsFastByWorker(breaks: number[], bandsWorkerUrl: string, useCpuCount?: number): Promise<FeatureCollection>;
    /**
     * 清理等值带缓存 (缓存只在 getIsoBandsByLayerBreak 方法中使用)
     * @deprecated 准备弃用, 分层使用canvas来做
     */
    clearMaskCache(): void;
    /**
     * 获取等值带 (支持按层获取或全部层合并获取)
     *  - 单层因为数据丢失可能不准确
     * @param breaks
     * @param layerLower
     * @deprecated 准备弃用, 分层使用canvas来做
     */
    getIsoBandsByLayerBreak(breaks?: number[], layerLower?: number): FeatureCollection;
    /**
     * 获取 JSON 数据数组
     * @return JSONData[]
     */
    getJsonData(): JSONData[];
    /**
     * 获取挖孔等值面 他可以设置透明度
     * @param breaks
     */
    getIsoBandsFastByMask(breaks: number[]): FeatureCollection;
    buildGridLineCanvas(options?: CanvasOptions): HTMLCanvasElement | null;
    buildGridCanvas(breaks: number[], colors: (number[] | string)[], options?: CanvasOptions): HTMLCanvasElement | null;
    buildGridCanvasClipByJson(breaks: number[], colors: (number[] | string)[], json: FeatureCollection, options?: CanvasOptions): HTMLCanvasElement | null;
    updateGridCanvas(points: Point[], updateVal: number): Point[];
    /**
     * 获取最大最小值
     * @private
     */
    private getMinMax;
    /**
     * 按面积排序
     * @param fc
     * @private
     * @deprecated 准备弃用, 分层使用canvas来做, 绘图方式也变了, 不需要面积排序了
     */
    private sortFeaturesByArea;
    /**
     * 数组分块
     * @param arr
     * @param parts
     */
    private chunkArray;
    /**
     * 获取分级
     * @private
     */
    private getBreaks;
    /**
     * 获取所有等值线
     * @param breaks
     */
    private getAllGeo;
    private createCanvas;
}
export default readFileM4;
