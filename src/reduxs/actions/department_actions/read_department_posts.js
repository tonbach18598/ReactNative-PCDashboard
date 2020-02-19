import axios from 'axios'
import Configs from '../../../ultilities/configs'
export const readDepatmentPosts = async () => {
    axios.get(Configs.baseUrl + Configs.departmentPath, { headers:
        { 'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNTc3MDkxNjAxLCJleHAiOjE2MDg2Mjc2MDF9.wNCingf553U0ZAo4N-_ZIKNPu9fzNtWOc3nQBhLeV-of5GUawEehZ0TUyCzrWxJMiN42qTVOObXSR5E_JE3_IA'
    } }).then((response)=>{console.log(response.data)})
}