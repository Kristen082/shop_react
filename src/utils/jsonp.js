import originJsonp from 'jsonp'

export default function jsonp(url,data,options){
    url += (url.includes('?') ? '' : '?') + format(data);
    return new Promise((resolve,reject) => {
        originJsonp(url,options,(err,res) => {
            if(!err){
                resolve(res)
            }else{
                reject(err)
            }
        })
    })
}

function format(data){
    let url = '';
    for(let k in data){
        let value = data[k] !== undefined ? data[k] : '';
        url += '&' + k + '=' + value;
    }
    return url ? url.substring(1):''

    // k1=value1&k2=value2&k3=value3
}
