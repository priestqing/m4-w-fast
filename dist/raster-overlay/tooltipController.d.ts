import * as L from 'leaflet';
import type { RasterTooltipOptions } from './leafletTypes';
import type { RasterQueryResult } from './rasterTypes';
/** Leaflet 栅格与雷达图层共用的 Tooltip 控制器。 */
export declare class RasterTooltipController {
    private readonly map;
    private readonly options;
    private readonly element;
    private frame;
    private pendingResult;
    private lastContent;
    private lastTransform;
    constructor(map: L.Map, options: RasterTooltipOptions);
    update(result: RasterQueryResult): void;
    hide(): void;
    destroy(): void;
    private readonly handlePointerMove;
    private readonly handlePointerLeave;
    private readonly flush;
    private cancelUpdate;
}
export declare const createRasterTooltipController: (map: L.Map, options?: RasterTooltipOptions) => RasterTooltipController | null;
