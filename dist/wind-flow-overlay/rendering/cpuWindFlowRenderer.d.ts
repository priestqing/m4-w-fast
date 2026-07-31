import type { MapCrs } from '../../shared/map';
import type { IWindFlowRenderFrame, IWindFlowRenderer } from './types';
export declare class CpuWindFlowRenderer implements IWindFlowRenderer {
    readonly backend: "cpu";
    private canvas;
    private context;
    initialize(canvas: HTMLCanvasElement, _crs: MapCrs): void;
    render(frame: IWindFlowRenderFrame): void;
    clear(): void;
    destroy(): void;
    private applyClipPath;
    private getContext;
}
