const items = document.querySelectorAll('h4');


const getRemaindingTime = () =>{
  let currentYear = new Date().getFullYear();

  const month = 4;

  if (new Date().getMonth() > month){

    currentYear = currentYear + 1;
    console.log(currentYear)

  }
  else{
     currentYear = currentYear;
  }
  const futureTime = new Date(currentYear,month,27,18,0,0).getTime();

  const today = new Date().getTime();
  const time = futureTime - today;

  const oneDay = 60*60*24*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;

  let days = Math.floor(time/oneDay);
  let hours = Math.floor(time%oneDay/oneHour);
  let minutes = Math.floor(time%oneHour/oneMinute);
  let seconds = Math.floor(time%oneMinute/1000);
  
  let values = [days,hours,minutes,seconds];
  


  function format (item){
    if(item < 10){
      return item = `0${item}`
    }
    else{
      return item
    }
  }

  items.forEach(function(item,index){

    item.innerHTML = format(values[index]);

  });
}

const countdown = setInterval(getRemaindingTime,1000);
getRemaindingTime()