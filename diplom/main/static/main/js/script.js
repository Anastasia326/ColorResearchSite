const colors = {
    0: 'белый',
    1: 'черный',
    2: 'красный',
    3: 'зеленый',
    4: 'серый',
    5: 'синий',
    6: 'желтый',
    7: 'голубой',
    8: 'розовый',
    9: 'медный',
    10: 'золотой',
    11: 'серебряный',
    12: 'коричневый',
    13: 'бронзовый',
    14: 'ультрамарин',
    15: 'фуксия',
    16: 'алый',
    17: 'оранжевый',
    18: 'бурый',
    19: 'лиловый',
    20: 'фиолетовый',
    21: 'васильковый',
    22: 'болотный',
    23: 'вишневый',
    24: 'бежевый',
    25: 'бордовый',
    26: 'сиреневый',
    27: 'изумрудный',
    28: 'лимонный',
    29: 'оливковый',
    30: 'бирюзовый',
    31: 'коралловый'
}

const colors_start = {
    0: [220, 220, 220],
    1: [80, 70, 70],
    2: [170, 40, 40],
    3: [60, 140, 60],
    4: [130, 100, 100],
    5: [40, 40, 150],
    6: [180, 180, 30],
    7: [50, 140, 180],
    8: [190, 90, 130],
    9: [200, 110, 40],
    10: [170, 150, 30],
    11: [150, 130, 130],
    12: [130, 60, 30],
    13: [190, 120, 60],
    14: [70, 70, 190],
    15: [170, 40, 170],
    16: [190, 50, 30],
    17: [190, 120, 30],
    18: [180, 90, 70],
    19: [200, 110, 140],
    20: [150, 60, 150],
    21: [100, 140, 200],
    22: [150, 140, 60],
    23: [180, 50, 70],
    24: [170, 170, 130],
    25: [150, 30, 30],
    26: [120, 70, 120],
    27: [80, 120, 50],
    28: [180, 170, 40],
    29: [150, 150, 50],
    30: [70, 160, 150],
    31: [180, 90, 50]
}

const step = 20;

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const base_color = "rgb(242, 233, 228);"
var my_bar = document.getElementById('my_bar');
var label = document.getElementById('label');
var my_progress = document.getElementById('my_progress');
var choosed_color = document.getElementById('choosed_color');
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
var next = document.getElementById('next');
var super_step = document.getElementById('super');

let circles = [circle_up_2, circle_up_1, circle_left_up_2, circle_left_up_1, circle_left_down_2, circle_left_down_1,
    circle_down_2, circle_down_1, circle_right_down_2, circle_right_down_1, circle_right_up_2, circle_right_up_1, circle_main
];
let circles_names = ['circle_up_2', 'circle_up_1', 'circle_left_up_2', 'circle_left_up_1', 'circle_left_down_2', 'circle_left_down_1',
    'circle_down_2', 'circle_down_1', 'circle_right_down_2', 'circle_right_down_1', 'circle_right_up_2', 'circle_right_up_1', 'circle_main'
];
let colors_circles = [];
let answer = '';
var counter = 0;
var to_db = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

const Buttons = {
    ready: ready, //вторая надпись, про центр
    next: next, //кнопка продолжения
    super_step: super_step, //надпись продолжения
    my_bar: my_bar,
    my_progress: my_progress,
    label: label,
    buttons: [ready, next, super_step, my_progress, my_bar, label],
    name: function(value) {
        if (value == ready) {
            return 'ready';
        }
        if (value == next) {
            return 'next';
        }
        if (value == super_step) {
            return 'super_step';
        }
        if (value == my_bar) {
            return 'my_bar';
        }
        if (value == my_progress) {
            return 'my_progress';
        }
        if (value == label) {
            return 'label';
        }
    },
    makeVisible: function(value) {
        value.style.display = 'inline';
        localStorage.setItem(Buttons.name(value), 'show');
    },
    makeUnVisible: function(value) {
        value.style.display = 'none';
        localStorage.setItem(Buttons.name(value), 'hide');
    },
    demonstrateThis: function(value, stringCommand) {
        value.style.display = stringCommand;
    },
    makeVisibleCircles: function(center) {
        for (let i = 0; i < 12; ++i) {
            circles[i].style.display = 'flex';
            localStorage.setItem(circles_names[i], 'show');
        }
        if (center == 'yes') {
            circles[12].style.display = 'flex';
            localStorage.setItem(circles_names[12], 'show');
        }
    },
    makeUnVisibleCircles: function() {
        for (let i = 0; i < 13; ++i) {
            circles[i].style.display = 'none';
            localStorage.setItem(circles_names[i], 'hide');
        }
    },
    demonstrateCircles: function(stringCommand, center) {
        let a = localStorage.getItem('colors_circles').split('),');
        for (let i = 0; i < 12; ++i) {
            circles[i].style.display = stringCommand;
            circles[i].style.background = a[i] + ')';
        }
        if (center == 'yes') {
            circles[12].style.display = stringCommand;
            circles[12].style.background = a[12];
        }
    }
}

function initListeners() {
    choosed_color.addEventListener('click', choseColor);
}

const ColorManager = {
    key: 'choosed_color',
    setColor: function(color_index) {
        localStorage.setItem(this.key, String(color_index));
    },
    getColor: function() {
        const has = localStorage.getItem(this.key);
        return has ? localStorage.getItem(this.key) : 'none';
    }
}



function choseColor() {
    while (true) {
        var index = getRandomInRange(0, 31);
        if (localStorage.getItem('user_color') == null || !localStorage.getItem('user_color').split(',').includes(String(index))) {
            break;
        }
    }
    Buttons.makeVisible(ready);
    Buttons.makeVisibleCircles('no');
    changeColor(colors_start[index], true);
    answer = "Выберите цвет, который больше всего похож на " + colors[index];
    localStorage.setItem('answer', answer);
    choosed_color.innerHTML = "Выберите цвет, который больше всего похож на " + colors[index];
    localStorage.setItem('choosed_color', 'show');
    var user_color = [];
    if (localStorage.getItem('user_color') == null) {
        user_color.push(index);
    } else {
        user_color = localStorage.getItem('user_color').split(',');
        ////console.log(user_color);
        user_color.push(index);

    }
    localStorage.setItem('user_color', user_color);
    ////console.log(user_color);
}

function changeColor(color_chose, isStart) {
    //console.log('color_chose');
    //console.log(color_chose);
    for (let i = 0; i < 12; ++i) {
        //TODO: КРАСИВАЯ ФОРМУЛА, убрать повторение кода
        var color = "rgb(";
        var r_coord = color_chose[0];
        var g_coord = color_chose[1];
        var b_coord = color_chose[2];
        if (i == 0) {
            color += String(r_coord + 20) + "," +
                String(g_coord) + "," +
                String(b_coord) + ")";
        } else if (i == 1) {
            color += String(-20 + r_coord) + "," +
                String(g_coord) + "," +
                String(b_coord) + ")";
        } else if (i == 2) {
            color += String(20 + r_coord) + "," +
                String(g_coord) + "," +
                String(20 + b_coord) + ")";
        } else if (i == 3) {
            color += String(-20 + r_coord) + "," +
                String(g_coord) + "," +
                String(-20 + b_coord) + ")";
        } else if (i == 4) {
            color += String(r_coord) + "," +
                String(g_coord) + "," +
                String(20 + b_coord) + ")";
        } else if (i == 5) {
            color += String(r_coord) + "," +
                String(g_coord) + "," +
                String(-20 + b_coord) + ")";
        } else if (i == 6) {
            color += String(r_coord) + "," +
                String(20 + g_coord) + "," +
                String(20 + b_coord) + ")";
        } else if (i == 7) {
            color += String(r_coord) + "," +
                String(-20 + g_coord) + "," +
                String(-20 + b_coord) + ")";
        } else if (i == 8) {
            color += String(r_coord) + "," +
                String(20 + g_coord) + "," +
                String(b_coord) + ")";
        } else if (i == 9) {
            color += String(r_coord) + "," +
                String(-20 + g_coord) + "," +
                String(b_coord) + ")";
        } else if (i == 10) {
            color += String(20 + r_coord) + "," +
                String(20 + g_coord) + "," +
                String(b_coord) + ")";
        } else if (i == 11) {
            color += String(-20 + r_coord) + "," +
                String(-20 + g_coord) + "," +
                String(b_coord) + ")";
        }
        circles[i].style.background = color;
        localStorage.setItem("hide" + String(circles_names[i]), 'yes');
        colors_circles[i] = color;
        //console.log(i);
        //console.log(color);
    }
    if (isStart) {
        colors_circles[12] = "rqb(255,255,255)";
        localStorage.setItem("center_display", "no");
        localStorage.setItem("label", 0);
    } else {
        var color = 'rgb(' + String(r_coord) + "," + String(g_coord) + "," +
            String(b_coord) + ")";
        circle_main.style.background = color;
        localStorage.setItem("hidecircle_main", 'yes');
        colors_circles[12] = color;
        localStorage.setItem("center_display", "yes");
        circles[12].style.display = 'flex';
        localStorage.setItem(circles_names[12], 'show');
    }
    //console.log(colors_circles[12]);
    localStorage.setItem("colors_circles", colors_circles);

}

function move() {
    var elem = document.getElementById("my_progress");
    var now_width = 0;
    var id = setInterval(frame, 0);

    function frame() {
        now_width = localStorage.getItem('now_width');
        ////console.log(now_width);
        elem.style.width = now_width * 100 + '%';
        document.getElementById("label").innerHTML = "Прогресс:" + now_width * 1 + '%';
    }
}

document.addEventListener("click", function(e) {
    if (e.target.classList.contains('circle_main')) {
        data_steps = localStorage.getItem('steps').split('),');
        let len_steps = data_steps.length;
        for (let i = len_steps - 1; i < 20; ++i) {
            data_steps.push('хз');
        }

        var progress = localStorage.getItem('user_color').split(',').length / 32;
        progress = Number(progress).toFixed(2);
        localStorage.setItem('now_width', progress);
        move();
        localStorage.setItem("steps", '');
        f_key = Cookies.get('id');
        var now_color = localStorage.getItem('user_color').split(',');
        Cookies.set("color", now_color[now_color.length - 1], {
            SameSite: "None; secure"
        });
        var token = Cookies.get('csrftoken');

        $.ajax({
            headers: {
                "X-CSRFToken": token
            },
            type: 'POST',
            url: 'http://192.168.1.94:8000/main/map',
            data: {
                'fKey': f_key,
                'step0': data_steps[0].substring(1),
                'step1': data_steps[1].substring(1),
                'step2': data_steps[2].substring(1),
                'step3': data_steps[3].substring(1),
                'step4': data_steps[4].substring(1),
                'step5': data_steps[5].substring(1),
                'step6': data_steps[6].substring(1),
                'step7': data_steps[7].substring(1),
                'step8': data_steps[8].substring(1),
                'step9': data_steps[9].substring(1),
                'step10': data_steps[10].substring(1),
                'step11': data_steps[11].substring(1),
                'step12': data_steps[12].substring(1),
                'step13': data_steps[13].substring(1),
                'step14': data_steps[14].substring(1),
                'step15': data_steps[15].substring(1),
                'step16': data_steps[16].substring(1),
                'step17': data_steps[17].substring(1),
                'step18': data_steps[18].substring(1),
                'step19': data_steps[19].substring(1)
            },
            success: function(response) {
                ////console.log('Не может быть');
            },
            error: function(response) {
                ////console.log('Ничего нового');
            }
        })
        /*console.log({
                    'fKey':f_key,
                    'step0': data_steps[0].substring(1),
                    'step1': data_steps[1],
                    'step2': data_steps[2],
                    'step3': data_steps[3],
                    'step4': data_steps[4],
                    'step5': data_steps[5],
                    'step6': data_steps[6],
                    'step7': data_steps[7],
                    'step8': data_steps[8],
                    'step9': data_steps[9],
                    'step10': data_steps[10],
                    'step11': data_steps[11],
                    'step12': data_steps[12],
                    'step13': data_steps[13],
                    'step14': data_steps[14],
                    'step15': data_steps[15],
                    'step16': data_steps[16],
                    'step17': data_steps[17],
                    'step18': data_steps[18],
                    'step19': data_steps[19]
                })*/
        Buttons.makeUnVisible(ready);
        Buttons.makeUnVisibleCircles();
        for (let i = 0; i < 13; ++i) {
            circles[i].style.background = 'rgb(255,255,255)';
        }

        if (localStorage.getItem('user_color').split(',').length == 32) {
            var value = document.getElementById('end');
            value.style.display = 'inline';
            localStorage.setItem('end', 'show');
        } else {
            localStorage.setItem("colors_circles", colors_circles);
            Buttons.makeVisible(next);
            Buttons.makeVisible(super_step);
            Buttons.makeVisible(my_progress);
            Buttons.makeVisible(my_bar);
            Buttons.makeVisible(label);
        }

    }

    if (e.target.classList.contains('next')) {
        Buttons.makeUnVisible(next);
        Buttons.makeUnVisible(super_step);
        Buttons.makeUnVisible(label);
        Buttons.makeUnVisible(my_bar);
        Buttons.makeUnVisible(my_progress);
        choseColor();
    }
    let a = localStorage.getItem('colors_circles').split('),');
    if (localStorage.getItem('steps') == null) {
        var now_answer = [];
    } else {
        var now_answer = localStorage.getItem('steps').split(',');
    }
    for (let i = 0; i < 12; ++i) {
        if (e.target.classList.contains(String(circles_names[i]))) {
            //console.log(i)
            var color_string = a[i] + ')';
            let color = color_string.split(',');
            var first = color[0];
            var second = color[1];
            var third = color[2];
            first = first.slice(4);
            third = third.slice(0, third.length - 1);
            color[0] = Number(first);
            color[1] = Number(second);
            color[2] = Number(third);
            now_answer.push('(' + String(color[0]) + ',' + String(color[1]) + ',' + String(color[2]) + ')');
            localStorage.setItem('steps', now_answer);
            changeColor(color, false);
        }
    }
});

initListeners();

for (let i = 0; i < 6; ++i) {
    if (localStorage.getItem(Buttons.name(Buttons.buttons[i])) == 'show') {
        Buttons.demonstrateThis(Buttons.buttons[i], 'inline');
        if (Buttons.buttons[i] == my_progress || Buttons.buttons[i] == label) {
            now_width = localStorage.getItem('now_width');
            my_progress.style.width = now_width * 100 + '%';
            now_width_int = Number(now_width)
            now_width_int = now_width_int.toFixed(2)
            console.log(now_width_int)
            label.innerHTML = "Прогресс:" + String(now_width_int) + '%';
        }
    }

    if (localStorage.getItem(Buttons.name(Buttons.buttons[i])) == 'hide') {
        Buttons.demonstrateThis(Buttons.buttons[i], 'none');
    }
}
if (localStorage.getItem('choosed_color') == 'show') {
    choosed_color.innerHTML = localStorage.getItem('answer');
}

if (localStorage.getItem('circle_down_1') == 'show') {
    Buttons.demonstrateCircles('flex', localStorage.getItem('center_display'));
}

if (localStorage.getItem('circle_down_1') == 'hide') {
    Buttons.demonstrateCircles('none', localStorage.getItem('center_display'));
}

if (navigator.cookieEnabled === false) {

    alert("Cookies отключены! Будьте человеком, включите, а то ничего работать не будет(");

}

if (localStorage.getItem("end") == 'show') {
    document.getElementById(end).style.display = 'inline';
}


for (let i = 0; i < 13; ++i) {
    if (localStorage.getItem("hide" + String(circles_names[i])) == 'yes') {
        document.getElementById(String(circles_names[i])).style.background = colors_circles[i];
    }
}
