import type { IVolumeRouteProfile, IVolumeRouteProfileMesh } from './profileTypes';
import type { IVolumeSliceAxes } from './sliceTypes';
/**
 * Build a right-handed X-east/Y-up/Z-south route-profile wall.
 * 构建 X 向东、Y 向上、Z 向南的右手路线剖面墙。
 */
export declare const buildVolumeRouteProfileMesh: (profile: IVolumeRouteProfile, axes: IVolumeSliceAxes) => IVolumeRouteProfileMesh;
