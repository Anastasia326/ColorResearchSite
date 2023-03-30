from django.shortcuts import render, redirect
from .forms import *
from django.views.generic import DetailView
from django.shortcuts import HttpResponse


def is_ajax(request):
    return request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest'

# Create your views here.
def index(request):
    error = ''
    id = request.session.session_key
    if not id:
        request.session.cycle_key()
    if not request.COOKIES.get('Egor'):
        request.COOKIES['Egor'] = id
        html = redirect('map')
        html.set_cookie('Egor', id)

    print(request.COOKIES.get('Egor'))
    print(request.COOKIES.get('sessionid'))

    if not request.COOKIES.get('logged_in'):
        if request.method == 'POST':
            form = UserInfoForm(request.POST)
            if form.is_valid():
                form.cleaned_data['id'] = id
                form.clean_id(id)
                form.save()
                request.COOKIES['logged_in'] = True
                html.set_cookie('logged_in', True)
                return html
            else:
                error = 'Форма была неверной'

        form = UserInfoForm()
        context = {
            'form': form,
            'error': error
        }
        return render(request, 'index.html', context)
    else:
        if request.method == "POST" and is_ajax(request):
            color = request.COOKIES.get('color')
            #TODO: логика выбора формы
            form = Color0(request.POST)
            print('GGG')
            if form.is_valid():
                form.save()
                print('AAAAAAAAAAAAAA')
            else:
                errors = form.errors.as_json()
                print(errors)

        return render(request, 'map.html')


def about(request):
    return render(request, 'about.html')


def results(request):
    return render(request, 'results.html')
