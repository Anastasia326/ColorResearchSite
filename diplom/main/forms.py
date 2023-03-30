from .models import *
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

    def clean_id(self, new_id):
        data = self.cleaned_data['id']
        self.cleaned_data['id'] = new_id
        data = new_id
        return data


class Color0(ModelForm):
    class Meta:
        model = Color0
        fields = ["fKey", "step0","step1","step1","step3","step4", "step5","step6","step7","step8","step9", "step10",
                  "step11","step12","step13","step14", "step15","step16","step17","step18","step19"]


