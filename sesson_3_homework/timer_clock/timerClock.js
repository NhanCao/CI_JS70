class TimerClock {
  $container;
  $time;
  $btnStart;
  $btnStop;
  $btnPause;

  second = 0;
  timeInterval = null;
  isClickStrart = false;
  isClickStop = false;
  constructor() {
    //Tao Container
    this.$container = document.createElement("div");
    this.$container.classList.add("clock");

    //Tao Time
    this.$time = document.createElement("span");
    this.$time.classList.add("clock__time");
    this.$time.innerHTML = "00:00";

    //Tao nut Start
    this.$btnStart = document.createElement("button");
    this.$btnStart.classList.add("clock__start");
    this.$btnStart.innerHTML = "Start";
    this.$btnStart.addEventListener("click", this.Start);

    //Tao nut Stop
    this.$btnStop = document.createElement("button");
    this.$btnStop.classList.add("clock__stop");
    this.$btnStop.innerHTML = "Stop";
    this.$btnStop.addEventListener("click", this.Stop);

    //Tao nut Pause
    this.$btnPause = document.createElement("button");
    this.$btnPause.classList.add("clock__pause");
    this.$btnPause.innerHTML = "Pause";
    this.$btnPause.addEventListener("click", this.Pause);
  }
  Start = () => {
    if (this.isClickStrart) {
      return;
    }
    this.isClickStrart = true;
    this.timeInterval = setInterval(() => {
      this.second++;
      this.updateTime();
    }, 1000);
    this.isClickStop = false;
    this.$btnStart.innerHTML = "Start";
  };

  Stop = () => {
    if (this.isClickStop) {
      return;
    }
    this.isClickStop = true;
    clearInterval(this.timeInterval);
    this.second = 0;
    this.updateTime();
    this.isClickStrart = false;
    this.isClickStop = false;
    this.$time.innerHTML = "00:00";
    this.$btnStart.innerHTML = "Start";
  };

  Pause = () => {
    if (!this.isClickStrart && !this.isClickStop) {
      return;
    }
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
      this.$btnStart.innerHTML = "Continue";
      this.isClickStop = false;
      this.isClickStrart = false;
    }
  };

  updateTime = () => {
    const m = Math.floor(this.second / 60);
    const s = Math.floor(this.second % 60);
    this.$time.innerHTML = m + ":" + s;
  };

  Render() {
    this.$container.append(
      this.$time,
      this.$btnStart,
      this.$btnStop,
      this.$btnPause
    );
    return this.$container;
  }
}
