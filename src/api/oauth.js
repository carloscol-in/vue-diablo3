// oauth.js

import { post } from 'axios'

// settings to make oauth call
const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

const REGION = 'us'
const API_URL = `https://${REGION}.battle.net/oauth/token`

const getToken = () => {
  // create object of type FormData
  const body = new FormData()

  // append `grant_type` and `client_credentials`
  body.append('grant_type', 'client_credentials')

  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },

    // pass the clientId and clientSecret on authentication headers
    auth: { username: clientId, password: clientSecret }
  }

  // make post request
  // params:
  //  - url
  //  - body
  //  - config
  return post(API_URL, body, config)
}

export { getToken }
