module.exports = function getZerosCount(number, base) {
    let ans = Math.pow(10, 9);
    for(let i= 2; i <= base; i++){
      if(base % i === 0){
      let count1 = 0;
      while(base % i === 0){
        count1++;
          base /= i;
          base = parseInt(base);
      }
      let count2 = 0;
      let t = number;
      while(t / i > 0){
          t /= i;
          t = parseInt(t);
        count2 += t;

      }
      ans = Math.min(ans, count2 / count1);
    }
  }
  return parseInt(ans);
}