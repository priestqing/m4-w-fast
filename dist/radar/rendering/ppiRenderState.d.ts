import { RasterRenderState } from '../../raster-overlay/rendering/rasterRenderState';
import type { PpiMesh } from '../ppiMesh';
export declare class PpiRenderState extends RasterRenderState {
    mesh: PpiMesh | null;
    meshRevision: number;
    get ready(): boolean;
    setMesh(mesh: PpiMesh): void;
}
