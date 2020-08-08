const btn1 = $(".j-btn1");
const btn2 = $(".j-btn3");
const btn3 = $(".j-btn7");
const btnReset = $(".j-btn-reset");
const bar = $(".j-bar");
const alert = $(".j-alert");
let progressbarVal = 0;



function progressReset(value) {
    bar.attr("style", "width: " + value + "%")
    bar.attr("aria-valuenow", value); 
}

function progressCheck(value) {
    if (value === 100) {
        alert.show();
        setTimeout(() => {
            alert.hide();
        }, 3000);
    }
    if (value < 101) {
        return true;
    }
}

function init() {
    btn1.click(() => {
        progressbarVal += 1;
        if (progressCheck(progressbarVal)) {
            progressReset(progressbarVal);
        }
        else {
            progressbarVal -= 1;
        }
    });
    btn2.click(() => {
        progressbarVal += 3;
        if (progressCheck(progressbarVal)) {
            progressReset(progressbarVal);
        }
        else {
            progressbarVal -= 3;
        }
    });
    btn3.click(() => {
        progressbarVal += 7;
        if (progressCheck(progressbarVal)) {
            progressReset(progressbarVal);
        }
        else {
            progressbarVal -= 7;
        }
    });
    btnReset.click(() => {
        progressbarVal = 0;
        if (progressCheck(progressbarVal)) {
            progressReset(progressbarVal);
        }
    });
}

$(document).ready(init);