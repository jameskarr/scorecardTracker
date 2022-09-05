const deleteBtn = document.querySelectorAll('.fa-trash')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')
const addScore = document.querySelectorAll('.fa-circle-plus')
const minusScore = document.querySelectorAll('.fa-circle-minus')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteUser)
})

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

Array.from(addScore).forEach((el) => {
    el.addEventListener('click', addOne)
})

Array.from(minusScore).forEach((el) => {
    el.addEventListener('click', minusOne)
})

async function deleteUser(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('dashboard/deleteUser', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('dashboard/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('dashboard/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function addOne() {
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('dashboard/addOneScore', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }   catch(err){
        console.log(err)
    }
}

async function minusOne() {
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('dashboard/minusOneScore', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }   catch(err){
        console.log(err)
    }
}