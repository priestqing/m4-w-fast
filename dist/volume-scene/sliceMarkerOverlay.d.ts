import type { SliceInteractionController } from './sliceInteractionController';
import type { SliceState } from './sliceState';
import type { IVolumeSliceProjectionFrame, VolumeSliceAxis } from './sliceTypes';
type ProjectionFrameProvider = () => IVolumeSliceProjectionFrame | null;
export interface IVolumeSliceMarkerOverlayOptions {
    interactionController?: SliceInteractionController;
    formatPosition?: (axis: VolumeSliceAxis, position: number) => string;
}
export declare class SliceMarkerOverlay {
    private readonly container;
    private readonly state;
    private readonly getFrame;
    private readonly interactionController;
    private readonly formatPosition;
    private readonly markers;
    private readonly previousContainerPosition;
    private readonly unsubscribe;
    private previewMarker;
    constructor(container: HTMLElement, state: SliceState, getFrame: ProjectionFrameProvider, options?: IVolumeSliceMarkerOverlayOptions);
    update(): void;
    destroy(): void;
    private syncPreview;
    private syncLockedMarkers;
    private createLockedMarker;
    private positionMarker;
    private hideAllMarkers;
}
export {};
