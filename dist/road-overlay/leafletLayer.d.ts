import * as L from 'leaflet';
import { RasterColorMode, RasterSampleMode } from '../raster-overlay';
import type { RoadLayerCreateOptions } from './types';
/**
 * Road Leaflet layer.
 * 道路 Leaflet 图层
 */
export interface RoadLeafletLayer extends L.Layer {
    /**
     * Redraw road layer.
     * 重绘道路图层
     */
    redraw: () => void;
    setOpacity: (opacity: number) => void;
    setLineWidth: (lineWidth: number) => void;
    setColorMode: (colorMode: RasterColorMode) => void;
    setSampleMode: (sampleMode: RasterSampleMode) => void;
}
/**
 * Create road Leaflet layer.
 * 创建道路 Leaflet 图层
 * @param options
 */
export declare const createRoadLeafletLayer: (options: RoadLayerCreateOptions) => Promise<RoadLeafletLayer>;
