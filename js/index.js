const result = document.getElementById('result');

const getValue = (value) => {
    if(result.value.length > 16) {
        alert('Max value exceeded')
    }
    result.value += value;
}

const calValue = () => {
    if (result.value == '') {
      return  result.value = '';
    } else {
    result.value = eval(result.value)
    }
}

const clearValue = (value) => {
    result.value = value;
}