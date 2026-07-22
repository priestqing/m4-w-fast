import type { RendererReleaseReason, Webgl2FrameContext } from '../../rendering';
import { BaseWebgl2Renderer } from '../../rendering';
import type { ClipMode } from '../../shared/coverage';
import type { PolygonMeshInput } from '../../shared/polygon';
import type { ColorMode, ColorRange, ColorStop, GridData, SampleMode } from '../../shared/visualization';
import type { RoadMesh } from '../types';
import type { RoadRenderer } from './renderer';
import { RoadRenderState } from './roadRenderState';
/** 通过公共 WebGL2 生命周期渲染网格染色道路和边界裁剪。 */
export declare class Webgl2RoadRenderer extends BaseWebgl2Renderer implements RoadRenderer<'webgl2'> {
    private readonly roadState;
    private program;
    private vertexBuffer;
    private visualizationResources;
    private coverageResources;
    private appliedMeshRevision;
    private appliedGridRevision;
    private appliedColorStopsRevision;
    private appliedClipRevision;
    constructor(roadState?: RoadRenderState);
    setMesh(mesh: RoadMesh): void;
    setGrid(grid: GridData): void;
    setColorStops(colorStops: readonly ColorStop[]): void;
    setColorRange(colorRange: ColorRange | null): void;
    setOpacity(opacity: number): void;
    setLineWidth(lineWidth: number): void;
    setColorMode(colorMode: ColorMode): void;
    setSampleMode(sampleMode: SampleMode): void;
    setClip(data: PolygonMeshInput | null, mode?: ClipMode): void;
    setClipMode(mode: ClipMode): void;
    protected createFeatureResources(): void;
    protected releaseFeatureResources(_reason: RendererReleaseReason): void;
    protected prepareFrame(frame: Webgl2FrameContext): void;
    protected encodePrePasses(frame: Webgl2FrameContext): void;
    protected encodeMainPass(frame: Webgl2FrameContext): void;
    private syncResources;
    private bindRoadGeometry;
}
