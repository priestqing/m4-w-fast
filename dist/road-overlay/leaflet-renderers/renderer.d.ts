import type { RasterColorMode, RasterColorRange, RasterGrid, RasterSampleMode, RasterColorStop } from '../../raster-overlay';
import type { RoadMesh } from '../types';
/**
 * Leaflet CRS used by road renderers.
 * 道路渲染器使用的 Leaflet 坐标系
 */
export type RoadLeafletCrs = 'epsg3857' | 'epsg4326' | 'epsg3395' | 'simple';
/**
 * Road renderer viewport from Leaflet layer.
 * Leaflet 图层传递给道路渲染器的当前视口
 */
export interface RoadLeafletRenderViewport {
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
 * Common road renderer interface.
 * 道路渲染器公共接口
 */
export interface RoadLeafletRenderer {
    /**
     * Initialize renderer resources.
     * 初始化渲染器资源
     */
    initialize: (canvas: HTMLCanvasElement, crs: RoadLeafletCrs | null) => void | Promise<void>;
    /**
     * Render current viewport.
     * 渲染当前视口
     */
    render: (viewport: RoadLeafletRenderViewport) => void | Promise<void>;
    /**
     * Set road mesh data.
     * 设置道路 mesh 数据
     */
    setMesh: (mesh: RoadMesh) => void | Promise<void>;
    /**
     * Set raster grid for road coloring.
     * 设置用于道路染色的栅格数据
     */
    setGrid: (grid: RasterGrid) => void | Promise<void>;
    /**
     * Set color stops.
     * 设置色标
     */
    setColorStops: (colorStops: RasterColorStop[]) => void;
    /**
     * Set visible value range.
     * 设置当前可见数据范围
     */
    setColorRange: (range: RasterColorRange) => void;
    /**
     * Set opacity.
     * 设置透明度
     */
    setOpacity: (opacity: number) => void;
    /**
     * Set line width in CSS pixels.
     * 设置道路线宽, 单位为 CSS 像素
     */
    setLineWidth: (lineWidth: number) => void;
    /**
     * Set color mode.
     * 设置颜色映射模式
     */
    setColorMode: (colorMode: RasterColorMode) => void;
    /**
     * Set raster sample mode.
     * 设置栅格采样模式
     */
    setSampleMode: (sampleMode: RasterSampleMode) => void;
    /**
     * Destroy renderer resources.
     * 销毁渲染器资源
     */
    destroy: () => void;
}
