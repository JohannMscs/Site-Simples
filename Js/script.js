let teacherForms = document.getElementsByClassName("teacher-contract")
for (let teacherForm of teacherForms){
    teacherForm.addEventListener("submit", function(event){
        event.preventDefault()
       let price = teacherForm.price.value
       let hours = teacherForm.hours.value
       let total = price * hours
       console.log(total)
       alert("R$"+total)
})
}