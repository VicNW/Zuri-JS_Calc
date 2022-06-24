let num = parseInt(prompt("Enter a Number"));
document.write("The first number you inputted is: " + num + "<br>")

function operateNum() {

  let operation = (prompt("Enter an operation (+,-,*,/): "));
  let number = parseInt(prompt("Enter a Number")); 
  
  if (operation === "+") {
    num += number;
    document.write("plus " + number + " = " + num + "<br>")
  }
  
  else if (operation === "-") {
    num -= number;
    document.write("minus " + number + " = " + num + "<br>")
  }

  else if (operation === "*") {
    num *= number;
    document.write("multiplied by " + number + " = " + num + "<br>")
  }
  
  else if (operation === "/") {
    num /= number;
    document.write("divided by " + number + "= " + num + "<br>")
  }
  let proceed = prompt(" The result is " + num + "\n" + "do you want to continue? (y/n): ")

    if (proceed === 'y') {
      operateNum();
    }

  return operateNum;
}

operateNum()
