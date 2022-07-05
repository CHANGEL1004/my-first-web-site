var Body = {
  setColor:function (color){
    document.querySelector('body').style.color = color;
  },
 SetBackgroundColor:function (color){
   document.querySelector('body').style.backgroundColor = color;
 }
}
function nightDayhandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
  Body.setBackgroundColor('black');
  Body.setColor('white');
  self.value = 'day';

  Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('blue');
  }
}
