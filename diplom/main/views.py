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
    if not request.COOKIES.get('id'):
        request.COOKIES['id'] = id
        html = redirect('map')
        html.set_cookie('id', id)


    if not request.COOKIES.get('logged_in'):
        if request.method == 'POST':
            author = UserInfo(id=str(id))
            form = UserInfoForm(request.POST, instance=author)
            if form.is_valid():
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
            color = request.COOKIES.get('color')
            form = colors_bd[int(color)]
            if form.is_valid():
                form.save()
            else:
                errors = form.errors.as_json()

        return render(request, 'map.html')


def about(request):
    return render(request, 'about.html')


def results(request):
    return render(request, 'results.html')
