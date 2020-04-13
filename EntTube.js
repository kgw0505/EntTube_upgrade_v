let videoId = '', frameWidth = document.getElementById('entryCanvas').clientWidth, frameHeight = document.getElementById('entryCanvas').clientHeight
setInterval(() => {
if (Entry.variableContainer.getVariableByName('EntTube').getValue() != 'entryCanvas' && Entry.variableContainer.getVariableByName('EntTube').getValue() != videoId) {
videoId = Entry.variableContainer.getVariableByName('EntTube').getValue()
document.getElementById('entryCanvasWrapper').innerHTML = `<iframe width="${frameWidth}" height="${frameHeight}" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
console.log(`<iframe width="${frameWidth}" height="${frameHeight}" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
}
}, 100)
