def main():
    """
        Главная функция
    """
    Arr = [1, 45, 78, 99, 155, 158, 200, 300, 999]
    print(binary_search(Arr, 1))
    print(binary_search(Arr, 45))
    print(binary_search(Arr, 78))
    print(binary_search(Arr, 99))
    print(binary_search(Arr, 155))
    print(binary_search(Arr, 158))
    print(binary_search(Arr, 200))
    print(binary_search(Arr, 300))
    print(binary_search(Arr, 999))


def binary_search(Arr, item):
    low = 0
    high = len(Arr) - 1

    while low <= high:
        mid = (low + high) // 2
        guess = Arr[mid]
        if guess == item:
            return mid
        elif guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None


main()
