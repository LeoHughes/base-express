/** 
 * @class controller
 * 
 */

class controller {

  constructor(...models) {

    for (let item of models) {

      this[item.name] = new item()

    }

  }

}

module.exports = new controller(
  require('./page'),
  require('./user')
)