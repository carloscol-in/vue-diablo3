<template>

    <div class="loading-wrapper text-center py-5">
        <div class="spinner-wrapper w-100">
            <b-spinner class="spinner" label="Loading..." :type="type" :variant="variant" />
        </div>

        <p class="my5">Loading...</p>
    </div>

</template>

<script>

export default {
  name: 'loading',
  props: {
    variant: {
      required: false,
      type: String,
      default: 'info',
      validator: (value) => {
        return [
          'primary',
          'secondary',
          'danger',
          'warning',
          'success',
          'info',
          'light',
          'dark'
        ].indexOf(value) !== -1
      }
    },
    type: {
      required: false,
      type: String,
      default: 'border',
      validator: (value) => {
        return ['border', 'grow'].indexOf(value) !== -1
      }
    }
  }
}

</script>

<style lang="stylus">

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

.spinner-wrapper
    .spinner
        width 4rem
        height 4rem

</style>
