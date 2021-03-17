
btnAdd.onclick=function(){
  num1=parseInt(iptNum1.value)
  num2=parseInt(iptNum2.value)
  lblAnswer.value=`${num1} + ${num2} = ${num1 + num2}`
}

btnMultiply.onclick=function(){
  num1=parseInt(iptNum1.value)
  num2=parseInt(iptNum2.value)
  lblAnswer.value=`${num1} x ${num2} = ${num1 * num2}`
}
