import type { ClipMode } from '../../shared/coverage';
import type { PolygonMesh, PolygonMeshInput } from '../../shared/polygon';
import type { ColorMode, ColorRange, ColorStop, ColorStopArrays, GridData, SampleMode } from '../../shared/visualization';
import type { RoadMesh } from '../types';
/**
 * Owns backend-independent Road rendering state.
 * 管理与渲染后端无关的道路渲染状态。
 */
export declare class RoadRenderState {
    private currentMesh;
    private currentGrid;
    private currentColorStops;
    private currentColorStopArrays;
    private currentColorRange;
    private currentOpacity;
    private currentLineWidth;
    private currentColorMode;
    private currentSampleMode;
    private currentMeshRevision;
    private currentGridRevision;
    private currentColorStopsRevision;
    private currentClipMode;
    private currentClipMesh;
    private currentClipRevision;
    /**
     * Return whether all resources required for drawing are available.
     * 返回绘制所需的资源是否已经全部存在。
     */
    get ready(): boolean;
    /**
     * Return the current Road mesh.
     * 返回当前道路 mesh。
     */
    get mesh(): RoadMesh | null;
    /**
     * Return the current grid data.
     * 返回当前网格数据。
     */
    get grid(): GridData | null;
    /**
     * Return prepared color stops.
     * 返回准备完成的色标。
     */
    get colorStops(): readonly ColorStop[];
    /**
     * Return flattened color stop arrays.
     * 返回扁平色标数组。
     */
    get colorStopArrays(): ColorStopArrays | null;
    /**
     * Return the visible value range.
     * 返回当前可见数据范围。
     */
    get colorRange(): ColorRange | null;
    /**
     * Return the current opacity.
     * 返回当前透明度。
     */
    get opacity(): number;
    /**
     * Return the Road width in CSS pixels.
     * 返回以 CSS 像素为单位的道路线宽。
     */
    get lineWidth(): number;
    /**
     * Return the current color mapping mode.
     * 返回当前颜色映射模式。
     */
    get colorMode(): ColorMode;
    /**
     * Return the current grid sampling mode.
     * 返回当前网格采样模式。
     */
    get sampleMode(): SampleMode;
    /**
     * Return the Road mesh revision.
     * 返回道路 mesh 修订版本。
     */
    get meshRevision(): number;
    /**
     * Return the grid revision.
     * 返回网格修订版本。
     */
    get gridRevision(): number;
    /**
     * Return the color stop revision.
     * 返回色标修订版本。
     */
    get colorStopsRevision(): number;
    get clipMode(): ClipMode;
    get clipMesh(): PolygonMesh | null;
    get clipRevision(): number;
    /**
     * Replace the Road mesh.
     * 替换道路 mesh。
     */
    setMesh(mesh: RoadMesh): void;
    /**
     * Replace the sampled grid data.
     * 替换用于采样的网格数据。
     */
    setGrid(grid: GridData): void;
    /**
     * Replace color stops.
     * 替换色标。
     */
    setColorStops(colorStops: readonly ColorStop[]): void;
    /**
     * Set the visible value range.
     * 设置当前可见数据范围。
     */
    setColorRange(colorRange: ColorRange | null): void;
    /**
     * Set renderer opacity.
     * 设置渲染器透明度。
     */
    setOpacity(opacity: number): void;
    /**
     * Set Road width in CSS pixels.
     * 设置以 CSS 像素为单位的道路线宽。
     */
    setLineWidth(lineWidth: number): void;
    /**
     * Set the color mapping mode.
     * 设置颜色映射模式。
     */
    setColorMode(colorMode: ColorMode): void;
    /**
     * Set the grid sampling mode.
     * 设置网格采样模式。
     */
    setSampleMode(sampleMode: SampleMode): void;
    /** 设置或清除道路裁剪边界。 */
    setClip(data: PolygonMeshInput | null, mode?: ClipMode): void;
    /** 切换道路裁剪模式。 */
    setClipMode(mode: ClipMode): void;
}
