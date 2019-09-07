const result = document.getElementById('result');

const getValue = (value) => {
    result.value += value;
}

const calValue = () => {
    if (result.value == '') {
        return result.value == '' 
    }
    result.value = eval(result.value)
}

const clearValue = (value) => {
    result.value = value;
}