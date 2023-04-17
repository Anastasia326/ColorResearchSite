// Цвета для исследования
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

// Стартовые координаты для каждого цвета
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
    24: [200, 200, 150],
    25: [150, 30, 30],
    26: [120, 70, 120],
    27: [80, 120, 50],
    28: [180, 170, 40],
    29: [150, 150, 50],
    30: [70, 160, 150],
    31: [180, 90, 50]
}
// Шаг между цветами при выборе цвета
const step = 20;

// Фон
const base_color = "rgb(242, 233, 228);"

//Выбор случайного цвета(просто числа)
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Получаем объекты
// Прогресс
var my_bar = document.getElementById('my_bar');
// Надпись
var label = document.getElementById('label');
// Движущаяся часть прогресса
var my_progress = document.getElementById('my_progress');
// Надпись с выбором цвета
var choosed_color = document.getElementById('choosed_color');
// Надпись "Если готов..."
var ready = document.getElementById('ready');
// Круги
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
// Кнопка далее
var next = document.getElementById('next');
// Надпись Прекрасно
var super_step = document.getElementById('super');

// Все круги
let circles = [circle_up_2, circle_up_1, circle_left_up_2, circle_left_up_1, circle_left_down_2, circle_left_down_1,
    circle_down_2, circle_down_1, circle_right_down_2, circle_right_down_1, circle_right_up_2, circle_right_up_1, circle_main
];
//Названия кругов
let circles_names = ['circle_up_2', 'circle_up_1', 'circle_left_up_2', 'circle_left_up_1', 'circle_left_down_2', 'circle_left_down_1',
    'circle_down_2', 'circle_down_1', 'circle_right_down_2', 'circle_right_down_1', 'circle_right_up_2', 'circle_right_up_1', 'circle_main'
];
// Цвета кругов
let colors_circles = [];
// Надпись "Выберите цвет..." с сохраненным цветом
let answer = '';

// Все кнопки
const Buttons = {
    ready: ready, // вторая надпись, про центр
    next: next, // кнопка продолжения
    super_step: super_step, // надпись продолжения
    my_bar: my_bar, // прогресс
    my_progress: my_progress, // прогресс двигающийся
    label: label, // прогресс надпись
    buttons: [ready, next, super_step, my_progress, my_bar, label],
    // Название кнопки
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
    // Показываем кнопку
    makeVisible: function(value) {
        value.style.display = 'inline';
        localStorage.setItem(Buttons.name(value), 'show');
    },
    // Скрываем кнопку
    makeUnVisible: function(value) {
        value.style.display = 'none';
        localStorage.setItem(Buttons.name(value), 'hide');
    },
    // Показываем кнопку после обновления страницы
    demonstrateThis: function(value, stringCommand) {
        value.style.display = stringCommand;
    },
    // Показываем круги
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
    // Скрываем круги
    makeUnVisibleCircles: function() {
        for (let i = 0; i < 13; ++i) {
            circles[i].style.display = 'none';
            localStorage.setItem(circles_names[i], 'hide');
        }
    },
    // Показываем круги после обновления страницы
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

// Отслеживаем события(клики)
function initListeners() {
    choosed_color.addEventListener('click', choseColor);
}

// Функция выюора цвета
function choseColor() {
    while (true) {
    // Ищем цвет, который пользователь еще не выбирал
        var index = getRandomInRange(0, 31);
        if (localStorage.getItem('user_color') == null || !localStorage.getItem('user_color').split(',').includes(String(index))) {
            break;
        }
    }
    Buttons.makeVisible(ready);
    Buttons.makeVisibleCircles('no');
    // Запускаем раскрашивае кругов от стартового цвета для выбранного цвета
    changeColor(colors_start[index], true);
    answer = "Выберите цвет, который больше всего похож на " + colors[index];
    localStorage.setItem('answer', answer);
    // Выводим надпись с цветом
    choosed_color.innerHTML = "Выберите цвет, который больше всего похож на " + colors[index];
    localStorage.setItem('choosed_color', 'show');
    var user_color = [];
    // Запоминаем, что пользователь выбрал этот цвет
    if (localStorage.getItem('user_color') == null) {
        user_color.push(index);
    } else {
        user_color = localStorage.getItem('user_color').split(',');
        user_color.push(index);

    }
    localStorage.setItem('user_color', user_color);
}

// Функция раскрашивания кругов
function changeColor(color_chose, isStart) {
    for (let i = 0; i < 12; ++i) {
        var color = "rgb(";
        var r_coord = color_chose[0];
        var g_coord = color_chose[1];
        var b_coord = color_chose[2];
        // Логика будет объяснена на гитхабе
        if (i == 0 || i == 1 || i == 2 || i == 3 || i == 10 || i == 11) {
            r_coord += step * ((-1) ** i);
        }
        if (i == 6 || i == 7 || i == 8 || i == 9 || i == 10 || i == 11) {
            g_coord += step * ((-1) ** i);
        }
        if (i == 2 || i == 3 || i == 4 || i == 5 || i == 6 || i == 7) {
            b_coord += step * ((-1) ** i);
        }
        color += String(r_coord) + "," +
            String(g_coord) + "," +
            String(b_coord) + ")";
        circles[i].style.background = color;
        localStorage.setItem("hide" + String(circles_names[i]), 'yes');
        colors_circles[i] = color;
    }
    // Если первый показ, то аользователь не выбрал цвет, поэтому центральный круг прозрачный(цвета фона)
    if (isStart) {
        colors_circles[12] = "rqb(255,255,255)";
        localStorage.setItem("center_display", "no");
        localStorage.setItem("label", 0);
    } else {
        var r_coord = color_chose[0];
        var g_coord = color_chose[1];
        var b_coord = color_chose[2];
        // иначе красим в цвет, выбранный пользователем
        var color = 'rgb(' + String(r_coord) + "," + String(g_coord) + "," +
            String(b_coord) + ")";
        circle_main.style.background = color;
        localStorage.setItem("hidecircle_main", 'yes');
        colors_circles[12] = color;
        localStorage.setItem("center_display", "yes");
        circles[12].style.display = 'flex';
        localStorage.setItem(circles_names[12], 'show');
    }
    console.log(colors_circles);
    localStorage.setItem("colors_circles", colors_circles);

}

// Продвижение прогресса
function move() {
    var elem = document.getElementById("my_progress");
    // Размер движушайся плашки
    var now_width = 0;
    var id = setInterval(frame, 0);

    function frame() {
        // Прогресс пользователя
        now_width = localStorage.getItem('now_width');
        // Расширяем прогресс
        elem.style.width = now_width * 100 + '%';
        // В надписи меняем прогресс
        document.getElementById("label").innerHTML = "Прогресс:" + now_width * 1 + '%';
    }
}

// Логика при клике
document.addEventListener("click", function(e) {

    // Если клик по центральному кругу - пользователь выбрал цвет
    if (e.target.classList.contains('circle_main')) {
        // Шаги пользователя
        data_steps = localStorage.getItem('steps').split('),');
        let len_steps = data_steps.length;
        const size_bd = 20;
        // Заполняем оставшееся для формата БД
        for (let i = len_steps - 1; i < size_bd; ++i) {
            data_steps.push('хз');
        }
        // Считаем прогресс пользователя
        var progress = localStorage.getItem('user_color').split(',').length / Object.keys(colors).length;
        progress = Number(progress).toFixed(2);
        localStorage.setItem('now_width', progress);
        move();
        // Заполнение БД
        localStorage.setItem("steps", '');
        //  ИД пользователя
        f_key = Cookies.get('id');
        // Нынешний цвет
        var now_color = localStorage.getItem('user_color').split(',');
        // Прокидываем в python для выбора нужной БД
        Cookies.set("color", now_color[now_color.length - 1], {
            SameSite: "None; secure"
        });

        // Отправление информации о выборе пользователя
        var token = Cookies.get('csrftoken');
        $.ajax({
            headers: {
                "X-CSRFToken": token
            },
            type: 'POST',
            url: 'http://192.168.1.94:8000/main/map',
            data: {
                'fKey': f_key,
                'step0': data_steps[0],
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
            },
            success: function(response) {},
            error: function(response) {}
        })
        //Убираем кнопки о результате
        Buttons.makeUnVisible(ready);
        Buttons.makeUnVisibleCircles();
        // Проверяем, дошел ли пользователь до конца
        if (localStorage.getItem('user_color').split(',').length == Object.keys(colors).length) {
            // Если да, то говорим, что он молодец
            var value = document.getElementById('end');
            value.style.display = 'inline';
            localStorage.setItem('end', 'show');
        } else {
            // Иначе показываем прогресс и предлагаем продолжить
            localStorage.setItem("colors_circles", colors_circles);
            Buttons.makeVisible(next);
            Buttons.makeVisible(super_step);
            Buttons.makeVisible(my_progress);
            Buttons.makeVisible(my_bar);
            Buttons.makeVisible(label);
        }
    }

    // Если нажал на "Определить еще цвета"
    if (e.target.classList.contains('next')) {
        // Скрываем прогресс
        Buttons.makeUnVisible(next);
        Buttons.makeUnVisible(super_step);
        Buttons.makeUnVisible(label);
        Buttons.makeUnVisible(my_bar);
        Buttons.makeUnVisible(my_progress);
        // Выбираем новый цвет
        choseColor();
    }

    // Если нажал на другой(не центральный) круг
    let a = localStorage.getItem('colors_circles').split('),');
    if (localStorage.getItem('steps') == null) {
        // Если первый шаг
        var now_answer = [];
    } else {
        // Если шаги уже были
        var now_answer = localStorage.getItem('steps').split(',');
    }
    // Определяем, что выбрал пользователь
    for (let i = 0; i < 12; ++i) {
        if (e.target.classList.contains(String(circles_names[i]))) {
            // Преобразовываем в удобный формат
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
            // Запускаем расскраску от выбора пользователя
            changeColor(color, false);
        }
    }
});

initListeners();

// Логика при обновлении страницы
// Отображение всех кнопок после обновления
for (let i = 0; i < 6; ++i) {
    // Если надо показывать кнопку
    if (localStorage.getItem(Buttons.name(Buttons.buttons[i])) == 'show') {
        Buttons.demonstrateThis(Buttons.buttons[i], 'inline');
        // Отображение прогресса
        if (Buttons.buttons[i] == my_progress || Buttons.buttons[i] == label) {
            now_width = localStorage.getItem('now_width');
            my_progress.style.width = now_width * 100 + '%';
            now_width_int = Number(now_width);
            now_width_int = now_width_int.toFixed(2);
            label.innerHTML = "Прогресс:" + String(now_width_int) + '%';
        }
    }
    // Если не надо показывать
    if (localStorage.getItem(Buttons.name(Buttons.buttons[i])) == 'hide') {
        Buttons.demonstrateThis(Buttons.buttons[i], 'none');
    }
}

// Показ надписи при обновлении
if (localStorage.getItem('choosed_color') == 'show') {
    choosed_color.innerHTML = localStorage.getItem('answer');
}
// Показ всех кругов circle_down_1 - просто люой круг, не важно
if (localStorage.getItem('circle_down_1') == 'show') {
    Buttons.demonstrateCircles('flex', localStorage.getItem('center_display'));
}
// Сокрытие всех кругов circle_down_1 - просто люой круг, не важно
if (localStorage.getItem('circle_down_1') == 'hide') {
    Buttons.demonstrateCircles('none', localStorage.getItem('center_display'));
}
// Показ надписи про конец исследования
if (localStorage.getItem("end") == 'show') {
    document.getElementById('end').style.display = 'inline';
}
// Показ всех кругов при обновлении
for (let i = 0; i < 13; ++i) {
    if (localStorage.getItem("hide" + String(circles_names[i])) == 'yes') {
        document.getElementById(String(circles_names[i])).style.background = colors_circles[i];
    }
}

// Проверка, что у человека включены куки
if (navigator.cookieEnabled === false) {
    alert("Cookies отключены! Будьте человеком, включите, а то ничего работать не будет(");
}
