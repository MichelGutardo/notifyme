// Apenas para ensino, qualquer coisa desse tipo é chata pra caramba:
var val_notifyme,obj_notifyme, objEvent_notifyme;


$(document).ready(function() {
    setVal();
    hasEvent();
    setInterval(hasChange,2500);

    obj_notifyme.change(function(){        
        saveTag();
    });

});

function saveTag(){
    
    sessionStorage.setItem("tag", obj_notifyme.val());    
    alert("SAVE " +  sessionStorage.getItem("tag"));
}

function loadTag(){
    alert("LOAD " +  sessionStorage.getItem("tag"));
   return sessionStorage.getItem("tag");
}

function hasChange(){
    if(!objEvent_notifyme){
        if(val_notifyme != obj_notifyme.text()){

            alert("!!!: Valor alterado de: (" + val_notifyme + ") para (" + obj_notifyme.text()+")");
            val_notifyme = obj_notifyme.text()
        }
    }
}

function setVal(){
    //.value == null || $("#objnotify").value =="" ? loadTag() : $("#objnotify").value);
    obj_notifyme = $("#objnotify");
    obj_notifyme.value = loadTag();
    val_notifyme = obj_notifyme.text();
    
}

function hasEvent(){
    //buttons?
    if(obj_notifyme.is("input") ||  obj_notifyme.is("select") || obj_notifyme.is("textarea")) {
        objEvent_notifyme =true;
    }else{
        objEvent_notifyme = false;
    }

}
