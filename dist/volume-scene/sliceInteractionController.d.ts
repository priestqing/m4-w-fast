import type { IVolumeSliceControllerOptions, IVolumeSliceProjectionFrame } from './sliceTypes';
import type { SliceState } from './sliceState';
type ProjectionFrameProvider = () => IVolumeSliceProjectionFrame | null;
export declare class SliceInteractionController {
    private readonly element;
    private readonly state;
    private readonly getFrame;
    private readonly hitTolerance;
    private readonly axisHysteresis;
    private readonly onInteractionStart;
    private readonly onInteractionEnd;
    private activePointer;
    private previousAxis;
    private initialized;
    constructor(element: HTMLElement, state: SliceState, getFrame: ProjectionFrameProvider, options?: IVolumeSliceControllerOptions);
    initialize(): void;
    beginLockedSliceDrag(id: string, event: PointerEvent): void;
    destroy(): void;
    private findAxisHit;
    private applyHit;
    private readonly handlePointerDown;
    private readonly handlePointerMove;
    private readonly handleWindowPointerMove;
    private readonly handlePointerUp;
    private readonly handlePointerLeave;
}
export {};
