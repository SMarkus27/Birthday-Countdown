const items = document.querySelectorAll('h4');

const currentYear = new Date().getFullYear();
const happyBirth = new Date(currentYear,4,27,18,0,0)

const getTime = () =>{

  const today = new Date().getTime();
  const futureTime = new Date(happyBirth).getTime()

  const time = futureTime - today;
  
  const oneDay = 60*60*24*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;
  
  let days = Math.floor(time / oneDay);
  let hours = Math.floor((time%oneDay)/oneHour);
  let minutes = Math.floor((time%oneHour)/oneMinute);
  let seconds = Math.floor((time%oneMinute)/1000);

  const values = [days,hours,minutes,seconds];
  
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

}

let countdown = setInterval(getTime,1000);
getTime()