import type { IVolumeSource } from '../volume-scene/sourceTypes';
import type { ICreateVolumeSectionOptions, IVolumeSection } from './volumeSectionTypes';
export declare const createVolumeSection: (source: IVolumeSource, options: ICreateVolumeSectionOptions) => Promise<IVolumeSection>;
