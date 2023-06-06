import { httpGet, request } from './http'
const articleUrl = '/website/news/queryNewsFront'

export const getArticle = ( params={}) => {
    return httpGet(articleUrl, params)
}
