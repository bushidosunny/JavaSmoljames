def add(a, b, c):
    return a + b + c

numbers = [1, 2, 3]
result = add(*numbers)
print(result)  # Output: 6

result = add(numbers,[0],[1])
print(result)  # Output