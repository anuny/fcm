function pager(count,active,offset){ 
  let i = 1
  let start = 1
  let end = count
  let arr = []
  let offsetHalf = Math.floor((offset - 1) / 2)

  if (count <= offset) {
    // 总页码数在显示的数量范围内
    while (i <= count) {
      arr.push(i);
      i++;
    }
  } else if (active < offset) {
    i = 1;
    while (i <= offset) {
      arr.push(i);
      i++;
    }
    if (active < count) {
      arr.push('...');
      arr.push(count);
    }
  } else if (active > count - offset + 1) {
      arr.push(1, '...');
      for (i = count - offset + 1; i <= count; i++) {
        arr.push(i);
      }
  } else if (active >= offset) {
    // 超过offset的话显示省略号
    if (active <= offset + offsetHalf) {
      // 没超过继续显示
      arr.push(1);
      arr.push('...');
      end = Math.min(active + offsetHalf, count);
      for (i = active - offsetHalf; i <= end; i++) {
        arr.push(i);
      }
      if (active < count - offsetHalf) {
        arr.push('...');
        arr.push(count);
      }
    } else {
      // 前后...
      arr.push(1);
      arr.push('...');

      if (active > count - offset + 1) {
        // 直接显示后面的
        start = count - offset + 1;
        end = count;
        for (i = start; i <= end; i++) {
          arr.push(i);
        }
      } else {
        end = Math.min(active + offsetHalf, count);
        start = Math.min(active - offsetHalf, count - offset + 1);
        for (i = start; i <= end; i++) {
          arr.push(i);
        }
        if (active < count - offsetHalf) {
          arr.push('...');
          arr.push(count);
        }
      }
    }
  }
  return arr
}

module.exports = pager