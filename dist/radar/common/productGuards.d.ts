import type { RadarGridProduct, RadarProduct, RadarRadialProductBase } from '../types';
export declare const isRadarRadialProduct: (product: RadarProduct) => product is Extract<RadarProduct, RadarRadialProductBase>;
export declare const isRadarGridProduct: (product: RadarProduct) => product is RadarGridProduct;
