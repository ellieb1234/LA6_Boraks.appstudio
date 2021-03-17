
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

btnSubmit.onclick=function(){
  for(i=0;i<members.length;i++){
    if(pitName.value == members[i])
      lblNotify.value='You are a member.'
  }
  if(lblNotify.value!='You are a member.'){
    lblNotify.value='You are not a member.'
    members.push(iptName.value)
  }
}
