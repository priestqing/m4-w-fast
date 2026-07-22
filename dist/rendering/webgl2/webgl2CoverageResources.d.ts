import type { ClipMode } from '../../shared/coverage';
import type { MapCrs, MapRenderViewport } from '../../shared/map/types';
import type { PolygonMesh } from '../../shared/polygon';
/** 管理 WebGL2 边界网格、模板覆盖和遮罩纹理。 */
export declare class Webgl2CoverageResources {
    private readonly gl;
    private readonly program;
    private readonly viewportLocation;
    private readonly mapMetaLocation;
    private readonly vertexBuffer;
    private maskTexture;
    private maskFramebuffer;
    private vertexCount;
    private width;
    private height;
    constructor(gl: WebGL2RenderingContext, crs: MapCrs, createProgram: (vertex: string, fragment: string) => WebGLProgram);
    get mask(): WebGLTexture | null;
    updateMesh(mesh: PolygonMesh | null): void;
    resize(width: number, height: number): void;
    encode(mode: ClipMode, viewport: MapRenderViewport): void;
    enableStencil(): void;
    drawDirect(): boolean;
    destroy(): void;
    private encodeStencil;
    private encodeMask;
    private drawCoverage;
    private bindGeometry;
    private getLocation;
}
