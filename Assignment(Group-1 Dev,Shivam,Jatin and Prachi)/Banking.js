function validate(){
    const e=document.getElementById("fn").value;
    const f=document.getElementById("ln").value;
    const a=document.getElementById("em").value;
    const b=document.getElementById("mnum").value;
    const g=document.getElementById("add").value;
    const h=document.getElementById("dob").value;
    const i=document.getElementById("ad").value;
    const j=document.getElementById("pan").value;
    const k=document.getElementById("oc").value;
    let o=document.getElementById('marat').value
    let x=document.getElementById('male')
    let y=document.getElementById('female')
    let z=document.getElementById('other')

    if(a==""){
        alert("Email Should be filled")
        return false
    }
    else if(b==""){
        alert("Mobile Number Should be filled")
        return false
    }

    let c=document.getElementById('mr')
    let d=document.getElementById('ms')
    if(c.checked){
        document.write("Title is:" +" " + c.value +"<br>")
    }
    else if(d.checked){
        document.write("Title is:" +" " + d.value +"<br>")
    }

    document.write("Name is: " + e +" " + f +"<br>" + " Address is:" + " " + g + "<br>")

    
    if(x.checked){
        document.write("Gender is:" +" " + x.value +"<br>")
    }
    else if(y.checked){
        document.write("Gender is:" +" " + y.value +"<br>")
    }
    else if(z.checked){
        document.write("Gender is:" +" " + z.value +"<br>")
    }

    document.write("Mobile Number is: " + b  +"<br>" + " E-mail is:" + " " + a + "<br>")
    document.write("DOB is: " + h  +"<br>" + " Adhaar is:" + " " + i + "<br>")

    
    document.write("Marital Status is:" + " " + o + "<br>")
    document.write("Pan Number is: " + j  +"<br>" + " Occupation is:" + " " + k + "<br>")
    
}