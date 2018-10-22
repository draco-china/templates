import axios from '~/plugins/axios'

export default function ({ isServer, req, res }, next) {
  if (isServer) {
    if(req.headers.cookie != undefined) {
      axios.defaults.headers.common.cookie = req.headers.cookie
    }
    if(req.headers.referer != undefined) {
