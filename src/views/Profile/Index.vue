<template>
  <div>
    <h1>Profile View</h1>
  </div>
</template>

<script>
import setError from '@/mixins/setError'
import { getApiAccount } from '@/api/search'

export default {
  name: 'ProfileView',
  // Lo damos de alta
  mixins: [
    setError
  ],
  data () {
    return {
      profileData: null
    }
  },
  created () {
    // llamada a la API
    this.fetchData()
  },
  methods: {
    fetchData () {
      const { region, battleTag: account } = this.$route.params
      getApiAccount({ region, account })
        .then(({ data }) => {
          // Guardamos los datos en una variable local
          this.profileData = data
        })
        .catch((err) => {
          this.profileData = null
          // Creamos el objeto error
          const errObj = {
            routeParams: this.$route.params,
            message: err.message
          }
          if (err.response) {
            errObj.data = err.response.data
            errObj.status = err.response.status
          }
          // Hacemos uso del Mixin
          // Guardamos el objeto en el Store
          this.setApiErr(errObj)
          // Navegamos a la ruta de nombre 'Error'
          this.$router.push({ name: 'Error' })
        })
    }
  }
}
</script>
