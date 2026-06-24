import * as L from 'leaflet';
import type { RasterColorRange, RasterColorStopInput, RasterGrid, RasterLeafletLayerCreateOptions, RasterParams, RasterRenderMode, RasterSource } from './types';
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
     * 更新渲染模式
     * @param renderMode
     */
    setRenderMode: (renderMode: RasterRenderMode) => void;
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
}
/**
 * leaflet 栅格图层工厂函数
 * @param options
 */
export declare const createRasterLeafletLayer: (options: RasterLeafletLayerCreateOptions) => RasterLeafletLayer;
