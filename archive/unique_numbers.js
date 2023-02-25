for (let i = 100; i <= 120; i++) {
    let num = i.toString();
    let unique = [...new Set(num)];
    if (num.length === unique.length) {
      console.log(i);
    } 
  } 