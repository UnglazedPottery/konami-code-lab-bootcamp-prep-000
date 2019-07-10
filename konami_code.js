const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init(){
  let index = 0;
  document.body.addEventListener('keydown', onKeyDownHandler);
  
  function onKeyDownHandler(e){
    const key = e.key;
    console.log(index);
    
    if(key === codes[index])
    {
      index++;
      
      if(index === codes.length)
      {
        alert("I sense konami.");
        index = 0;
      }
    }else{index = 0;}
  }
}

//init();
