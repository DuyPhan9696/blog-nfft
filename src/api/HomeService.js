import {BaseApi} from './index'
class HomeService {
    export = body => {
      const url = `/api/excel/export`
      return BaseApi.postDownloadFile(url, body)
    }
  }
  
  export default new HomeService()