/**
 * 分页组件
 */

(function() {
  var tm = '<div class="page font14" v-if="total != 0">' +
    '<a class="previous font12" @click="btnClick(1)">首页</a>' +
    '<a class="previous font12" v-if="current != 1" @click="btnClick(current-1)">上一页</a>' +
    '<a v-for="index in indexs" v-bind:class="{ hover: current == index}" v-on:click="btnClick(index)">{{ index }}</a>' +
    '<a class="next font12" v-if="current != total" @click="btnClick(current+1)">下一页</a>' +
    '<a class="previous font12" @click="btnClick(total)">尾页</a>' +
    '</div>';

  var pagination = Vue.extend({
    template: tm,
    props: {
      current: {
        type: [String, Number],
        required: true
      },
      total: {
        type: [String, Number],
        required: true
      },
      callback: {
        default: function() {
          return function callback() {
            // todo
          }
        }
      }
    },
    computed: {
      indexs: function() {

        var left = 1;
        var right = this.total;
        var arr = [];

        if (this.total >= 7) {
          if (this.current > 3 && this.current < this.total - 3) {
            left = this.current - 3;
            right = this.current + 3;
          } else {
            if (this.current <= 4) {
              left = 1;
              right = 7;
            } else {
              right = this.total;
              left = this.total - 6;
            }
          }
        }

        while (left <= right) {
          arr.push(left);
          left++;
        }

        return arr;
      }
    },
    methods: {
      btnClick: function(pageIndex) {
        if (pageIndex != this.current) {
          this.callback(pageIndex);
        }
      }
    }
  })

  window.Vpagination = pagination;

})()