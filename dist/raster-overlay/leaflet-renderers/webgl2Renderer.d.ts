import type { RasterColorRange, RasterColorStop, RasterGrid, RasterRendererCreateOptions, RasterColorMode, RasterSampleMode } from '../types';
import type { RasterLeafletCrs, RasterLeafletRenderer, RasterLeafletRenderViewport } from './renderer';
/**
 * WebGL2 栅格渲染器，负责纹理上传、Shader 编译和视口绘制
 */
export declare class Webgl2Renderer implements RasterLeafletRenderer {
    private gl;
    private grid;
    private program;
    private texture;
    private colorRange;
    private colorStops;
    /**
     * 上传到shader的色标最小值数组
     * @private
     */
    private colorStopMins;
    /**
     * 上传到shader的色标最大值数组
     * @private
     */
    private colorStopMaxs;
    /**
     * 上传到shader的色标颜色数组 (rgba)
     * @private
     */
    private colorStopColors;
    private maxColorStops;
    private opacity;
    private colorMode;
    private sampleMode;
    private canvas;
    private contextLost;
    private lastViewport;
    private crs;
    constructor(options: RasterRendererCreateOptions);
    /**
     * 初始化 WebGL2 渲染器
     * @param canvas 渲染目标画布
     * @param crs 坐标参考系统
     */
    initialize(canvas: HTMLCanvasElement, crs: RasterLeafletCrs | null): void;
    /**
     * 根据当前 Leaflet 视口绘制栅格图层
     * @param viewport 当前视口信息
     */
    render(viewport: RasterLeafletRenderViewport): void;
    /**
     * 更新栅格数据并重新上传纹理
     * @param grid 栅格数据
     */
    setGrid(grid: RasterGrid): void;
    /**
     * 更新色标配置，并在容量变化时重建 Shader 程序
     * @param colorStops 归一化后的色标配置
     */
    setColorStops(colorStops: RasterColorStop[]): void;
    setColorRange(colorRange: RasterColorRange): void;
    setOpacity(opacity: number): void;
    setColorMode(colorMode: RasterColorMode): void;
    setSampleMode(sampleMode: RasterSampleMode): void;
    destroy(): void;
    /**
     * 创建 WebGL2 程序、缓冲区和 uniform 引用
     * @param gl WebGL2 渲染上下文
     * @param crs 坐标参考系统
     * @private
     */
    private createProgram;
    /**
     * 创建并编译指定类型的 Shader
     * @param gl WebGL2 上下文
     * @param type  Shader 类型
     * @param source Shader 源码
     * @private
     */
    private createShader;
    /**
     * 上传栅格数据为WebGL2单通道浮点纹理
     * @private
     */
    private uploadGridTexture;
    /**
     * 获取shader uniform 位置
     * @param gl
     * @param program
     * @param name
     * @private
     */
    private getUniform;
    /**
     * 色标容量改变后重新创建shader
     * @private
     */
    private recreateProgram;
    /**
     * 阻止浏览器永久释放WebGL上下文
     * @param event
     */
    private readonly handleContextLost;
    /**
     * 上下文恢复后重新创建GPU资源并绘制最后一个视口
     */
    private readonly handleContextRestored;
    /**
     * Update color stop arrays used by shader uploads.
     * 将色标配置写入可直接上传到Shader的数组
     * @private
     */
    private updateColorStopArrays;
}
