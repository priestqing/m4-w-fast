import type { ICesiumNativeRuntime } from './nativeTypes';
interface ICesiumMaterialSupportLike {
    readonly vertexFormat: unknown;
}
interface ICesiumMaterialAppearanceConstructor {
    new (options?: Record<string, unknown>): unknown;
    readonly MaterialSupport: {
        readonly TEXTURED: ICesiumMaterialSupportLike;
    };
}
export interface INativeSliceCesiumRuntime extends ICesiumNativeRuntime {
    readonly WallGeometry: {
        fromConstantHeights(options: Record<string, unknown>): unknown;
    };
    readonly MaterialAppearance: ICesiumMaterialAppearanceConstructor;
}
export {};
