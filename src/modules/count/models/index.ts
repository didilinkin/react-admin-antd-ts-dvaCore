/*
 * @Author: yanxiaodi
 * @Date: 2018-02-05 00:51:04
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2018-02-05 01:24:17
 * @Description count model
 */

const countModel = {
  namespace: 'countModel',
  state: 0,
  reducers: {
      add  (count: number) { return count + 1 },
      minus(count: number) { return count - 1 },
  },
}

export default [
  countModel,
]
