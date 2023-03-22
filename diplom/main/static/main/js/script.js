const colors = {0:'белый', 1:'черный', 2: 'красный',3: 'зеленый', 4: 'серый', 5:'синий',
              6: 'желтый', 7: 'голубой', 8:'розовый', 9:'медный',10: 'золотой',
              11: 'серебряный', 12: 'коричневый', 13: 'бронзовый', 14:'ультрамарин',
              15:'фуксия', 16: 'алый', 17: 'оранжевый',18: 'бурый', 19: 'лиловый',
              20: 'фиолетовый', 21: 'васильковый', 22: 'болотный', 23: 'вишневый',
              24: 'бежевый', 25: 'бордовый', 26: 'сиреневый', 27: 'изумрудный',
              28: 'лимонный', 29: 'оливковый', 30: 'бирюзовый', 31: 'коралловый'}

const colors_start = {0: [220, 220, 220], 1:[80,70,70], 2:[170,40,40], 3: [60,140,60], 4: [130,100,100],
                    5: [40,40,150], 6: [180,180,30], 7: [50,140,180], 8:[190,90,130],
                    9: [200, 110, 40], 10: [170,150,30], 11: [150,130,130], 12:[130, 60, 30],
                    13: [190,120,60], 14:[70,70,190], 15: [170,40,170], 16: [190,50,30],
                    17: [190,120,30], 18: [180,90,70], 19: [200,110,140], 20: [150,60,150],
                    21: [100, 140, 200], 22: [150,140,60], 23: [180,50,70], 24: [170,170,130],
                    25: [150,30,30], 26: [120,70,120], 27: [80,120,50], 28: [180,170,40],
                    29: [150,150,50], 30: [70,160,150], 31: [180,90,50]}

const step = 20;

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var ready = document.getElementById('ready');
var circle_main = document.getElementById('circle_main');
var circle_up_1 = document.getElementById('circle_up_1');
var circle_down_1 = document.getElementById('circle_down_1');
var circle_left_up_1 = document.getElementById('circle_left_up_1');
var circle_right_up_1 = document.getElementById('circle_right_up_1');
var circle_left_down_1 = document.getElementById('circle_left_down_1');
var circle_right_down_1 = document.getElementById('circle_right_down_1');
var circle_up_2 = document.getElementById('circle_up_2');
var circle_down_2 = document.getElementById('circle_down_2');
var circle_left_up_2 = document.getElementById('circle_left_up_2');
var circle_right_up_2 = document.getElementById('circle_right_up_2');
var circle_left_down_2 = document.getElementById('circle_left_down_2');
var circle_right_down_2 = document.getElementById('circle_right_down_2');

let circles = [circle_up_1, circle_down_1, circle_left_up_1, circle_right_up_1, circle_left_down_1, circle_right_down_1,
circle_up_2, circle_down_2, circle_left_up_2, circle_right_up_2, circle_left_down_2, circle_right_down_2];
let colors_circles = []

function choseColor(el) {
    var index = getRandomInRange(0, 31);
    ready.style.display = (ready.style.display == 'inline') ? '' : 'inline';
    localStorage.setItem('hide', ready.style.display);

    for(let i = 0; i < 12; ++i) {
    //TODO: КРАСИВАЯ ФОРМУЛА, убрать повторение кода
        var color = "rgb(";
        if (i == 0)  {
            color += String(20+colors_start[index][0]) + "," + String(colors_start[index][1]) + ","
            + String(colors_start[index][2]) + ")";
        } else if (i == 1) {
            color += String(-20+colors_start[index][0]) + "," + String(colors_start[index][1]) + ","
            + String(colors_start[index][2]) + ")";
        } else if (i == 2) {
            color += String(20+colors_start[index][0]) + "," + String(colors_start[index][1]) + ","
            + String(20+colors_start[index][2]) + ")";
        } else if (i == 3) {
            color += String(-20+colors_start[index][0]) + "," + String(colors_start[index][1]) + ","
            + String(-20 + colors_start[index][2]) + ")";
        } else if (i == 4) {
            color += String(colors_start[index][0]) + "," + String(colors_start[index][1]) + ","
            + String(20+colors_start[index][2]) + ")";
        } else if (i == 5) {
            color += String(colors_start[index][0]) + "," + String(colors_start[index][1]) + ","
            + String(-20+colors_start[index][2]) + ")";
        } else if (i == 6) {
            color += String(colors_start[index][0]) + "," + String(20+colors_start[index][1]) + ","
            + String(20+colors_start[index][2]) + ")";
        } else if (i == 7) {
            color += String(colors_start[index][0]) + "," + String(-20+colors_start[index][1]) + ","
            + String(-20+colors_start[index][2]) + ")";
        } else if (i == 8) {
            color += String(colors_start[index][0]) + "," + String(20+colors_start[index][1]) + ","
            + String(colors_start[index][2]) + ")";
        } else if (i == 9) {
            color += String(colors_start[index][0]) + "," + String(-20+colors_start[index][1]) + ","
            + String(colors_start[index][2]) + ")";
        } else if (i == 10) {
            color += String(20+colors_start[index][0]) + "," + String(20+colors_start[index][1]) + ","
            + String(colors_start[index][2]) + ")";
        } else if (i == 11) {
            color += String(-20+colors_start[index][0]) + "," + String(-20+colors_start[index][1]) + ","
            + String(colors_start[index][2]) + ")";
        }
        circles[i].style.background = color;
        localStorage.setItem("hide" + String(circles[i]), 'yes');
        colors_circles.push(color);
    }

    el.innerHTML = "Выберите цвет, который больше всего похож на " + colors[index];
}

if(localStorage.getItem('hide') == 'inline') {
  document.getElementById('ready').style.display = 'inline';
}


for(let i = 0; i < 12; ++i) {
    if(localStorage.getItem("hide" + String(circles[i])) == 'yes') {
      document.getElementById(String(circles[i])).style.background = colors_circles[i];
    }
}
