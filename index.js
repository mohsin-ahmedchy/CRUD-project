
let crud = new function(){
 this.element = document.getElementById("show");
 this.array = [];
/* FetchFunction */
 this.FetchAll = function(){
   let data = " ";
   if(this.array.length > 0){
       for(let i = 0; i < this.array.length; i++){
        data += '<tr>';
        data += '<td>'+(i+1)+". " + this.array[i] + '</td>';
        data += '<td><button onclick="crud.Edit(' + i + ')"  class="btn btn-secondary">Edit</button></td>';
        data += '<td><button onclick="crud.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';
        data += '</tr>';
       }

   }
   this.Count(this.array.length);
   return this.element.innerHTML = data;

 };
/* create part*/
 this.Create = function(){
   element = document.getElementById("addInput");
   let tasks = element.value;
   if(tasks){
       this.array.push(tasks.trim());
        element.value = " ";
        this.FetchAll();
   }

 };

/* edit part */
 this.Edit = function(item){
    var element = document.getElementById('edit');
    element.value = this.array[item];
    
    self = this;
    document.getElementById('save-edit').onsubmit = function() {
      var tasks = element.value;
      if (tasks) {
        self.array.splice(item, 1, tasks.trim());
        self.FetchAll();
        closeInput();
     }
   }
}

 /* delete part */
 this.Delete = function(item){
    this.array.splice(item, 1);
    this.FetchAll();
 };

 /* count part */
 this.Count = function(data){
    var element  = document.getElementById('count');
    var name = 'Save items.';

    if (data) {
        if(data >= 1){
            name = 'Save items'
        }
      element.innerHTML = name + ' ' + data ;
    } 
    else {
      element.innerHTML = 'No ' + name;
    }
  };
}
crud.FetchAll();

function closeInput(){
     document.getElementById("editResult").style.display = "none";
 };