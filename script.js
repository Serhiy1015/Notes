let textArea = document.getElementById('area-for-message')
let sendNote = document.querySelector('.send-note')
let notesContainer = document.querySelector('.notes')
let writtenNote

function addNote() {
    if (textArea.value.length < 1) {
        document.querySelector('.error').classList.add('error-active')
        return
    }
    else document.querySelector('.error').classList.remove('error-active')

    writtenNote = document.createElement('div')
    writtenNote.classList.add('written-note')
    let noteText = document.createElement('p')
    noteText.textContent = textArea.value
    noteText.style.wordBreak = 'break-word'
    let deletee = document.createElement('h6')
    deletee.classList.add('delete-note')
    deletee.innerHTML = "&#10007;"
    writtenNote.appendChild(deletee)
    writtenNote.appendChild(noteText)
    notesContainer.prepend(writtenNote)
    textArea.value = ''
}

sendNote.addEventListener('click', addNote);

textArea.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addNote()
        event.preventDefault()
    }
})

notesContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-note')) {
        event.target.parentNode.remove()
    }
})

