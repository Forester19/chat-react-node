const tree = {
    value: 1,
    left: {
        value: 1,
        left: {
            value: 1,
            left: {
                value: 1
            },
            right: {
                value: 1
            }
        },
        right: {
            value: 1,
            right: {
                value: 1
            }
        }
    },
    right: {
        value: 1,
        left: {
            value: 1
        },
        right: {
            value: 1
        }
    }
};

const sumTreeVal = function (tree) {
    let res = tree.value;
   if(tree.left) {
       res += sumTreeVal(tree.left);
   }
   if(tree.right){
       res += sumTreeVal(tree.right);
   }
    return res;
};

console.log(sumTreeVal(tree));


function someFn() {
    console.log(arguments);
}
someFn(1, 2, "dwfe", []);

Function.prototype.delay = function(time){
  const someCtx = this;
  return (...args) => {
      setTimeout(()=>{someCtx(args)},time);
  }
};

const someFnWithDelay = someFn.delay(2000);
someFnWithDelay(1, 2);