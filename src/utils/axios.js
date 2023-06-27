import axios from "axios";

axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['Authorization'] = 'Bearer RdDbdn7Nc0MQiXzF.1681976991365'
axios.defaults.headers['x-kakao-webtoon-app-id'] = '31d692d3d54ee9942efdf82b667da510'
axios.defaults.headers['x-kakao-webtoon-platform'] = 'IA'
axios.defaults.headers['saDeviceId'] = '9C08529B-39D6-4AB5-9725-1EB6DF94A52B'
axios.defaults.headers['appVersion'] = '3.1.0'
axios.defaults.headers['x-kakao-webtoon-language'] = 'zhc'
axios.defaults.headers['platform'] = 'ios'
axios.defaults.headers['device_id'] = '31d692d3d54ee9942efdf82b667da510'
axios.defaults.headers['theme'] = 'dark'

export default axios