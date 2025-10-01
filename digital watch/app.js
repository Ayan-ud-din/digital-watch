  var hrs= document.getElementById("hrs")
  var mints= document.getElementById("mints")
  var sec= document.getElementById("sec")


  setInterval(function(){
 var currentTime = new Date()

 hrs.innerHTML = currentTime.getHours()

 mints.innerHTML = currentTime.getMinutes()

 sec.innerHTML = currentTime.getSeconds()

  },1000)