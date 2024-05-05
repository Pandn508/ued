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

# Border 边框

## 基础用法

<div class="example">
    <div grid grid-cols-3 gap-20>
      <div h-48 bg-white border-1 border-solid color-success-6></div>
      <div h-48 bg-white border2 border-solid></div>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div grid grid-cols-3 gap-20>
    <div h-48 bg-white border-1 border-solid color-success-6></div>
    <div h-48 bg-white border2 border-solid></div>
  </div>
</template>
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
