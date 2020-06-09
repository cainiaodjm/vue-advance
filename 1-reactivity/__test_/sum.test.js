/*
 * @Author: your name
 * @Date: 2020-05-14 00:09:50
 * @LastEditTime: 2020-05-14 00:09:50
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /vue-advance/1-reactivity/__test_/sum.test.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});