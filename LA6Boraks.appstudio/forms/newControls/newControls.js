rdbPercent.onchange=function(){
  pgbPercent.value=parseInt($("#rdbPercent_" + rdbPercent.value).val())
}

sldPercent_input.onchange=function(){
  pgbPercent.value=sldPercent.getValue()
}

hmbGoddess.onclick=function(x){
    if (typeof(x)=="object") {
        return;
    }
    if(x=="Oslira"){
        lblName.value='Oslira is the goddess of the harvest and fall'
    }
    if(x == "Rutala"){
        lblName.value='Rutala is the goddess of stories and winter'
    }
    if (x=="Intris"){
        lblName.value='Intris is the goddess of the sun and summer'
    }
    if (x=="Medea"){
      lblName.value='Medea is the goddess of marriage and spring'
    }
}

pgbPercent.onclick=function(){
  alert(`The percentage is ${pgbPercent.value}%.`)
}