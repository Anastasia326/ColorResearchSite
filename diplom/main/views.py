from django.shortcuts import render, redirect
from .forms import *
from django.views.generic import DetailView
from django.shortcuts import HttpResponse


# Проверка, что запрос ajax
def is_ajax(request):
    return request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest'


# Запуск начала исследования
def index(request):
    error = ''
    # Получаем ИД сессии, это будет наш ключ user-а
    id = request.session.session_key
    if not id:
        # Если его нет- создаем
        request.session.cycle_key()
    if not request.COOKIES.get('id'):
        # Запоминаем id user-a
        request.COOKIES['id'] = id
        html = redirect('map')
        html.set_cookie('id', id)
    # Если пользователь еще не заполнил данные
    if not request.COOKIES.get('logged_in'):
        if request.method == 'POST':
            # Записываем в БД данные пользователя
            user_info = UserInfo(id=str(id))
            form = UserInfoForm(request.POST, instance=user_info)
            if form.is_valid():
                form.save()
                # Запоминаем, что он заполнил данные
                request.COOKIES['logged_in'] = True
                html.set_cookie('logged_in', True)
                # ренаправляем на исследование - map
                return html
            else:
                error = 'Форма была неверной'

        form = UserInfoForm()
        context = {
            'form': form,
            'error': error
        }
        # Иначе страница с заполнением данных
        return render(request, 'index.html', context)
    else:
        colors_bd = [ColorForm0(request.POST), ColorForm1(request.POST), ColorForm2(request.POST),
                     ColorForm3(request.POST), ColorForm4(request.POST), ColorForm5(request.POST),
                     ColorForm6(request.POST),
                     ColorForm7(request.POST), ColorForm8(request.POST), ColorForm9(request.POST)
            , ColorForm10(request.POST), ColorForm11(request.POST), ColorForm12(request.POST),
                     ColorForm13(request.POST), ColorForm14(request.POST), ColorForm15(request.POST),
                     ColorForm16(request.POST),
                     ColorForm17(request.POST), ColorForm18(request.POST), ColorForm19(request.POST)
            , ColorForm20(request.POST), ColorForm21(request.POST), ColorForm22(request.POST),
                     ColorForm23(request.POST), ColorForm24(request.POST), ColorForm25(request.POST),
                     ColorForm26(request.POST),
                     ColorForm27(request.POST), ColorForm28(request.POST), ColorForm29(request.POST),
                     ColorForm30(request.POST), ColorForm31(request.POST)]
        if request.method == "POST" and is_ajax(request):
            # Если был запрос ajax
            color = request.COOKIES.get('color')
            # Записываем данные по выбору пользователя в БД
            form = colors_bd[int(color)]
            if form.is_valid():
                form.save()
            else:
                errors = form.errors.as_json()
        return render(request, 'map.html')


# Запуск страницы о нас
def about(request):
    return render(request, 'about.html')


# Запуск страницы результатов
def results(request):
    return render(request, 'results.html')
