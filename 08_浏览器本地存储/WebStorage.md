# WebStorage
localStorage sessionStorage 统称为 WebStorage

1. 存储内容大小一般支持 5MB 左右（不同浏览器可能不一样）


2. 浏览器通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制


3. 相关 API：
    1. xxxxxStorage.setItem('key','value') 
        该方法接收一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的数据
    2. xxxxxStorage.getItem('key') 
        该方法接收一个键名作为参数，返回键名对应的值
    3. xxxxxStorage.removeItem('key') 
        该方法接收一个键名作为参数，删除存储中该键值对
    4. xxxxxStorage.clearItem()
        该方法会清空存储中的所有数据


4. 备注：
    1. sessionStorage 存储中的内容会随着浏览器窗口关闭而消失
    2. localStorage 存储的内容，需要手动清除才会消失
    3. xxxxxStorage.getItem('key') 如果对应的 value 获取不到，那么返回值是 null
    4. JSON.parse(null) 的结果仍然是 null
