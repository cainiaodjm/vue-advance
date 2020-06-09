/*
 * @Author: your name
 * @Date: 2020-05-14 09:26:31
 * @LastEditTime: 2020-05-14 19:43:53
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /vue-advance/1-reactivity/__test_/1.1.test.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
require('../../util').createTestCase(__filename, (window, logs, done) => {
    const { convert } = window
    const obj = { foo: 123 }
    convert(obj)
    expect(obj.foo).toBe(123)
    expect(logs[0][0]).toMatch(`getting key "foo": 123`)
    obj.foo = 234
    expect(logs[1][0]).toMatch(`setting key "foo" to: 234`)
    expect(obj.foo).toBe(234)
    expect(logs[2][0]).toMatch(`getting key "foo": 234`)
    done()
  })
  