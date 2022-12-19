
def findSmallest(arr):
    """ Напишем функцию для поиска наименьшего элемонта массива"""
    smallest = arr[0]  # для хранения наименьшего значения
    smallest_index = 0  # для хранения индекса наименьшего значения
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
    return smallest_index
