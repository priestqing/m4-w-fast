export interface ICesiumRectangleLike {
    west: number;
    south: number;
    east: number;
    north: number;
}
export interface ICesiumTextureLike {
    destroy(): void;
    isDestroyed(): boolean;
}
export interface ICesiumMaterialLike {
    uniforms: Record<string, unknown>;
    update(context: ICesiumContextLike): void;
    destroy(): void;
    isDestroyed(): boolean;
}
export interface ICesiumPrimitiveLike {
    show: boolean;
    destroy(): void;
    isDestroyed(): boolean;
}
export interface ICesiumPrimitiveCollectionLike {
    add<T>(primitive: T): T;
    remove(primitive: unknown): boolean;
}
export interface ICesiumContextLike {
    readonly _gl: WebGLRenderingContext | WebGL2RenderingContext;
}
export interface ICesiumSceneLike {
    readonly canvas: HTMLCanvasElement;
    readonly primitives: ICesiumPrimitiveCollectionLike;
    readonly context?: ICesiumContextLike;
    readonly _context?: ICesiumContextLike;
    requestRender(): void;
}
export interface IMars3dMapLike {
    readonly scene: ICesiumSceneLike;
}
export interface IMars3dBaseLayerLike {
    readonly _map?: IMars3dMapLike;
    readonly options: Record<string, unknown>;
    show: boolean;
    destroy(noDel?: boolean): void;
}
interface ICesiumTextureConstructorOptions {
    context: ICesiumContextLike;
    source: {
        arrayBufferView: Float32Array<ArrayBufferLike>;
    };
    width: number;
    height: number;
    pixelFormat: number;
    pixelDatatype: number;
    sampler: unknown;
    flipY: boolean;
}
interface ICesiumMaterialConstructor {
    new (options: unknown): ICesiumMaterialLike;
    readonly DefaultImageId: string;
}
export interface IMars3dCesiumRuntime {
    readonly Math: {
        toRadians(value: number): number;
    };
    readonly Rectangle: {
        fromDegrees(west: number, south: number, east: number, north: number): ICesiumRectangleLike;
    };
    readonly RectangleGeometry: new (options: unknown) => unknown;
    readonly GeometryInstance: new (options: unknown) => unknown;
    readonly Material: ICesiumMaterialConstructor;
    readonly EllipsoidSurfaceAppearance: {
        new (options: unknown): unknown;
        readonly VERTEX_FORMAT: unknown;
    };
    readonly Primitive: new (options: unknown) => ICesiumPrimitiveLike;
    readonly Texture?: new (options: ICesiumTextureConstructorOptions) => ICesiumTextureLike;
    readonly Sampler?: new (options: unknown) => unknown;
    readonly PixelFormat?: {
        readonly RED: number;
        readonly RGBA: number;
    };
    readonly PixelDatatype?: {
        readonly FLOAT: number;
    };
    readonly TextureMinificationFilter?: {
        readonly NEAREST: number;
    };
    readonly TextureMagnificationFilter?: {
        readonly NEAREST: number;
    };
    readonly TextureWrap?: {
        readonly CLAMP_TO_EDGE: number;
    };
}
export {};
