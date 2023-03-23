
let form, id, name, ext, email, department

window.addEventListener('load', (e) => {
    const $ = (id) => document.getElementById(id)   
    form = $('empForm')
    form.addEventListener('submit', (e) => {

        e.preventDefault()

        id = $('id').value
        name = $('name').value
        ext = $('ext').value
        email = $('email').value
        department = $('department').value

        console.log(`ID: ${id}`)
        console.log(`Name: ${name}`)
        console.log(`Extension: ${ext}`)
        console.log(`Email: ${email}`)
        console.log(`Department: ${department}`)

    })
})






