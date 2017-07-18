/**
 * 实例化的ProxyModel
 */

const path = require('path')
const ProxyModel = require('./ProxyModel')

let proxy = new ProxyModel(path.resolve(__dirname, '../interface.json'))

module.exports = proxy