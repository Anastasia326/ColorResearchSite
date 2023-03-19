from django.db import models


class UserInfo(models.Model):
    GENDER= [
    ('м', 'Мужской'),
    ('ж', 'Женский'),
    ('хз', 'Ваш пол'),
    ]
    ANSWER = [
        ('д', 'Да'),
        ('н', 'Нет'),
        ('хз', 'Есть ли у вас дальтонизм?')
    ]
    id = models.IntegerField('Id', primary_key=True)
    age = models.IntegerField('Age')
    gender = models.CharField('Gender', max_length=30, choices=GENDER, default='хз')
    city = models.CharField('City', max_length=100)
    profession = models.CharField('Profession', max_length=100)
    daltonizm = models.CharField('Daltonizm', max_length=100, choices=ANSWER, default='хз')


    def __str__(self):
        return str(self.id)

#zecnfkfjn'njuj100
