# m4文件绘图程序

### 更新说明
- v1.0.1: 修复了安装在vite环境打包时woker不正常工作的问题
- v1.0.2: 新增了一个可以单独获取某一个break的等值面方法 `getIsoBandsByLayerBreak(breaks: number[], break: number)`
  - **注意: 这个方法只用于取单等值面, 如果你需要获取所有等值面, 还是用 `getIsoBandsFast` 或者 `getIsoBandsFastByWorker` 方法**
- v1.0.3:
  - 添加了m4文件换行符的兼容
  - 增加了配置项在解析的时候将开氏度转换为摄氏度 (K -> ℃) (-272.15)
    - `read.start({ convertTemKtoC: true })`
- v1.0.4:
  - 提供了一个 `setParams(params: ParamsConfig, config?: ReadConfig)` 方法, 用于设置动态参数, 而非固定从文件获取数据
  - 拆解了 `start()` 方法中的 `json: JSONData[]` 拼装, 如果需要json数据, 可以调用 `getJsonData()` 方法获取
    - **注意: 这里获取到的数据,和`start(config? ReadConfig)`或`setParams(params: ParamsConfig, config?: ReadConfig)`中的config有关**
  - 扩展了 `ReadConfig` 配置项, 新增:
    - `plusOffset?: number` 数据偏移量, 默认无偏移
  - ~~`getIsoBandsFastByWorker()` 和 `clipDataByJson()` 方法新增了 `useCpuCount` 参数, 用于设置`CPU`使用数量, 默认为`navigator.hardwareConcurrency - 4`~~
- v1.0.5:
  - `.start()`方法提供了一个Promise.reject的错误回调, 用于捕获文件读取错误
  - 优化了在少数情况下, 绘图会出现有值但没有被绘制的问题
- v1.0.6:
  - 优化`getIsoBandsFast()`的绘图效果, 基于面积排序的结果存在一些未达预期的效果, 后续可能会撤销`getIsoBandsFastByWorker()`方法
- v1.0.7:
  - 修复`getIsoBandsFast()`的结果在裁剪时不匹配的问题
- v1.0.8:
  - 修复`getIsoBandsFast()`的返回类型兼容问题
  - 新增`getIsoBandsCanvas(breaks: number[], colors: (number[] | string)[], options?: CanvasOptions)` 用于输出一个 `HTMLCanvasElement` 方便做图片操作
  - 新增`getIsoBandsCanvasByMap(breaks: number[], colors: (number[] | string)[], map: L.Map, options?: CanvasOptions)` 用于输出一个基于 `Leaflet` 地图的 `HTMLCanvasElement`, 他的区别是实际坐标和地图坐标一致, 而不是标准的等值
  - ~~新增`buildGridCanvas(options?: CanvasOptions)` 用于输出一个基于数据栅格的 `HTMLCanvasElement`, 只是个格子~~
  - 新增`updateGridCanvas(points: Point[], updateVal: number)` 用于更新格点数据
  - 新增 `umd` 版本支持, 可以直接通过 `script` 标签引入使用, 全局注册变量命名为 `M4WFast`
- v1.0.9: 
  - 新增`buildGridLineCanvas(options?: CanvasOptions)` 用于输出一个基于数据栅格的 `HTMLCanvasElement`, 只是个格子
  - 新增`buildGridCanvas(breaks: number[], colors: (number[] | string)[], options?: CanvasOptions): HTMLCanvasElement | null` 用于输出一个基于数据栅格的 `HTMLCanvasElement`, 有填色
  - 新增`buildGridCanvasClipByJson(breaks: number[], colors: (number[] | string)[], json: FeatureCollection, options?: CanvasOptions): HTMLCanvasElement | null` 用于输出一个基于数据栅格的 `HTMLCanvasElement`, 有填色并裁剪
- v1.0.10
  - 修复了 `getIsoBandsCanvas` 方法在`lat格距`为负值时结果不正确的问题
- v1.0.11
  - 修复了在 `vite8` 环境下的验证问题, 导出更加严格
- v1.0.12
  - 新增 `getIsoBandsFastByMask(breaks: number[])` 方法, 和`getIsoBandsFast()`方法类似, 区别在于他做了数据挖孔, 可以给图层设置透明度而不影响图层的叠加效果
  
### 类型参照
> ReadConfig

| 参数 | 说明 | 类型        | 默认值   |
|----|----|-----------|-------|
|  convertTemKtoC  |  是否将温度从开氏度转换为摄氏度  | `boolean` | false |
|  plusOffset  |  数据偏移量  | `number`   | 无 |

---

> ParamsConfig

| 参数     | 说明 | 类型         | 默认值 |
|--------|----|------------|-----|
| values |  数据值数组  | `number[]` | []  |
| nx     |  栅格列数  | `number`     | 0   |
| ny     |  栅格行数  |   `number`         | 0   |
| minLng       |  最小经度  |    `number`        | 0   |
|  minLat      |  最小纬度  |     `number`       | 0   |
|  gjLng      |  经度分辨率  |    `number`        | 0   |
|  gjLat      |  纬度分辨率  |      `number`      | 0   |

---

> JSONData

| 参数     | 说明 | 类型         | 默认值 |
|---|---|---|---|
| lng     | 经度  | `number` | 0 |
| lat     | 纬度  | `number` | 0 |
| val   | 数据值 | `number` | 0 |

### 使用

1. 安装这个库
```shell
npm i m4-w-fast
```

2. 使用示例
```vue
<script lang="ts" setup>
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import ReadFileM4Fast from 'm4-w-fast'

const file = '' // 这里是你的m4文件路径

const init = async() => ｛
    const read = new ReadFileM4Fast(file)
    await read.start()
    // 此时, 你已经有解析过的数据了

    // 开始计算等值面
    const break = [] // 这里取决于你的色标分级
    const isoBands = read.getIsoBandsFast(break)

    // 叠加绘图 leaflet为例
    L.geoJson(isoBands, {
        style(feature) {
            if (!feature) return {}
            const z = feature.properties.z
            const rgba = read.getColorFast(z, level, color)
            return {
                weight: 3,
                opacity: 1,
                color: 'red',
                stroke: false,  // 如果你需要等值线开启他
                fillColor: rgba,
                fillOpacity: 0.5
            }
        }
    }).addTo(map)
｝
</script>
```

3. webWorker使用示例 (worker主要用来裁切文件)
   - **注意!`getIsoBandsFastByWorker()`即将弃用!, 请使用`getIsoBandsFast()`**
```vue
<script lang="ts" setup>
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import ReadFileM4Fast from 'm4-w-fast'
import { getIsoWorkerUrl, getIntersectWorkerUrl } from 'm4-w-fast/worker-urls'
import isoWorkerUrl from 'm4-w-fast/isoBands.worker.js?url'
import intersectWorkerUrl from 'm4-w-fast/intersect.worker.js?url'

import geojson from './620000.json'
import type { FeatureCollection } from 'geojson'

const file = '' // 这里是你的m4文件路径

const init = async() => ｛
    const read = new ReadFileM4Fast(file)
    await read.start()
    // 此时, 你已经有解析过的数据了

    // 开始计算等值面
    const break = [] // 这里取决于你的色标分级

    // 如果数据量实在是大, 可以考虑用他来计算, 但是实测 180w条数据下也没必要用他
    const isoBands = await read.getIsoBandsFastByWorker(break, isoWorkerUrl)

    // 根据边界裁切文件
    const intersection = await read.clipDataByJson(isoBands, geojson as FeatureCollection, intersectWorkerUrl)

    // 叠加绘图 leaflet为例
    L.geoJson(intersection, {
        style(feature) {
            if (!feature) return {}
            const z = feature.properties.z
            const rgba = read.getColorFast(z, level, color)
            return {
                weight: 3,
                opacity: 1,
                color: 'red',
                stroke: false,  // 如果你需要等值线开启他
                fillColor: rgba,
                fillOpacity: 0.5
            }
        }
    }).addTo(map)
｝
```

3. 获取某一个break的等值面示例
```typescript
clearMap()
const oneIsoBand = read.getIsoBandsByLayerBreak(lLevel.value, level)
const geo = L.geoJson(oneIsoBand, {
    style(feature) {
        if (!feature) return {}
        const z = feature.properties.z
        const rgba = read!.getColorFast(z, lLevel.value, lColor.value)
        return {
            opacity: 1,
            stroke: false,
            fillColor: rgba,
            fillOpacity: 1
        }
    }
}).addTo(map!)

```
4. 使用 `setParams` 方法动态设置参数示例
```typescript

const read = new ReadFileM4Fast()
read.setParams({
    values: dataValues,
    nx: dataNx,
    ny: dataNy,
    minLng: dataMinLng,
    minLat: dataMinLat,
    gjLng: dataGjLng,
    gjLat: dataGjLat
})

```

#### @author: wangrl
#### 维护随缘