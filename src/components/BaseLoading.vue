<template>

    <div class="loading-wrapper text-center py-5">
        <div class="spinner-wrapper w-100">
            <b-spinner class="spinner" label="Loading..." :type="type" :variant="variant" />
        </div>

        <p class="my5 text-black dark:text-white">Loading...</p>
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
        ].includes(value)
      }
    },
    type: {
      required: false,
      type: String,
      default: 'border',
      validator: (value) => {
        return ['border', 'grow'].includes(value)
      }
    }
  }
}

</script>

<style lang="stylus">

.spinner-wrapper
  .spinner
    width 4rem
    height 4rem

</style>
