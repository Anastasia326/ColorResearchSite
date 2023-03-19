from django.shortcuts import render, redirect
from .forms import UserInfoForm
from django.views.generic import DetailView


# Create your views here.
def index(request):
    colors = {0:'Белый', 1:'Черный', 2: 'Красный',3: 'Зеленый', 4: 'Серый', 5:'Синий',
              6: 'Желтый', 7: 'Голубой', 8:'Розовый', 9:'Медный',10: 'Золотой',
              11: 'Серебряный', 12: 'Коричневый', 13: 'Бронзовый', 14:'Кирпичный',
              15:'Фуксия', 16: 'Алый', 17: 'Оранжевый',18: 'Бурый', 19: 'Лиловый',
              20: 'Фиолетовый', 21: 'Малиновый', 22: 'Болотный', 23: 'Вишневый',
              24: 'Бежевый', 25: 'Бордовый', 26: 'Сиреневый', 27: 'Изумрудный',
              28: 'Лимонный', 29: 'Оливковый', 30: 'Бирюзовый', 31: 'Коралловый'}
    error = ''
    if not request.COOKIES.get('logged_in'):
        if request.method == 'POST':
            form = UserInfoForm(request.POST)
            if form.is_valid():
                form.save()
                request.COOKIES['logged_in'] = True
                html = redirect('map')
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
        return render(request, 'map.html')


def about(request):
    print(request)
    return render(request, 'about.html')


def results(request):
    print(request)
    return render(request, 'results.html')
