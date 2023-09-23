let  addTextTaskField = document.getElementById("task")
let  addTbtn = document.getElementById("addTask")
let recordDisplay = document.getElementById('records')
const btnText =addTbtn.innerText;
let taskArray=[]
let edit_id=null

// get data
let objstr =localStorage.getItem("work")
// console.log(objstr)
if(objstr != null){
   // console.log(objstr)
   taskArray = JSON.parse(objstr)
}

seeInfo()

addTbtn.onclick =()=>{
   const task = addTextTaskField.value;
   if(edit_id !=null){
      taskArray.splice(edit_id,1,{'taskName':task})  
      edit_id=null   
    }else{
      taskArray.push({ 'taskName': task });
    }

   // console.log(taskArray)
   saveWork(taskArray)
   addTextTaskField.value=''
  addTbtn.innerText=btnText

}

function saveWork(taskArray){
   // console.log(taskArray)
   let str = JSON.stringify(taskArray)
   localStorage.setItem('work',str)
   seeInfo()
}

function seeInfo() {
   let data = "";
   taskArray.forEach((user, i) => {
     //    console.log(user);
     data += `<tr>
            <th scope="row">${i + 1}</th>
            <td>${user.taskName}</td>
            <td><i class="btn icon fa fa-edit  mx-2" onclick='EditInfo(${i})'></i> 
            <i class="btn  icon fa fa-trash" onclick='DeleteInfo(${i})'></i>
            </td>
          </tr>`;
   });
 
   recordDisplay.innerHTML = data
 //   console.log(data);
 }
  
function DeleteInfo(id){
   // alert(id)
   taskArray.splice(id,1)
   saveWork(taskArray)
}

function EditInfo(id){
   // alert(id)
   edit_id=id
   addTextTaskField.value=taskArray[id].taskName
   addTbtn.innerText='Edit'
 }