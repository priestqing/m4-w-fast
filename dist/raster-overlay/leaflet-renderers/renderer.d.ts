import type { RasterColorRange, RasterColorStop, RasterGrid, RasterRenderMode } from '../types';
/**
 * leaflet图层传递给渲染器的当前视口
 */
export interface RasterLeafletRenderViewport {
    canvasWidth: number;
    canvasHeight: number;
    cssWidth: number;
    cssHeight: number;
    devicePixelRatio: number;
    zoom: number;
    worldTopLeftX: number;
    worldTopLeftY: number;
}
/**
 * 所有渲染方案需要实现的接口
 */
export interface RasterLeafletRenderer {
    /**
     * 初始化上下文和基础绘制资源
     */
    initialize: (canvas: HTMLCanvasElement) => void | Promise<void>;
    /**
     * 渲染当前视口
     */
    render: (viewport: RasterLeafletRenderViewport) => void | Promise<void>;
    /**
     * 设置栅格数据, 在这里上传纹理
     */
    setGrid: (grid: RasterGrid) => void | Promise<void>;
    /**
     * 更新色标配置, 这里更新 uniform 数据
     */
    setColorStops: (colorStops: RasterColorStop[]) => void;
    /**
     * 更新当前显示数据范围
     */
    setColorRange: (range: RasterColorRange) => void;
    /**
     * 更新图层透明度
     */
    setOpacity: (opacity: number) => void;
    /**
     * 更新渲染模式
     */
    setRenderMode: (renderMode: RasterRenderMode) => void;
    /**
     * 销毁渲染器, 释放资源
     */
    destroy: () => void;
}
