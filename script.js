const launchDate = new Date("sep 09,2023").getTime();

let x = setInterval(() => {
  let now = new Date().getTime();
  let difference = launchDate - now;

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  let d = days < 10 ? `0${days}` : days;
  let h = hours < 10 ? `0${hours}` : hours;
  let m = minutes < 10 ? `0${minutes}` : minutes;
  let s = seconds < 10 ? `0${seconds}` : seconds;

  document.getElementById("day").innerHTML = d;
  document.getElementById("hour").innerHTML = h;
  document.getElementById("min").innerHTML = m;
  document.getElementById("sec").innerHTML = s;

  if (difference < 0) {
    clearInterval(x);
    document.getElementById("day").innerHTML = "00";
    document.getElementById("hour").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
  }

  //   console.log(
  //     `days - ${days}, hours - ${hours}, minutes - ${minutes}, seconds - ${seconds}`
  //   );
}, 1000);
