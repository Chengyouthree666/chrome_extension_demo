/**
 * @description 入口js文件
*/             

window.onload = () => {
  function getCurrentDateTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  function createClock() {
    const clock = document.createElement("div");
    clock.setAttribute("id", "$myClock");

    clock.style.width = "140px";
    clock.style.textAlign = "center";
    clock.style.fontSize = "12px";
    clock.style.position = "fixed";
    clock.style.top = "0px";
    clock.style.right = "calc(50% - 70px)";
    clock.style.backgroundColor = "transparent";
    clock.style.color = "rgb(255 20 20)";
    clock.style.zIndex = "99999";
    document.body.appendChild(clock);

    setInterval(() => {
      const now = getCurrentDateTime();
      clock.innerHTML = now;
    }, 1000);
  }

  setTimeout(() => {
    createClock();
  }, 3000);
};
