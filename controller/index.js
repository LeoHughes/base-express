const fs = require('fs')

/** 
 * @class controller
 * 
 */

class controller {

  constructor() {

    let arr = fs.readdirSync(__dirname)

    arr.forEach((el) => {

      if (el !== 'index.js') {

        let objName = el.replace('.js', '')

        let obj = require(`./${el}`)

        this[objName] = new obj()

      }

    })

  }

}

module.exports = new controller()