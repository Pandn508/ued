<style>
    .example{
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        padding:20px;
        p {
          margin: 0 !important;
        }
    }
    .el-button {
        margin:10px 5px
    }

    details > summary:first-of-type {
        font-size: 10px;
        padding: 8px 0;
        cursor: pointer;
        color: #1989fa;
    }
</style>

# Color 颜色

## 基础用法

<div class="example">
    <div grid grid-cols-3 gap-20>
      <div h-384 font-size-12 v-for="(obj, key) in colors" :key="key">
        <div v-for="item in obj" :class="item.class" :key="item.name">
          <p flex justify-between m-b-0>{{ item.name }}<span>{{ item.hex }}</span></p>
        </div>
      </div>
    </div>
</div>

<script>
export default {
  data() {
    return {
      colors: {
        brandColors: [
          { name: 'Brand1', hex: '#E8F2FF', class: 'h-48 bg-brand-1' },
          { name: 'Brand2', hex: '#C0D9FF', class: 'h-48 bg-brand-2' },
          { name: 'Brand3', hex: '#98CEFF', class: 'h-48 bg-brand-3' },
          { name: 'Brand4', hex: '#6E9EFD', class: 'h-48 bg-brand-4' },
          { name: 'Brand5', hex: '#3B71EC', class: 'h-48 bg-brand-5' },
          { name: 'Brand6', hex: '#134BEA', class: 'h-48 bg-brand-6' },
          { name: 'Brand7', hex: '#0639C3', class: 'h-48 bg-brand-7' },
          { name: 'Brand8', hex: '#2038B0', class: 'h-48 bg-brand-8' }
        ],
        errorColors: [
          { name: 'Error1', hex: '#FFE8E8', class: 'h-48 bg-error-1' },
          { name: 'Error2', hex: '#FFCEC6', class: 'h-48 bg-error-2' },
          { name: 'Error3', hex: '#FFADA4', class: 'h-48 bg-error-3' },
          { name: 'Error4', hex: '#FF8A82', class: 'h-48 bg-error-4' },
          { name: 'Error5', hex: '#FF6560', class: 'h-48 bg-error-5' },
          { name: 'Error6', hex: '#F53C3C', class: 'h-48 bg-error-6' },
          { name: 'Error7', hex: '#C41424', class: 'h-48 bg-error-7' },
          { name: 'Error8', hex: '#A6141D', class: 'h-48 bg-error-8' }
        ],
        successColors: [
          { name: 'success1', hex: '#E8FFEF', class: 'h-48 bg-success-1' },
          { name: 'success2', hex: '#B7F1CB', class: 'h-48 bg-success-2' },
          { name: 'success3', hex: '#8AE3AC', class: 'h-48 bg-success-3' },
          { name: 'success4', hex: '#62D592', class: 'h-48 bg-success-4' },
          { name: 'success5', hex: '#3DC77B', class: 'h-48 bg-success-5' },
          { name: 'success6', hex: '#1DB969', class: 'h-48 bg-success-6' },
          { name: 'success7', hex: '#139E5B', class: 'h-48 bg-success-7' },
          { name: 'success8', hex: '#0A834D', class: 'h-48 bg-success-8' }
        ],
        warningMColors: [
          { name: 'warningM1', hex: '#FFF5E8', class: 'h-48 bg-warningM-1' },
          { name: 'warningM2', hex: '#FFE2C2', class: 'h-48 bg-warningM-2' },
          { name: 'warningM3', hex: '#FFCD9C', class: 'h-48 bg-warningM-3' },
          { name: 'warningM4', hex: '#FFB675', class: 'h-48 bg-warningM-4' },
          { name: 'warningM5', hex: '#FF9B4F', class: 'h-48 bg-warningM-5' },
          { name: 'warningM6', hex: '#FF7F29', class: 'h-48 bg-warningM-6' },
          { name: 'warningM7', hex: '#D25D18', class: 'h-48 bg-warningM-7' },
          { name: 'warningM8', hex: '#A6400C', class: 'h-48 bg-warningM-8' }
        ],
        warningLColors: [
          { name: 'warningL1', hex: '#FFFBE0', class: 'h-48 bg-warningL-1' },
          { name: 'warningL2', hex: '#FFF2BA', class: 'h-48 bg-warningL-2' },
          { name: 'warningL3', hex: '#FFE68D', class: 'h-48 bg-warningL-3' },
          { name: 'warningL4', hex: '#FFD65F', class: 'h-48 bg-warningL-4' },
          { name: 'warningL5', hex: '#FFC532', class: 'h-48 bg-warningL-5' },
          { name: 'warningL6', hex: '#FFB005', class: 'h-48 bg-warningL-6' },
          { name: 'warningL7', hex: '#D28A01', class: 'h-48 bg-warningL-7' },
          { name: 'warningL8', hex: '#A66702', class: 'h-48 bg-warningL-8' }
        ],
        alarmColors: [
          { name: 'alarm1', hex: '#F6E3E0', class: 'h-48 bg-alarm-1' },
          { name: 'alarm2', hex: '#EDC6C1', class: 'h-48 bg-alarm-2' },
          { name: 'alarm3', hex: '#DCA39D', class: 'h-48 bg-alarm-3' },
          { name: 'alarm4', hex: '#CA817D', class: 'h-48 bg-alarm-4' },
          { name: 'alarm5', hex: '#B26161', class: 'h-48 bg-alarm-5' },
          { name: 'alarm6', hex: '#A74748', class: 'h-48 bg-alarm-6' },
          { name: 'alarm7', hex: '#902E33', class: 'h-48 bg-alarm-7' },
          { name: 'alarm8', hex: '#7A1A22', class: 'h-48 bg-alarm-8' }
        ],
      }
    }
  }
}
</script>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div grid grid-cols-3 gap-20>
    <div h-384 font-size-12 v-for="(obj, key) in colors" :key="key">
      <div v-for="item in obj" :class="item.class" :key="item.name">
        <p flex justify-between m-b-0>{{ item.name }}<span>{{ item.hex }}</span></p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
data() {
    return {
      colors: {
        brandColors: [
          { name: 'Brand1', hex: '#E8F2FF', class: 'h-48 bg-brand-1' },
          { name: 'Brand2', hex: '#C0D9FF', class: 'h-48 bg-brand-2' },
          { name: 'Brand3', hex: '#98CEFF', class: 'h-48 bg-brand-3' },
          { name: 'Brand4', hex: '#6E9EFD', class: 'h-48 bg-brand-4' },
          { name: 'Brand5', hex: '#3B71EC', class: 'h-48 bg-brand-5' },
          { name: 'Brand6', hex: '#134BEA', class: 'h-48 bg-brand-6' },
          { name: 'Brand7', hex: '#0639C3', class: 'h-48 bg-brand-7' },
          { name: 'Brand8', hex: '#2038B0', class: 'h-48 bg-brand-8' }
        ],
        errorColors: [
          { name: 'Error1', hex: '#FFE8E8', class: 'h-48 bg-error-1' },
          { name: 'Error2', hex: '#FFCEC6', class: 'h-48 bg-error-2' },
          { name: 'Error3', hex: '#FFADA4', class: 'h-48 bg-error-3' },
          { name: 'Error4', hex: '#FF8A82', class: 'h-48 bg-error-4' },
          { name: 'Error5', hex: '#FF6560', class: 'h-48 bg-error-5' },
          { name: 'Error6', hex: '#F53C3C', class: 'h-48 bg-error-6' },
          { name: 'Error7', hex: '#C41424', class: 'h-48 bg-error-7' },
          { name: 'Error8', hex: '#A6141D', class: 'h-48 bg-error-8' }
        ],
        successColors: [
          { name: 'success1', hex: '#E8FFEF', class: 'h-48 bg-success-1' },
          { name: 'success2', hex: '#B7F1CB', class: 'h-48 bg-success-2' },
          { name: 'success3', hex: '#8AE3AC', class: 'h-48 bg-success-3' },
          { name: 'success4', hex: '#62D592', class: 'h-48 bg-success-4' },
          { name: 'success5', hex: '#3DC77B', class: 'h-48 bg-success-5' },
          { name: 'success6', hex: '#1DB969', class: 'h-48 bg-success-6' },
          { name: 'success7', hex: '#139E5B', class: 'h-48 bg-success-7' },
          { name: 'success8', hex: '#0A834D', class: 'h-48 bg-success-8' }
        ],
        warningMColors: [
          { name: 'warningM1', hex: '#FFF5E8', class: 'h-48 bg-warningM-1' },
          { name: 'warningM2', hex: '#FFE2C2', class: 'h-48 bg-warningM-2' },
          { name: 'warningM3', hex: '#FFCD9C', class: 'h-48 bg-warningM-3' },
          { name: 'warningM4', hex: '#FFB675', class: 'h-48 bg-warningM-4' },
          { name: 'warningM5', hex: '#FF9B4F', class: 'h-48 bg-warningM-5' },
          { name: 'warningM6', hex: '#FF7F29', class: 'h-48 bg-warningM-6' },
          { name: 'warningM7', hex: '#D25D18', class: 'h-48 bg-warningM-7' },
          { name: 'warningM8', hex: '#A6400C', class: 'h-48 bg-warningM-8' }
        ],
        warningLColors: [
          { name: 'warningL1', hex: '#FFFBE0', class: 'h-48 bg-warningL-1' },
          { name: 'warningL2', hex: '#FFF2BA', class: 'h-48 bg-warningL-2' },
          { name: 'warningL3', hex: '#FFE68D', class: 'h-48 bg-warningL-3' },
          { name: 'warningL4', hex: '#FFD65F', class: 'h-48 bg-warningL-4' },
          { name: 'warningL5', hex: '#FFC532', class: 'h-48 bg-warningL-5' },
          { name: 'warningL6', hex: '#FFB005', class: 'h-48 bg-warningL-6' },
          { name: 'warningL7', hex: '#D28A01', class: 'h-48 bg-warningL-7' },
          { name: 'warningL8', hex: '#A66702', class: 'h-48 bg-warningL-8' }
        ],
        alarmColors: [
          { name: 'alarm1', hex: '#F6E3E0', class: 'h-48 bg-alarm-1' },
          { name: 'alarm2', hex: '#EDC6C1', class: 'h-48 bg-alarm-2' },
          { name: 'alarm3', hex: '#DCA39D', class: 'h-48 bg-alarm-3' },
          { name: 'alarm4', hex: '#CA817D', class: 'h-48 bg-alarm-4' },
          { name: 'alarm5', hex: '#B26161', class: 'h-48 bg-alarm-5' },
          { name: 'alarm6', hex: '#A74748', class: 'h-48 bg-alarm-6' },
          { name: 'alarm7', hex: '#902E33', class: 'h-48 bg-alarm-7' },
          { name: 'alarm8', hex: '#7A1A22', class: 'h-48 bg-alarm-8' }
        ],
      }
    }
  }
</script>
```

</details>

## 字体颜色

<div class="example">
    <div>
        <p color-brand-1>brand-1</p>
        <p color-brand-2>brand-2</p>
        <p color-brand-5>brand-5</p>
        <p color-brand-8>brand-8</p>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
      <p color-brand-1>brand-1</p>
      <p color-brand-2>brand-2</p>
      <p color-brand-5>brand-5</p>
      <p color-brand-8>brand-8</p>
  </div>
</template>
```

</details>

## 不透明度

<div class="example">
    <div>
        <el-button opacity-20>默认按钮</el-button>
        <div h-20 w-80 bg-brand-8 bg-opacity-20></div>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
      <el-button opacity-20>默认按钮</el-button>
      <div h-20 w-80 bg-brand-8 bg-opacity-20></div>
  </div>
</template>
```

</details>

## 常用写法

  > token

  |               token                | mean  | desc |
  | :--------------------------------: | :---: | :--- |
  |           color-bg-page            | gray1 |      |
  |         color-bg-container         | white |      |
  |    color-bg-secondarycontainer     | gray1 |      |
  |         color-bg-component         | white |      |
  |    whcolor-component-borderite     | gray3 |      |
  |       color-component-border       | gray4 |      |
  | color-bg-secondarycontainer-hover  | gray2 |      |
  | color-bg-secondarycontainer-active | gray4 |      |
  |      color-bg-component-hover      | gray1 |      |
  |     color-bg-component-actice      | gray3 |      |
  |    color-bg-component-disabled     | gray2 |      |
