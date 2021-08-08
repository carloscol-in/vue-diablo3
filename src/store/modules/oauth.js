import * as oauth from '@/api/oauth'

export default {
  actions: {
    getToken ({ commit }) {
      commit('loading/SET_LOADING', true, { root: true })

      oauth.getToken()
        .then(({ data }) => {
          commit('SET_ACCESS_TOKEN', data.access_token)
        })
        .catch((err) => {
          commit('SET_ACCESS_TOKEN', null)
          console.err('Error Auth: ', err)
        })
        .finally(() => {
          console.log('Hello hello')
          commit('loading/SET_LOADING', false, { root: true })
        })
    }
  }
}
