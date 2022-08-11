

// document.getElementById("person_btn").addEventListener("click",()=>{
      

var xhrRequest=new XMLHttpRequest();

xhrRequest.open("get","https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09#",true);
xhrRequest.send();

      const exampleModal = document.getElementById('exampleModal')
        exampleModal.addEventListener('show.bs.modal', event => {
        // Button that triggered the modal
        var person_id=document.getElementById("floatingInputGrid").value;
        person_id--;
        var data=JSON.parse(xhrRequest.response);
        const button = event.relatedTarget
        //   console.log(button.id);
        var person=data[person_id].name;
        document.getElementById("staticBackdropLabel").innerHTML=person;
        document.getElementById("name").innerHTML=`name: ${data[person_id].name}`;
        document.getElementById("username").innerHTML=`username: ${data[person_id].username}`;
        document.getElementById("email").innerHTML=`email: ${data[person_id].email}`;
        document.getElementById("adress").innerHTML=`address:  ${data[person_id].address.street}`;
        document.getElementById("phone").innerHTML=`phone: ${data[person_id].phone}`;
        //   document.getElementById("website").innerHTML=`website: ${data[button.id].website}`;
        // anastasia.net
        // http://anastasia.net/
        document.getElementById("website").innerHTML=`website: <a href="http://${data[person_id].website}/" target="_blank">http://${data[person_id].website}</a>`;



        })

    // });
    


