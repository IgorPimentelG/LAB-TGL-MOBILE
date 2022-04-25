function formatNumbers(numbers: string) {
    let listNumbers = numbers.split(',').map((number) => Number(number));
    listNumbers = listNumbers.sort(sortNumbers);
    
    return listNumbers.map((number) => {
        if( number < 10 ) {
            return `0${number}`
        }
        return String(number);
    }).join(', ');
}

function formatPrice(price: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
}

function formatDate(date: string): string {
    return new Intl.DateTimeFormat('pt-BR').format(new Date(date));
}


// Auxiliar
function sortNumbers(number1: number, number2: number) {
    if(number1 < number2) {
        return -1;
    } else if(number1 > number2) {
        return 1;
    } else {
        return 0;
    }
}

export { formatNumbers, formatPrice, formatDate };