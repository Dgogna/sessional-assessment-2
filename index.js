


// document.getElementById("find").addEventListener("click",()=>{
    // var to_find=document.getElementById("search").value;
    // to_find--;
    var xhrRequest=new XMLHttpRequest();

    xhrRequest.onload = function(){
        var data=JSON.parse(xhrRequest.response);
        var items=data.length;
        let person_html="";
        for(var i=0;i<data.length;i++){
            console.log(data[i].name);
            let str=`
            
            <div class="col">
            <div class="card ">
  
            <div class="card-body">
              
            <h5 class="card-title">${data[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${data[i].username}</h6>
            <p class="card-text">Email: ${data[i].email}</p>
            <p class="card-text">Phone: ${data[i].phone}</p>
            <!-- Button trigger modal -->
            <button type="button" id="${i}" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            More info
            </button>

            <!-- Modal -->
            
          </div>
            </div>
          </div>


            
            `
            person_html+=str;
        }
        document.getElementById("content").innerHTML=person_html;

    };

    xhrRequest.open("get","https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09#",true);
    xhrRequest.send();

// })

const exampleModal = document.getElementById('staticBackdrop')
exampleModal.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
//   console.log("hello");
var data=JSON.parse(xhrRequest.response);
  const button = event.relatedTarget
//   console.log(button.id);
  var person=data[button.id].name;
  document.getElementById("staticBackdropLabel").innerHTML=person;
  document.getElementById("name").innerHTML=`name: ${data[button.id].name} `;
  document.getElementById("username").innerHTML=`username: ${data[button.id].username} `;
  document.getElementById("email").innerHTML=`email: ${data[button.id].email} `;
  document.getElementById("adress").innerHTML=`address: ${data[button.id].address.street} `;
  document.getElementById("phone").innerHTML=`phone: ${data[button.id].phone} `;
//   document.getElementById("website").innerHTML=`website: ${data[button.id].website}`;
// anastasia.net
// http://anastasia.net/
  document.getElementById("website").innerHTML=`website: <a href="http://${data[button.id].website}/" target="_blank">http://${data[button.id].website}</a>`;
  

});

