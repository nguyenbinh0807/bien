//concat() là nối
var a = [-1, -2, -3,],
     b = [0],
     c = [1,2,3,4];
     d = [
           {
                 list: 'java',
                 money: 18,
           },
           {
                  list: 'js',
                  money: 10,
           }
     ]
     var array1 = Object.values(d[0]);
     var array2 = Object.values(d[1]);
     var result = array1.concat(array2);
     console.log(result)
     //var result = a.concat(c, b);
    // console.log(result);
//copyWithin() la ghi de
//console.log(c.copyWithin(0, 2));
//console.log(c.copyWithin(2, 0, 2))
//entries() la co the se 
//var list = ['js', 'php', 'java', 'python'];
//for(var index of list.entries()) {
  //    console.log(index)
//}
//every()
//trả về kiểu boalean
//console.log(c.every(function(item) {
 //        return item > 0;
//}))
//fill()
//console.log(a.fill('haha', 1))
//filter()
/**console.log(d.filter(function(item) {
      if(item.money == 0) {
            return item.money = 'free'
      }
      if(item.money > 0) {
            return item.money = 'not free'
      }
}))*/
//console.log(d.find(function(item) {
  //   return item.money > 0
//}))
//foreach()
/** for(var index of d) {
            console.log(index.money)
      } */
    //  console.log(d.forEach(function(item) {
      //      console.log(item.money);
      //}))