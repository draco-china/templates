import axios from '~/plugins/axios'

export default function ({ isServer, req, res }, next) {
  if (isServer) {
    if(req.headers.cookie != undefined) {
