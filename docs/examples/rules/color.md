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
        ForestColors: [
          { name: 'Forest1', hex: '#FDFFE8', class: 'h-48 bg-forest-1' },
          { name: 'Forest2', hex: '#EAF5BB', class: 'h-48 bg-forest-2' },
          { name: 'Forest3', hex: '#D6EB8C', class: 'h-48 bg-forest-3' },
          { name: 'Forest4', hex: '#C1E062', class: 'h-48 bg-forest-4' },
          { name: 'Forest5', hex: '#ABD63C', class: 'h-48 bg-forest-5' },
          { name: 'Forest6', hex: '#94CC19', class: 'h-48 bg-forest-6' },
          { name: 'Forest7', hex: '#75AC11', class: 'h-48 bg-forest-7' },
          { name: 'Forest8', hex: '#5A8C08', class: 'h-48 bg-forest-8' }
        ],
        SunriseColors: [
          { name: 'Sunrise1', hex: '#FCFBD1', class: 'h-48 bg-sunrise-1' },
          { name: 'Sunrise2', hex: '#FFF9AE', class: 'h-48 bg-sunrise-2' },
          { name: 'Sunrise3', hex: '#FEF288', class: 'h-48 bg-sunrise-3' },
          { name: 'Sunrise4', hex: '#FFE963', class: 'h-48 bg-sunrise-4' },
          { name: 'Sunrise5', hex: '#FAE04D', class: 'h-48 bg-sunrise-5' },
          { name: 'Sunrise6', hex: '#F5D400', class: 'h-48 bg-sunrise-6' },
          { name: 'Sunrise7', hex: '#D2A206', class: 'h-48 bg-sunrise-7' },
          { name: 'Sunrise8', hex: '#A67A05', class: 'h-48 bg-sunrise-8' }
        ],
        CandyColors: [
          { name: 'Candy1', hex: '#E3FAF6', class: 'h-48 bg-candy-1' },
          { name: 'Candy2', hex: '#B6F3E8', class: 'h-48 bg-candy-2' },
          { name: 'Candy3', hex: '#88E7DD', class: 'h-48 bg-candy-3' },
          { name: 'Candy4', hex: '#5BDBD3', class: 'h-48 bg-candy-4' },
          { name: 'Candy5', hex: '#36CDC9', class: 'h-48 bg-candy-5' },
          { name: 'Candy6', hex: '#15B5B5', class: 'h-48 bg-candy-6' },
          { name: 'Candy7', hex: '#0A979C', class: 'h-48 bg-candy-7' },
          { name: 'Candy8', hex: '#016D74', class: 'h-48 bg-candy-8' }
        ],
        SkyblueColors: [
          { name: 'Skyblue1', hex: '#E3F5FA', class: 'h-48 bg-skyblue-1' },
          { name: 'Skyblue2', hex: '#C4EFFF', class: 'h-48 bg-skyblue-2' },
          { name: 'Skyblue3', hex: '#9FE3FF', class: 'h-48 bg-skyblue-3' },
          { name: 'Skyblue4', hex: '#7DD3FF', class: 'h-48 bg-skyblue-4' },
          { name: 'Skyblue5', hex: '#57C2FF', class: 'h-48 bg-skyblue-5' },
          { name: 'Skyblue6', hex: '#32A5F2', class: 'h-48 bg-skyblue-6' },
          { name: 'Skyblue7', hex: '#1F85D2', class: 'h-48 bg-skyblue-7' },
          { name: 'Skyblue8', hex: '#1060A6', class: 'h-48 bg-skyblue-8' }
        ],
        PurpleColors: [
          { name: 'Purple1', hex: '#F7E7FF', class: 'h-48 bg-purple-1' },
          { name: 'Purple2', hex: '#EAC9FD', class: 'h-48 bg-purple-2' },
          { name: 'Purple3', hex: '#DBAAFB', class: 'h-48 bg-purple-3' },
          { name: 'Purple4', hex: '#C98CF8', class: 'h-48 bg-purple-4' },
          { name: 'Purple5', hex: '#B76DF5', class: 'h-48 bg-purple-5' },
          { name: 'Purple6', hex: '#A250F4', class: 'h-48 bg-purple-6' },
          { name: 'Purple7', hex: '#7932CA', class: 'h-48 bg-purple-7' },
          { name: 'Purple8', hex: '#551BA0', class: 'h-48 bg-purple-8' }
        ],
        MagentaColors: [
          { name: 'Magenta1', hex: '#FFE8F1', class: 'h-48 bg-magenta-1' },
          { name: 'Magenta2', hex: '#F6C0D6', class: 'h-48 bg-magenta-2' },
          { name: 'Magenta3', hex: '#ED9ABF', class: 'h-48 bg-magenta-3' },
          { name: 'Magenta4', hex: '#E476AB', class: 'h-48 bg-magenta-4' },
          { name: 'Magenta5', hex: '#DB559A', class: 'h-48 bg-magenta-5' },
          { name: 'Magenta6', hex: '#D2368B', class: 'h-48 bg-magenta-6' },
          { name: 'Magenta7', hex: '#B12275', class: 'h-48 bg-magenta-7' },
          { name: 'Magenta8', hex: '#8F125F', class: 'h-48 bg-magenta-8' }
        ],
      },
      gray: [
          { name: 'gray1', hex: '#F6F7FB', class: 'p-6 h-48 bg-gray-1' },
          { name: 'gray2', hex: '#F1F2F5', class: 'p-6 h-48 bg-gray-2' },
          { name: 'gray3', hex: '#E9EAF0', class: 'p-6 h-48 bg-gray-3' },
          { name: 'gray4', hex: '#CBD0DB', class: 'p-6 h-48 bg-gray-4' },
          { name: 'gray5', hex: '#ADB1BC', class: 'p-6 h-48 bg-gray-5' },
          { name: 'gray6', hex: '#7E8494', class: 'p-6 h-48 bg-gray-6' },
          { name: 'gray7', hex: '#353C51', class: 'p-6 h-48 bg-gray-7' },
          { name: 'gray8', hex: '#1E2435', class: 'p-6 h-48 bg-gray-8' }
        ],
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
        ForestColors: [
          { name: 'Forest1', hex: '#FDFFE8', class: 'h-48 bg-forest-1' },
          { name: 'Forest2', hex: '#EAF5BB', class: 'h-48 bg-forest-2' },
          { name: 'Forest3', hex: '#D6EB8C', class: 'h-48 bg-forest-3' },
          { name: 'Forest4', hex: '#C1E062', class: 'h-48 bg-forest-4' },
          { name: 'Forest5', hex: '#ABD63C', class: 'h-48 bg-forest-5' },
          { name: 'Forest6', hex: '#94CC19', class: 'h-48 bg-forest-6' },
          { name: 'Forest7', hex: '#75AC11', class: 'h-48 bg-forest-7' },
          { name: 'Forest8', hex: '#5A8C08', class: 'h-48 bg-forest-8' }
        ],
        SunriseColors: [
          { name: 'Sunrise1', hex: '#FCFBD1', class: 'h-48 bg-sunrise-1' },
          { name: 'Sunrise2', hex: '#FFF9AE', class: 'h-48 bg-sunrise-2' },
          { name: 'Sunrise3', hex: '#FEF288', class: 'h-48 bg-sunrise-3' },
          { name: 'Sunrise4', hex: '#FFE963', class: 'h-48 bg-sunrise-4' },
          { name: 'Sunrise5', hex: '#FAE04D', class: 'h-48 bg-sunrise-5' },
          { name: 'Sunrise6', hex: '#F5D400', class: 'h-48 bg-sunrise-6' },
          { name: 'Sunrise7', hex: '#D2A206', class: 'h-48 bg-sunrise-7' },
          { name: 'Sunrise8', hex: '#A67A05', class: 'h-48 bg-sunrise-8' }
        ],
        CandyColors: [
          { name: 'Candy1', hex: '#E3FAF6', class: 'h-48 bg-candy-1' },
          { name: 'Candy2', hex: '#B6F3E8', class: 'h-48 bg-candy-2' },
          { name: 'Candy3', hex: '#88E7DD', class: 'h-48 bg-candy-3' },
          { name: 'Candy4', hex: '#5BDBD3', class: 'h-48 bg-candy-4' },
          { name: 'Candy5', hex: '#36CDC9', class: 'h-48 bg-candy-5' },
          { name: 'Candy6', hex: '#15B5B5', class: 'h-48 bg-candy-6' },
          { name: 'Candy7', hex: '#0A979C', class: 'h-48 bg-candy-7' },
          { name: 'Candy8', hex: '#016D74', class: 'h-48 bg-candy-8' }
        ],
        SkyblueColors: [
          { name: 'Skyblue1', hex: '#E3F5FA', class: 'h-48 bg-skyblue-1' },
          { name: 'Skyblue2', hex: '#C4EFFF', class: 'h-48 bg-skyblue-2' },
          { name: 'Skyblue3', hex: '#9FE3FF', class: 'h-48 bg-skyblue-3' },
          { name: 'Skyblue4', hex: '#7DD3FF', class: 'h-48 bg-skyblue-4' },
          { name: 'Skyblue5', hex: '#57C2FF', class: 'h-48 bg-skyblue-5' },
          { name: 'Skyblue6', hex: '#32A5F2', class: 'h-48 bg-skyblue-6' },
          { name: 'Skyblue7', hex: '#1F85D2', class: 'h-48 bg-skyblue-7' },
          { name: 'Skyblue8', hex: '#1060A6', class: 'h-48 bg-skyblue-8' }
        ],
        PurpleColors: [
          { name: 'Purple1', hex: '#F7E7FF', class: 'h-48 bg-purple-1' },
          { name: 'Purple2', hex: '#EAC9FD', class: 'h-48 bg-purple-2' },
          { name: 'Purple3', hex: '#DBAAFB', class: 'h-48 bg-purple-3' },
          { name: 'Purple4', hex: '#C98CF8', class: 'h-48 bg-purple-4' },
          { name: 'Purple5', hex: '#B76DF5', class: 'h-48 bg-purple-5' },
          { name: 'Purple6', hex: '#A250F4', class: 'h-48 bg-purple-6' },
          { name: 'Purple7', hex: '#7932CA', class: 'h-48 bg-purple-7' },
          { name: 'Purple8', hex: '#551BA0', class: 'h-48 bg-purple-8' }
        ],
        MagentaColors: [
          { name: 'Magenta1', hex: '#FFE8F1', class: 'h-48 bg-magenta-1' },
          { name: 'Magenta2', hex: '#F6C0D6', class: 'h-48 bg-magenta-2' },
          { name: 'Magenta3', hex: '#ED9ABF', class: 'h-48 bg-magenta-3' },
          { name: 'Magenta4', hex: '#E476AB', class: 'h-48 bg-magenta-4' },
          { name: 'Magenta5', hex: '#DB559A', class: 'h-48 bg-magenta-5' },
          { name: 'Magenta6', hex: '#D2368B', class: 'h-48 bg-magenta-6' },
          { name: 'Magenta7', hex: '#B12275', class: 'h-48 bg-magenta-7' },
          { name: 'Magenta8', hex: '#8F125F', class: 'h-48 bg-magenta-8' }
        ],
      }
    }
  }
</script>
```

</details>

## 字体颜色

<div class="example">
    <br/>
    <div grid grid-cols-3 gap-20>
      <div h-384 font-size-12 >
        <div v-for="item in gray" :class="item.class" :key="item.name">
          <p flex justify-between m-b-0>{{ item.name }}<span>{{ item.hex }}</span></p>
        </div>
      </div>
    </div>
    <br/>
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
