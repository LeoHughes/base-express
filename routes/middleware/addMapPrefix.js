/**
 * 根据prefix为路由映射添加统一前缀
 */

module.exports = (prefix, map) => {

  if (typeof prefix !== 'string') return

  for (let key in map) {
    if (map.hasOwnProperty(key)) {
      map[key] = prefix + map[key]
    }
  }

  return map
}