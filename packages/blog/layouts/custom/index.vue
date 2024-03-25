<template>
  <div>
    <header>
      <slot name="header"> </slot>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="footer"> </slot>
    </footer>
  </div>
</template>
