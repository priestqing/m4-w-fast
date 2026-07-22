/**
 * Coordinate reference systems supported by map renderers.
 * 地图渲染器支持的坐标系。
 */
export type MapCrs = 'epsg3857' | 'epsg4326' | 'epsg3395' | 'simple';
/**
 * Current map viewport used by renderers.
 * 渲染器使用的当前地图视口。
 */
export interface MapRenderViewport {
    canvasWidth: number;
    canvasHeight: number;
    cssWidth: number;
    cssHeight: number;
    devicePixelRatio: number;
    zoom: number;
    worldTopLeftX: number;
    worldTopLeftY: number;
}
