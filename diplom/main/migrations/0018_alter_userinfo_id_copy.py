# Generated by Django 4.1.7 on 2023-04-06 14:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0017_remove_userinfo_id_p_userinfo_id_copy_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userinfo',
            name='id_copy',
            field=models.CharField(default='a', max_length=1000, verbose_name='Id_copy'),
        ),
    ]