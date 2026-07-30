import * as L from 'leaflet';
import type { RasterColorRange, RasterColorStopInput, RasterGrid, RasterLeafletLayerCreateOptions, RasterParams, RasterSource, RasterColorMode, RasterSampleMode, RasterQueryPoint, RasterQueryResult } from './types';
import type { ClipMode } from '../shared/coverage';
export interface RasterLeafletLayer extends L.Layer {
    /**
     * 使用直接参数更新栅格数据
     */
    setParams: (params: RasterParams) => Promise<void>;
    /**
     * 使用TIF、MICAPS4或参数数据源更新栅格数据
     */
    setSource: (source: RasterSource) => Promise<void>;
    /**
     * 重绘当前视口
     */
    redraw: () => void;
    /**
     * 获取当前图层的canvas, 导出图片可能会用到这个功能
     */
    getCanvas: () => HTMLCanvasElement | null;
    /**
     * 更新显示值范围
     * @param range
     */
    setColorRange: (range: RasterColorRange) => void;
    /**
     * 更新颜色映射模式
     * @param colorMode
     */
    setColorMode: (colorMode: RasterColorMode) => void;
    /**
     * 更新栅格空间采样模式
     * @param sampleMode
     */
    setSampleMode: (sampleMode: RasterSampleMode) => void;
    /**
     * 更新图层透明度
     * @param opacity
     */
    setOpacity: (opacity: number) => void;
    /**
     * 更新栅格数据并重新上传GPU纹理
     */
    setGrid: (grid: RasterGrid) => Promise<void>;
    /**
     * 更新外部字符串色标配置
     */
    setColorStops: (colorStops: RasterColorStopInput[]) => void;
    /** 控制裁剪区域外是否仍执行查询和提示。 */
    setQueryOutsideClip: (enabled: boolean) => void;
    setClipMode: (mode: ClipMode) => void;
    /**
     * Query the raster value at a normalized x/y coordinate.
     * 按统一的 x/y 坐标查询栅格值
     */
    queryValueAt: (point: RasterQueryPoint) => RasterQueryResult;
    /**
     * Query raster values at normalized x/y coordinates.
     * 按统一的 x/y 坐标批量查询栅格值
     */
    queryValuesAt: (points: readonly RasterQueryPoint[]) => RasterQueryResult[];
    /**
     * Query the raster value at a Leaflet latLng.
     * 按 Leaflet 的经纬度查询栅格值
     */
    queryValueAtLatLng: (latLng: L.LatLngExpression) => RasterQueryResult;
    /**
     * Query raster values at Leaflet latLngs.
     * 按 Leaflet 经纬度批量查询栅格值
     */
    queryValuesAtLatLng: (latLngs: readonly L.LatLngExpression[]) => RasterQueryResult[];
}
/**
 * leaflet 栅格图层工厂函数
 * @param options
 */
export declare const createRasterLeafletLayer: (options: RasterLeafletLayerCreateOptions) => RasterLeafletLayer;
