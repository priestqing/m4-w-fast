/**
 * Insert the shared visualization params contract into a WebGPU shader.
 * 将公共可视化参数契约插入 WebGPU shader。
 */
export declare const createWebgpuVisualizationParamsShaderSource: (shaderSource: string) => string;
/**
 * Insert shared visualization params, grid sampling, and color mapping into a WebGPU fragment shader.
 * 将公共可视化参数、网格采样和颜色映射插入 WebGPU fragment shader。
 */
export declare const createWebgpuVisualizationFragmentShaderSource: (shaderSource: string) => string;
