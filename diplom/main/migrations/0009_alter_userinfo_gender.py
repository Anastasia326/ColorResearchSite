# Generated by Django 4.1.7 on 2023-03-12 12:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_alter_userinfo_gender'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userinfo',
            name='gender',
            field=models.CharField(choices=[('м', 'Мужской'), ('ж', 'Женский'), ('хз', 'Без ответа')], max_length=30, verbose_name='Gender'),
        ),
    ]
