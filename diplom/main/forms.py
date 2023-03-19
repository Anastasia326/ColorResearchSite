from .models import UserInfo
from django.forms import ModelForm, TextInput, Textarea, CharField, Select


class UserInfoForm(ModelForm):
    class Meta:
        model = UserInfo
        fields = ["age", "gender", "city", "profession", "daltonizm"]
        widgets = {
            "age": TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Ваш возраст',
                'autocomplete':"off"
            }),
            "gender": Select(attrs={'class': 'form-control'}),
            "city": TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Город вашего рождения',
                'autocomplete':"off"
            }),
            "profession": TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Ваша профессия',
                'autocomplete':"off"
            }),
            "daltonizm": Select(attrs={'class': 'form-control'}),
        }

