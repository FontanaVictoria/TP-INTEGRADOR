function valorEntrada(){
    var capCantidad = document.getElementById('cantidad').value;
    var capCategoria = document.getElementById('categoria').value;
    const TICKET = 200;
    var resumenTotal= 0;
    var resumenTotal = capCantidad*TICKET;

    if(capCategoria==0){
      resumenTotal= capCantidad*TICKET;
    }
    if(capCategoria==1){
        resumenTotal= capCantidad*TICKET*0.2;
      }
      if(capCategoria==2){
        resumenTotal= capCantidad*TICKET*0.5;
      }
      if(capCategoria==3){
        resumenTotal= capCantidad*TICKET*0.85;
      }
    document.getElementById('total').innerText = resumenTotal;
}
function controlNombre(){ 
 const name = nombre.value;
 const validaNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
 
 if(nombre.value===""){
   nombre.classList.add("is-invalid");
   nombre.focus();
  }
  else{
    nombre.classList.remove('is-invalid');
  }
  if(validaNombre.test(name)){
     nombre.classList.remove('is-invalid');
   }
   else{
     nombre.classList.add("is-invalid");
     nombre.focus();
   }
 }   
function controlApellido(){ 
  const surname = apellido.value;
  const validaApellido = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
      if(apellido.value===""){
        apellido.classList.add("is-invalid");
        apellido.focus();
        }
       else{
       apellido.classList.remove('is-invalid');
      }

      if(validaApellido.test(surname)){
        apellido.classList.remove('is-invalid');
      }
      else{
        apellido.classList.add("is-invalid");
        apellido.focus();
      }
}
function controlCorreo(){ 
  const correo = mail.value;
  const validaEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if(mail.value===""){
     mail.classList.add("is-invalid");
     mail.focus();
    }
    else{
    mail.classList.remove('is-invalid');
  } 
  if(validaEmail.test(correo)){
    mail.classList.remove('is-invalid');
  }
  else{
    mail.classList.add("is-invalid");
     mail.focus();
  }
}

   function borrar(){
     var cantTotal =document.getElementById('total');
     cantTotal.textContent="";
     mail.classList.remove('is-invalid');
     apellido.classList.remove('is-invalid');
     nombre.classList.remove('is-invalid');
     cantidad.classList.remove("is-invalid");
    }
    
    function controlCantidad(){
      var capCantidad = document.getElementById('cantidad').value;
      if(Math.sign(capCantidad) ==0 || Math.sign(capCantidad)<0){
        cantidad.classList.add("is-invalid");
        cantidad.focus();
      }
      else{
        cantidad.classList.remove("is-invalid");
        valorEntrada();
      } 
    }  

    const BTNCLICK = document.getElementById('botonResumen');
    const BTNCLICK2 = document.getElementById('botonBorrar');
    BTNCLICK2.addEventListener('click',borrar);
    BTNCLICK.addEventListener('click',controlNombre);
    BTNCLICK.addEventListener('click',controlApellido);
    BTNCLICK.addEventListener('click',controlCorreo);
    BTNCLICK.addEventListener('click',controlCantidad);
    
    
    
    
    