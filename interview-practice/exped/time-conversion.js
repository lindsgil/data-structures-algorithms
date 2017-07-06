//If given a time in hh:mm:ssPM or hh:mm:ssAM format, return the military time

function timeConversion(s){
  let string1 = [];
  if(s[s.length-2] === "A"){
    return s;
  }
  if(s[s.length-2] === "P"){
    var i = 0;
    var nums1 = Number(s[i]);
    var nums = Number(s[i+1]);
    var new1 = nums1 + 1;
    var new2 = nums + 2;
    new1 = new1.toString();
    new2 = new2.toString();
    }
    for(let i = 2; i < s.length - 2; i++) {
      string1.push(s[i]);
    }
    return new1 + new2 + string1.join('');
}

function timeConversion(s){
  let string1 = [];
  if(s[s.length-2] === "A"){
    return s;
  }
  if(s[s.length-2] === "P"){
    var i = 0;
    var nums1 = Number(s[i]);
    var nums = Number(s[i+1]);
    var new1 = nums1 + 1;
    var new2 = nums + 2;
      if(new1 === 2 && new2 === 4) {
          new1 = 0;
          new2 = 0;
      }
    new1 = new1.toString();
    new2 = new2.toString();
    }
    for(let i = 2; i < s.length - 2; i++) {
      string1.push(s[i]);
    }
    return new1 + new2 + string1.join('');
}

timeConversion('06:45:34PM')
