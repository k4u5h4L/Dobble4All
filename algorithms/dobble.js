
// "use strict"
var i, j, k
var r=1
var n=7


var res = '';
res = "Card" + r + "="
for (i = 1; i<= n+1; i++) {
    res += " " + i
}
console.log(res)
for (j=1; j<=n; j++)  {
   r=r+1
   res = "Card" + r + "=";
   res += " 1";
   for (k=1; k<=n; k++) {
        res += " " + (n + n * (j-1) + k+1)
   }
   console.log(res)
}
for (i= 1; i<=n; i++) {
   for (j=1; j<=n; j++) {
      r=r+1
      res = "Card" + r + "="
      res += " " + (i+1) + " "
      for (k=1; k<= n; k++) {
        res += n + 2 + n * (k-1) + (((i-1) * (k-1) +j-1) % n) + " "
      }
      console.log(res)
    }
}
