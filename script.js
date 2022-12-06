function cardInput(input) {
    if (input.length == 0) // prevents whitespace before input
        return input

    if (input.length == 20) // prevents whitespace after input
        return input

    if (input.length % 5 == 0) // set whitespace after each 4 symbols
        return input + " "

    return input
}