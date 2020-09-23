import {request} from './request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

//获取商品数据
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}


// //将一个数组元素传入另一个数组中
  
  // totalNums = []
  // const num1 = [20, 11, 222]
  // const num2 = [111, 22, 333]

  // // for(let n of num1){
  // //   totalNums.push(n)
  // // }
  // //...num1相当于结构数组
  // totalNums.push(...num1)