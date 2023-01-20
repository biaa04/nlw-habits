const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")
button.addEventListener("click", add)
form.addEventListener("change", save)
//de tras pra frente ele corta 5

function add(){
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  //const today = "25/01"
  const dayExists = nlwSetup.dayExists(today)
  if(dayExists){
    alert("O dia já existe ❌")
    return
  }
  alert("Dia adicionado com sucesso ✅")
  nlwSetup.addDay(today)
 
}

function save(){
  //JSON.stringify(nlwSetup.data) transforma o objeto nlwSetup.data em string
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
//const data ={
//  run: ["01-01", "01-02", "01-06", "01-07", "01-08", "01-09"],
//  journal: ["01-03"],
//}
//
nlwSetup.setData(data)
nlwSetup.load()