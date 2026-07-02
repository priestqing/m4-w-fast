import type { RasterColorMode, RasterColorStop, RasterSampleMode } from '../types';
export interface RasterColorStopArrays {
    mins: Float32Array;
    maxs: Float32Array;
    colors: Float32Array;
}
/**
 * Maximum finite float value that can be safely represented in shaders.
 * shader 中可安全表示的最大有限浮点值
 */
export declare const shaderFloatMax = 3.402823466e+38;
/**
 * Convert JavaScript infinity values to finite values usable by shaders.
 * 将 JavaScript 中的无限值转换为 shader 可用的有限值
 * @param value
 */
export declare const toShaderFloat: (value: number) => number;
/**
 * Calculate the WebGL2 color stop array capacity.
 * The capacity grows by powers of two to reduce shader recompilation.
 *
 * 计算 WebGL2 色标数组容量
 * 容量按 2 的幂扩展, 用来减少色标更新时重新编译 shader 的次数
 * @param colorStopCount
 */
export declare const calculateMaxColorStops: (colorStopCount: number) => number;
/**
 * Convert color stops into flat arrays that shaders can read directly.
 * 将色标配置转换为 shader 可以直接读取的扁平数组
 */
export declare const createColorStopArrays: (colorStops: RasterColorStop[], capacity?: number) => RasterColorStopArrays;
/**
 * Clamp opacity to the range [0, 1].
 * 将透明度限制在 shader 期望的 0-1 范围内
 * @param opacity
 */
export declare const clampOpacity: (opacity: number) => number;
/**
 * Convert the color mode to the numeric flag used by shaders.
 * 将颜色模式转换为 shader 使用的数值标记
 */
export declare const colorModeToShaderValue: (colorMode: RasterColorMode) => 1 | 0;
/**
 * Convert the sample mode to the numeric flag used by shaders.
 * 将采样模式转换为 shader 使用的数值标记
 */
export declare const sampleModeToShaderValue: (sampleMode: RasterSampleMode) => 1 | 0;
/**
 * Insert the coordinate shader source into the common fragment shader.
 * 将坐标 shader 源码插入公共 fragment shader
 */
export declare const createFragmentSource: (fragmentSource: string, coordinateSource: string) => string;
