function trimSpace(str){
  return str.replace(/\s+/g, '');
}

function getDatas(errorCode, data, history, callback){
  if(errorCode === 0 && data){
    callback();
  }else{
    history.push('/404');
  }
}

function confirmText(field){
  return function(status){
    switch(field){
      case 'COLLECTION': 
        return `確定要${status ? '下架' : '上架'}該集合`;
        break;
      case 'COURSE':
        return `確定要${status ? '下架' : '上架'}該課程`;
        break;    
      case 'RECOM_COURSE':
        return `確定要${status ? '下架' : '上架'}該課程`;
        break;
      case 'SLIDER': 
        return `確定要${status ? '下架' : '上架'}該輪播圖`;
        break;
      case 'STUDENT':
        return `確定要${status ? '下線' : '上線'}該學生`;
        break;
      case 'TEACHER':
        return `確定要${status ? '下線' : '上線'}該老師`;
        break;
      case 'STAR_TEACHER':
        return `確定要設置老師為${status ? '普通老師' : '明星老師'}`;
        break;           
    }
  }
}

export {
  trimSpace,
  getDatas,
  confirmText
}