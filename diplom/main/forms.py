from .models import *
from django.forms import ModelForm, TextInput, Textarea, CharField, Select


class UserInfoForm(ModelForm):
    class Meta:
        model = UserInfo
        fields = ["age", "gender", "city", "profession", "daltonizm"]
        exclude = ['id']
        widgets = {
            "age": TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Ваш возраст',
                'autocomplete': "off",
                'style': "width: 130%; height: calc(2em + .75rem + 2px); font-size: 130%",
            }),
            "gender": Select(attrs={'class': 'form-control', 'style': "width: 130%; height: calc(2em + .75rem + 2px); font-size: 130%",}),
            "city": TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Город вашего рождения',
                'autocomplete': "off",
                'style': "width: 130%; height: calc(2em + .75rem + 2px); font-size: 130%",
            }),
            "profession": TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Ваша профессия',
                'autocomplete': "off",
                'style': "width: 130%; height: calc(2em + .75rem + 2px); font-size: 130%",
            }),
            "daltonizm": Select(attrs={'class': 'form-control', 'style': "width: 130%; height: calc(2em + .75rem + 2px); font-size: 130%",}),
        }

    def clean_id(self, new_id):
        data = self.cleaned_data['id']
        self.cleaned_data['id'] = new_id
        data = new_id
        return data

    def clean_id_copy(self, new_id):
        data = self.cleaned_data['id_copy']
        self.cleaned_data['id_copy'] = new_id
        data = new_id
        return data


class ColorForm0(ModelForm):
    class Meta:
        model = Color0
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm1(ModelForm):
    class Meta:
        model = Color1
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm2(ModelForm):
    class Meta:
        model = Color2
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm3(ModelForm):
    class Meta:
        model = Color3
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm4(ModelForm):
    class Meta:
        model = Color4
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm5(ModelForm):
    class Meta:
        model = Color5
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm6(ModelForm):
    class Meta:
        model = Color6
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm7(ModelForm):
    class Meta:
        model = Color7
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm8(ModelForm):
    class Meta:
        model = Color8
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm9(ModelForm):
    class Meta:
        model = Color9
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm10(ModelForm):
    class Meta:
        model = Color10
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm11(ModelForm):
    class Meta:
        model = Color11
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm12(ModelForm):
    class Meta:
        model = Color12
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm13(ModelForm):
    class Meta:
        model = Color13
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm14(ModelForm):
    class Meta:
        model = Color14
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm15(ModelForm):
    class Meta:
        model = Color15
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm16(ModelForm):
    class Meta:
        model = Color16
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm17(ModelForm):
    class Meta:
        model = Color17
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm18(ModelForm):
    class Meta:
        model = Color18
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm19(ModelForm):
    class Meta:
        model = Color19
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm20(ModelForm):
    class Meta:
        model = Color20
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm21(ModelForm):
    class Meta:
        model = Color21
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm22(ModelForm):
    class Meta:
        model = Color22
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm23(ModelForm):
    class Meta:
        model = Color23
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm24(ModelForm):
    class Meta:
        model = Color24
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm25(ModelForm):
    class Meta:
        model = Color25
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm26(ModelForm):
    class Meta:
        model = Color26
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm27(ModelForm):
    class Meta:
        model = Color27
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm28(ModelForm):
    class Meta:
        model = Color28
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm29(ModelForm):
    class Meta:
        model = Color29
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm30(ModelForm):
    class Meta:
        model = Color30
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]


class ColorForm31(ModelForm):
    class Meta:
        model = Color31
        fields = ["fKey", "step0", "step1", "step1", "step3", "step4", "step5", "step6", "step7", "step8", "step9",
                  "step10",
                  "step11", "step12", "step13", "step14", "step15", "step16", "step17", "step18", "step19"]
