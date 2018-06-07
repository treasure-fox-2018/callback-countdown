const { displayCountdown } = require("./views");

const timer = seconds => {
    let countDown = setInterval(function() {
        displayCountdown(convertTime(seconds))
        seconds--
        if (seconds === -1) {
            clearInterval(countDown)
        }
    }, 1000)
};

const convertTime = seconds => {
    let menit = ''
    let detik = ''

    if (seconds >= 60) {
        menit = Math.floor(seconds / 60)
        detik = seconds % 60

        if (menit < 10) {
            menit = '0' + menit
        }
    } else {
        detik = seconds
        menit = '00'
    }

    if (detik < 10) {
        detik = '0' + detik
    }

    return `${menit} : ${detik}`
};

module.exports = {
  timer
};
