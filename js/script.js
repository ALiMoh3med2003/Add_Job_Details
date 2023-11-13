let upload = document.getElementById("upload");
let img = document.getElementById("img");
let icon = document.getElementById("icon");
let icon2 = document.getElementById("icon2");
let h3 =document.querySelector(".h3")
let dropArea = document.getElementById("drop-area");
let reset = document.getElementById("reset");
let h2Text = document.querySelector(".h2");
let file;
upload.addEventListener("change", function(){
    file = this.files[0];
    showFile();
})
dropArea.addEventListener("dragover",(event)=>{
    event.preventDefault();
dropArea.classList.add("active");
h2Text.textContent="Relese To Upload File or";
})
dropArea.addEventListener("dragleave",()=>{
    dropArea.classList.remove("active");
h2Text.textContent="Drag & Drop Files or ";
})
dropArea.addEventListener("drop",(event)=>{
    event.preventDefault();
    file = event.dataTransfer.files[0];
    showFile();
})
function showFile(){
    let fileType=file.type;
    let validExtensions=["image/jpeg","image/jpg","image/png"];
    if(validExtensions.includes(fileType)){
        let fileReader = new FileReader();
        fileReader.onload = ()=>{
            let fileURL =fileReader.result;
            let imgTag =`<img src="${fileURL}"alt="">`;
            dropArea.innerHTML = imgTag
            icon.style.display="none"
            icon2.style.display="none"
            h3.style.display="none"
            img.style.width="250px"
            img.style.height="160px"
            localStorage.setItem( "img" , fileURL)
        }
        fileReader.readAsDataURL(file)
    }else{
        icon.style.display="none"
        icon2.style.display="block"
        h3.style.display="block"
        img.style.display="none"
        dropArea.classList.remove("active");
    }
}
reset.addEventListener("click" ,function () {
    location.reload()
})
/////////////////////////////////////////////////////////////////////////////////////////
var companyName =document.querySelector("#company_name")
var aboutCompany =document.querySelector("#about-company")
var Position =document.querySelector("#Position")
var jobType =document.querySelector("#jobtype")
var salary =document.querySelector("#salary")
var to =document.querySelector("#to")
var jobDescription =document.querySelector("#job-description")
var JobRequirements =document.querySelector("#job-requirements")
var skills =document.querySelector("#skills")
var SaveBtn =document.querySelector("#save")
SaveBtn.addEventListener("click", function(e){
    e.preventDefault()
    if(companyName.value ==="" || aboutCompany.value ==="" || Position.value ==="" || jobType.value ==="" ||salary.value ==="" || to.value ==="" ||jobDescription.value ==="" || JobRequirements.value ==="" || skills.value ===""){
        alert("please fill data")
    }else{
        localStorage.setItem("companyName" , companyName.value)
        localStorage.setItem("aboutCompany" , aboutCompany.value)
        localStorage.setItem("Position" , Position.value)
        localStorage.setItem("img" , img.fileURL)
        localStorage.setItem("jobType" , jobType.value)
        localStorage.setItem("salary" , salary.value)
        localStorage.setItem("to" ,to.value)  
        localStorage.setItem("jobDescription" , jobDescription.value)
        localStorage.setItem("jobRequirements" , JobRequirements.value)
        localStorage.setItem("skills" , skills.value)

        setTimeout(() => {
            location.reload()
        }, 1500);
    }
})
