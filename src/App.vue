<script setup lang="ts">
import { NmdLoading } from '@udn-digital-center/common-components';
</script>

<template>
  <NmdLoading />
  <pre>
    使用此初始化環境注意事項如下： <br/>
    需更改 <code>vite.config.ts</code> 檔案裡的 <code>handleBase</code> 函式，將 <code>production</code> 及 <code>staging</code> 回傳值更改為正式機與測試機的網址，前後切記包含 //。 <br/>
    <code>vite.config.ts</code> 裡的 <code>createHtmlPlugin</code> 套件，是用來使用 <code>ejs</code> 的，該設定可減少重複定義 <code>index.html</code> 的 meta 文字;使用方法，需將 PM 給的 Meta 資訊填入 <code>inject</code> 的物件中，如下：<br />
    <span>
      <code>
    data: {
      title: '',
      description: '',
      twitter_description: '',
      keywords: '',
      url: '', 
      image: ''
    }
        </code>
    </span>
    <hr>
    <code>index.html</code> 裡的 LD-JSON 視專案需求刪除，如像數位版銷售頁。<br />
    GTM 容器 ID 需自己填入，數據中心：<code>GTM-P82S5BH</code>;策展組：<code>GTM-NLXXV9K</code>，<code>script</code>及<code>noscript</code>都需一樣。
  </pre>

  <p style="text-align: center; color: red; font-size: 32px">
    該內容需刪除，以及程式碼下方 <code>style</code> 內的 code 標籤
  </p>
</template>

<style>
code {
  background-color: #f0f0f0;
  color: #c7254e;
  font-size: 0.85rem;
  padding: 0.2em 0.4em;
  border-radius: 4px;
}

pre span {
  display: block;
  background-color: #f0f0f0;
}
</style>
