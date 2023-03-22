from django.shortcuts import render, redirect
from .forms import UserInfoForm
from django.views.generic import DetailView


# Create your views here.
def index(request):
    colors = {0:'Белый', 1:'Черный', 2: 'Красный',3: 'Зеленый', 4: 'Серый', 5:'Синий',
              6: 'Желтый', 7: 'Голубой', 8:'Розовый', 9:'Медный',10: 'Золотой',
              11: 'Серебряный', 12: 'Коричневый', 13: 'Бронзовый', 14:'Ультрамарин',
              15:'Фуксия', 16: 'Алый', 17: 'Оранжевый',18: 'Бурый', 19: 'Лиловый',
              20: 'Фиолетовый', 21: 'Васильковый', 22: 'Болотный', 23: 'Вишневый',
              24: 'Бежевый', 25: 'Бордовый', 26: 'Сиреневый', 27: 'Изумрудный',
              28: 'Лимонный', 29: 'Оливковый', 30: 'Бирюзовый', 31: 'Коралловый'}
    colors_start = {0: (255, 255, 255), 1:(0,0,0), 2:(255, 0, 0), 3: (0, 255, 0), 4: (128, 128, 128),
                    5: (0, 0, 255), 6: (255, 255, 0), 7: (0, 255, 255), 8:(255, 192, 203),
                    9: (204, 119, 34), 10: (255, 215, 0), 11: (192, 192, 192), 12:(139, 69, 19),
                    13: (255, 218, 185), 14:(0, 0, 128), 15: (255, 0, 255), 16: (255, 36, 0),
                    17: (255, 165, 0), 18: (190, 245, 116), 19: (219, 112, 147), 20: (128, 0, 128),
                    21: (100, 149, 237), 22: (240, 230, 140), 23: (220, 20, 60), 24: (245, 245, 220),
                    25: (139, 0, 0), 26: (238, 130, 238), 27: (127, 255, 0), 28: (253, 233, 16),
                    29: (128, 128, 0), 30: (64, 224, 208), 31: (255, 127, 80)}
    error = ''
    if not request.COOKIES.get('logged_in'):
        print(request)
        if request.method == 'POST':
            form = UserInfoForm(request.POST)
            if form.is_valid():
                form.save()
                request.COOKIES['logged_in'] = True
                print(request.COOKIES['logged_in'])
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
