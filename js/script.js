const show=()=>{
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const phoneno=document.getElementById("phoneno").value;
    let gender="";
    const genders = document.getElementsByName("gender");
    for(let i=0;i<genders.length;i++){
        if (genders[i].checked){
            gender=genders[i].value;
            break;
        }
    }
    let qualifications=[];
    const qualify=document.getElementsByClassName("Qualification");
    for(let i=0;i<qualify.length;i++){
        if(qualify[i].checked){
            qualifications.push(qualify[i].value);
        }
    }
     const DOB=document.getElementById("date").value;
     let image=document.getElementById("image").files[0];
     let imgname=image ? image.name :"No image selected";
     document.getElementById("result").innerHTML=~
     `
     <h2>Details</h2>
     <p><b>Name:</b>${name}</p>
      <p><b>Email:</b>${email}</p>
       <p><b>Password:</b>${password}</p>
        <p><b>Phone:</b>${phoneno}</p>
         <p><b>Gender:</b>${gender}</p>
          <p><b>Qualification:</b>${qualifications.join(",")}</p>
           <p><b>DOB:</b>${DOB}</p>
            <p><b>Image:</b>${imgname}</p>
     `
}