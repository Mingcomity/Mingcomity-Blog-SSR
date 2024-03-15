
<template>
<div>
    Page: detail03/id {{id}}
</div>
</template>

<script lang="ts" setup>
const route = useRoute()
const {id} = route.params

definePageMeta({
  validate: (route) => {
      if(/^\d+$/.test(route.params.id))
      {
          return true
      }   else  {
          return {
              statusCode: 401
          }
      }
  }
})
</script>

<style scoped></style>
