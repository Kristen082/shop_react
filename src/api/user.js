import request from '../utils/request'

/**
 * @param {注册接口} data 
 */
export function registry(data){
    return request.post('/buyer/user/register',data)
}

/**
 * @param {图形验证码} data 
 */
export function captcha(data){
    return request.get('/buyer/user/captcha',data)
}

/**
 * @param {登录接口} data 
 */
export function login(data){
    return request.post('/buyer/user/login',data)
}

/**
 * @param {城市接口} data 
 */
export function city(data){
    return request.get('/buyer/delivery/city',data)
}
