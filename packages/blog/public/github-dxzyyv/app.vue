<template>
  <div>
    <NuxtLink to="/">
      <button>home</button>
    </NuxtLink>
    <NuxtLink to="/profile/4444">
      <button>profile/4444</button>
    </NuxtLink>
    <NuxtLink to="/profile/aaaa">
      <button>profile/aaaa</button>
    </NuxtLink>
  </div>
  <div>
    如果我点击profile/aaaa的按钮，则会跳出404的错误页面，但按照我在profile/[id].vue文件的中间件的程序设定，应该跳出401的错误页面。同时在此404错误的基础上，如果我刷新页面，则会跳出500错误的页面
  </div>
  <div>
    <NuxtPage />
  </div>
</template>
