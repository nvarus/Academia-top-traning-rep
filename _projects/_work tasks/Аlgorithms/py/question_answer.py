""" 
    Программа задает пользователю вопросы и
    в конце выводит количество правильных ответов
"""


quest = ['Сколько лет длилась Столетняя война?',
         'В каком году произошла битва при Павии?',
         'В каком году до нашей эры был убит Гай Юлий Цезарь?']
answer = ['116', '1525', '44']
count = 0

for i, value in enumerate(quest):
    print('Вопрос №', i + 1, ':', value)
    enter_answer = input()
    if enter_answer == answer[i]:
        print('Верно')
        count += 1
    else:
        print('Не верно, правильный ответ:', answer[i])


print('Введено правильных ответов:', count)
