import type { PolygonMeshInput } from '../polygon';
/** 裁剪渲染模式。 */
export type ClipMode = 'none' | 'direct' | 'stencil' | 'mask';
/** 可复用的多边形覆盖配置。 */
export interface CoverageOptions {
    data: PolygonMeshInput;
    mode?: ClipMode;
}
