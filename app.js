const tileDisplay = document.querySelector('.tile-container');
const keyboard = document.querySelector('.key-container');
const messageDisplay = document.querySelector('.message-container')

const wordle = 'SUPER'

const key = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '«',
]


const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]


let currentRow = 0
let currentTile = 0
let isGameOver = false

guessRows.forEach((guessRow, guessRowIndex) => {
    const rowElement = document.createElement('div')
    rowElement.setAttribute('id', 'guessRow-' + guessRowIndex)
    guessRow.forEach((_guess, guessIndex) => {
        const tileElement = document.createElement('div')
        tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex)
        tileElement.classList.add('tile')
        rowElement.append(tileElement)

    })

    tileDisplay.append(rowElement)

})


keys.forEach(key => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key
    buttonElement.setAttribute('id', key)
    buttonElement.addEventListener('click', handleClick)
    keyboard.append(buttonElement)
})


const handleClick = (letter) => {
    console.log('clicked', letter)
    if (letter === '«') {
        deleteLetter()
        console.log('guessRows', guessRows)
        return
    }
    if (letter === 'ENTER')
        console.log('check row')
    console.log('guessRows', guessRows)
    return

}

addLetter = (letter)
console.log('guessRows', guessRows)

}


const addLetter = (letter) => {
    if (currentTile < 5 && currentRow < 6) {
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
        tile.textContent = letter
        guessRows[currentRow][currentTile] = letter
        tile.setAttribute('data', letter)
        currentTile++

    }
}



const deleteLetter = () => {
    if (currentTile > 0) {
        currentTile--
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
        tile.textContent = ''
        guessRows[currentRow][wordle] = ''
        tile.setAttribute('data', '')
    }
}



const checkRow = () => {
        const guess = guessRows[currentRow].join('')
        if (currentTile > 4) {
            console.log('guess is' + guess, 'wordle is' + wordle)
            flipTile()
            if (wordle == guess) {
                showMessage('Magnificent')
                isGameOver = true
                return
            } else {
                if (currentRow >= 5) {
                    isGameOver = false
                    showMessage('Game Over')
                    return
                }

                if (currentRow < 5) {
                    currentRow++
                    currentTile = 0
                }

            }




            // function to allow to show messages
            const showMessage = (message) => {
                const messageElement = document.createElement('p')
                messageElement.textContent = message
                messageDisplay.append(messageElement)
                setTimeout(() => message.Display.removeChild(messageElement), 2000);
            }


            const flipTile = () => {
                const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes
                rowTiles.forEach((tile, index => {
                        const dataLetter = tile.getAttribute('data')

                        if (dataLetter == wordle[index]) {
                            this.classList.add('green-overlay')
                        } else if (wordle.includes(dataLetter)) {
                            this.classList.add('yellow-overlay')
                        })
                    else {
                        tile.classList.add('gray-overlay')

                    }
                })
            }