import type { FeatureCollection } from 'geojson';
export interface IReadFileM4 {
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
    /**
     * 开始解析文件
     * @param config
     */
    start: (config?: ReadConfig) => Promise<void>;
    /**
     * 自定义数据, 使用他不需要接文件, 也不需要执行start(). 但是需要提供详细的数据
     * @param params
     * @param config
     */
    setParams: (params: ParamsConfig, config?: ReadConfig) => void;
    /**
     * 获取等值带
     * @param breaks
     */
    getIsoBandsFast: (breaks: number[]) => FeatureCollection;
    /**
     * 获取等值带 Canvas
     * @param breaks
     * @param colors
     * @param options : { width?: number, height?: number, pixelRatio?: number }
     */
    getIsoBandsCanvas: (breaks: number[], colors: (number[] | string)[], options?: CanvasOptions) => HTMLCanvasElement | null;
    /**
     * 提取分级对应的颜色
     * @param z 当前分级
     * @param level 分级数组
     * @param color 分级颜色数组
     */
    getColorFast: (z: number | string, level: (number | string)[], color: (number[] | string)[]) => string;
    /**
     * 裁剪数据
     * @param iosBands 等值带数据
     * @param json 裁剪范围数据
     * @param intersectWorkerUrl 裁剪 Worker 脚本 URL
     * @param useCpuCount 可选，使用的 CPU 核心数
     */
    clipDataByJson: (iosBands: FeatureCollection, json: FeatureCollection, intersectWorkerUrl: string, useCpuCount?: number) => Promise<FeatureCollection>;
    /**
     * 使用 Worker 多线程获取等值带
     * @param breaks 等值带分级
     * @param bandsWorkerUrl 等值带计算 Worker 脚本 URL
     * @param useCpuCount 可选，使用的 CPU 核心数
     * @deprecated 即将弃用, 请使用 `getIsoBandsFast`
     */
    getIsoBandsFastByWorker: (breaks: number[], bandsWorkerUrl: string, useCpuCount?: number) => Promise<FeatureCollection>;
    /**
     * 清理等值带缓存 (缓存只在 getIsoBandsByLayerBreak 方法中使用)
     * @deprecated 准备弃用, 分层使用canvas来做
     */
    clearMaskCache: () => void;
    /**
     * 获取等值带 (支持按层获取或全部层合并获取)
     *  - 单层因为数据丢失可能不准确
     * @param breaks
     * @param layerLower
     * @deprecated 准备弃用, 分层使用canvas来做
     */
    getIsoBandsByLayerBreak: (breaks?: number[], layerLower?: number) => FeatureCollection;
    /**
     * 获取 JSON 数据数组
     * @return JSONData[]
     */
    getJsonData: () => JSONData[];
    /**
     * 构建一个网格网格 Canvas, 用于在融合模式下展示网格线, 网格的依据来源于数据的经纬度和分辨率
     */
    buildGridLineCanvas: (options?: CanvasOptions) => HTMLCanvasElement | null;
    /**
     *  构建一个网格色块 Canvas 有填色
     * @param breaks
     * @param colors
     * @param options
     */
    buildGridCanvas(breaks: number[], colors: (number[] | string)[], options?: CanvasOptions): HTMLCanvasElement | null;
    /**
     * 构建一个裁剪后的网格色块 Canvas 有填色
     * @param breaks
     * @param colors
     * @param json
     * @param clipWorkerUrl
     * @param options
     */
    buildGridCanvasClipByJson(breaks: number[], colors: (number[] | string)[], json: FeatureCollection, options?: CanvasOptions): HTMLCanvasElement | null;
}
/**
 * 读取文件对数据的处理
 */
export interface ReadConfig {
    /**
     * 是否将温度从开尔文转换为摄氏度(如果数据确实是温度的话)
     */
    convertTemKtoC?: boolean;
    /**
     * 附加偏移量 (如果需要对数值进行调整)
     */
    plusOffset?: number;
}
/**
 * 设置数据参数
 */
export interface ParamsConfig {
    /**
     * 数据值数组
     */
    values: number[];
    /**
     * 栅格列数
     */
    nx: number;
    /**
     * 栅格行数
     */
    ny: number;
    /**
     * 最小经度
     */
    minLng: number;
    /**
     * 最小纬度
     */
    minLat: number;
    /**
     * 经度分辨率
     */
    gjLng: number;
    /**
     * 纬度分辨率
     */
    gjLat: number;
}
export interface Point {
    lat: number;
    lng: number;
}
export interface JSONData extends Point {
    val: number;
}
export interface CanvasOptions {
    width?: number;
    height?: number;
    pixelRatio?: number;
    strokeStyle?: string;
    lineWidth?: number;
}
