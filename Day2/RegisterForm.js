function validateForm()
{

	document.getElementById('firstn').innerHTML = document.getElementById('name').value
	document.getElementById('add').innerHTML = document.getElementById('address').value
	document.getElementById('mobile').innerHTML = document.getElementById('mnum').value
  document.getElementById('em').innerHTML = document.getElementById('email').value
	document.getElementById('nty').innerHTML = document.getElementById('nationality').value
  document.getElementById('onp').innerHTML = document.getElementById('one').value
  document.getElementById('twp').innerHTML = document.getElementById('two').value
  document.getElementById('grp').innerHTML = document.getElementById('three').value

  var n=document.getElementById('name').value;
  var o=document.getElementById('address').value;
  var p=document.getElementById('mnum').value
  var q=document.getElementById('email').value
  var s=document.getElementById('one').value
  var t=document.getElementById('two').value
  var u=document.getElementById('three').value
  if(n.length=="" || n.length>12){
    alert("name should not be empty")
  }
  else if(o.length==""){
    alert("Enter Your Address")
  }
  else if(p.length==""){
    alert("Enter Your Number")
  }
  else if(q.length==""){
    alert("Enter Valid E-mail")
  }
  else if(s.length==""){
    alert("Enter 10th Percentage")
  }
  else if(t.length==""){
    alert("Enter 12th Percentage")
  }
  else if(u.length==""){
    alert("Enter Graduation Percentage")
  }



	if(document.getElementById('male').checked)
	{
		document.getElementById("disp").innerHTML= document.getElementById("male").value;
	}
		else if(document.getElementById('female').checked)
	{
		document.getElementById("disp").innerHTML = document.getElementById("female").value;
	}


    var markedCheckbox = document.getElementsByName('sub');
  for (var checkbox of markedCheckbox) {
  if (checkbox.checked)
  document.body.append(checkbox.value + ' ');
  }


}