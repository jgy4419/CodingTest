function solution(s) {
    let result = parseInt(s);
    if ((s.length === 4 || s.length === 6) && s == result) {
      result = true
    } else {
      result = false
    }
    return result;
  }
  
  
  function solution(s) {
      return /^\d{6}$|^\d{4}$/.test(s) ? false : true;
    
  }
  
  console.log(solution("a234s2"));