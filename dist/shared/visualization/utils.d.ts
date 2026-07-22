import type { ColorMode, ColorRange, ColorStop, ColorStopArrays, GridData, PreparedColorStops, SampleMode } from './types';
/**
 * Maximum finite float value safely representable by GPU shaders.
 * GPU shader 可以安全表示的最大有限浮点值。
 */
export declare const shaderFloatMax = 3.402823466e+38;
/**
 * Convert JavaScript infinity values into finite shader values.
 * 将 JavaScript 无限值转换为 shader 可使用的有限值。
 */
export declare const toShaderFloat: (value: number) => number;
/**
 * Validate and copy color stops, then create their renderer arrays.
 * 校验并复制色标，然后创建对应的渲染器数组。
 */
export declare const prepareColorStops: (colorStops: readonly ColorStop[]) => PreparedColorStops;
/**
 * Convert color stops into flat arrays consumed by renderers.
 * 将色标配置转换为渲染器使用的扁平数组。
 */
export declare const createColorStopArrays: (colorStops: readonly ColorStop[], capacity?: number) => ColorStopArrays;
/**
 * Validate a visible color range.
 * 校验可见颜色范围。
 */
export declare const validateColorRange: (colorRange: ColorRange) => void;
/**
 * Clamp opacity to the range expected by renderers.
 * 将透明度限制在渲染器期望的范围内。
 */
export declare const clampOpacity: (opacity: number) => number;
/**
 * Convert the color mode into the numeric flag used by shaders.
 * 将颜色模式转换为 shader 使用的数值标记。
 */
export declare const colorModeToShaderValue: (colorMode: ColorMode) => number;
/**
 * Convert the sample mode into the numeric flag used by shaders.
 * 将采样模式转换为 shader 使用的数值标记。
 */
export declare const sampleModeToShaderValue: (sampleMode: SampleMode) => number;
/**
 * Validate grid dimensions, bounds, values, and scale.
 * 校验网格的尺寸、范围、数据和缩放值。
 */
export declare const validateGridData: (grid: GridData) => void;
