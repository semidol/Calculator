document.addEventListener('keydown', input)

let sum = 0;
let isSign = false;
let isFirst = true;
let sign;
let isPoint = false;
let isEqual = false;

function input(event) {
  if (event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/' ) {
    if (!isSign) {

      if (isFirst) {
        sum = +answer.textContent;
        sign = event.key;
        isFirst = false;
        calculation.textContent = '';
      } else {
        switch (sign) {
          case '+':
            sum += +answer.textContent;
            break;
          case '-':
            sum -= +answer.textContent;
            break;
          case '*':
            sum *= +answer.textContent;
            break;
          case '/':
            sum /= +answer.textContent;
            break;
          }
          sign = event.key;
        }

        calculation.textContent += answer.textContent + sign;
        answer.textContent = sum;
        isSign = true;
        isPoint = false;

      } else {
        sign = event.key;
        calculation.textContent = calculation.textContent.slice(0, calculation.textContent.length - 1) + event.key;
      }
    }

  if (Number(event.key) || (event.key == 0)) {
    if (!isSign && !isEqual) {
      answer.textContent += event.key;
    } else {
      answer.textContent = event.key;
      isSign = false;
      isEqual = false;
      isPoint = false;
    }
  }

  if (event.key == 'Backspace') {
    if (!isSign) {
      answer.textContent = answer.textContent.slice(0, answer.textContent.length - 1);
    }
  }

  if (event.code == 'KeyC') {
    sign = undefined;
    answer.textContent = '';
    calculation.textContent = '';
    sum = 0;
    isFirst = true;
    isEqual = false;
  }

  if (event.key == '.') {
    if (!isPoint) {
      answer.textContent += '.';
      isPoint = true;
    }
  }

  if (event.key == '=' || event.key == 'Enter') {
    switch (sign) {
      case '+':
        sum += +answer.textContent;
        break;
      case '-':
        sum -= +answer.textContent;
        break;
      case '*':
        sum *= +answer.textContent;
        break;
      case '/':
        sum /= +answer.textContent;
        break;
      }
    calculation.textContent += answer.textContent + '=';
    answer.textContent = sum;
    isFirst = true;
    isEqual = true;
  }
}

for(let elem of document.querySelectorAll('.num')) {
  elem.addEventListener('click', function() {
    if (!isSign && !isEqual) {
      answer.textContent += elem.textContent;
    } else {
      answer.textContent = elem.textContent;
      isSign = false;
      isEqual = false;
      isPoint = false;
    }
  })
}

for(let elem of document.querySelectorAll('.sign')) {
  elem.addEventListener('click', function() {
    if (!isSign) {

      if (isFirst) {
        sum = +answer.textContent;
        sign = elem.textContent;
        isFirst = false;
        calculation.textContent = '';
      } else {
        switch (sign) {
          case '+':
            sum += +answer.textContent;
            break;
          case '-':
            sum -= +answer.textContent;
            break;
          case '*':
            sum *= +answer.textContent;
            break;
          case '/':
            sum /= +answer.textContent;
            break;
          }
          sign = elem.textContent;
        }

        calculation.textContent += answer.textContent + sign;
        answer.textContent = sum;
        isSign = true;
        isPoint = false;

      } else {
        sign = elem.textContent;
        calculation.textContent = calculation.textContent.slice(0, calculation.textContent.length - 1) + elem.textContent;
      }
  })
}

c.addEventListener('click', function() {
  sign = undefined;
  answer.textContent = '';
  calculation.textContent = '';
  sum = 0;
  isFirst = true;
  isEqual = false;
})


equal.addEventListener('click', function() {
  switch (sign) {
    case '+':
      sum += +answer.textContent;
      break;
    case '-':
      sum -= +answer.textContent;
      break;
    case '*':
      sum *= +answer.textContent;
      break;
    case '/':
      sum /= +answer.textContent;
      break;
    }
  calculation.textContent += answer.textContent + '=';
  answer.textContent = sum;
  isFirst = true;
  isEqual = true;
})

del.addEventListener('click', function() {
  if (!isSign) {
    answer.textContent = answer.textContent.slice(0, answer.textContent.length - 1);
  }
})

point.addEventListener('click', function() {
  if (!isPoint) {
    answer.textContent += '.';
    isPoint = true;
  }
})
