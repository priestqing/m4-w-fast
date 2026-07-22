import type { ClipMode } from '../../shared/coverage';
import type { PolygonMesh, PolygonMeshInput } from '../../shared/polygon';
import type { ColorMode, ColorRange, ColorStop, ColorStopArrays, GridData, SampleMode } from '../../shared/visualization';
/** 保存与 GPU 后端无关的栅格渲染状态。 */
export declare class RasterRenderState {
    grid: GridData | null;
    colorStops: readonly ColorStop[];
    colorStopArrays: ColorStopArrays | null;
    colorRange: ColorRange | null;
    opacity: number;
    colorMode: ColorMode;
    sampleMode: SampleMode;
    clipMode: ClipMode;
    clipMesh: PolygonMesh | null;
    gridRevision: number;
    colorStopsRevision: number;
    clipRevision: number;
    get ready(): boolean;
    setGrid(grid: GridData): void;
    setColorStops(colorStops: readonly ColorStop[]): void;
    setColorRange(colorRange: ColorRange | null): void;
    setOpacity(opacity: number): void;
    setColorMode(colorMode: ColorMode): void;
    setSampleMode(sampleMode: SampleMode): void;
    setClip(data: PolygonMeshInput | null, mode?: ClipMode): void;
    setClipMode(mode: ClipMode): void;
}
