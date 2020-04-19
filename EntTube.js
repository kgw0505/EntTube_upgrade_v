let videoId = '',
    frameWidth = document.getElementById('entryCanvas').clientWidth,
    frameHeight = document.getElementById('entryCanvas').clientHeight,
    engineWidth = document.getElementsByClassName('entryEngine')[0].clientWidth,
    engineHeight = document.getElementsByClassName('entryEngine')[0].clientHeight,
    child = document.createElement('div'),
    logo = document.createElement('span')
setInterval(() => {
    if (Entry.variableContainer.getVariableByName('EntTube').getValue() != 'entryCanvas' && Entry.variableContainer.getVariableByName('EntTube').getValue() != videoId) {
        document.getElementById('entryCanvas').style.display = 'none'
        document.getElementsByClassName('entryMouseViewMinimize')[0].style.display = 'none'
        videoId = Entry.variableContainer.getVariableByName('EntTube').getValue()
        child.innerHTML = `<iframe id="youtube" width="${frameWidth}" height="${frameHeight}" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        logo.innerHTML = `<a id="logo" href="https://github.com/thoratica/EntTube" target="_blank" style="display: flex; align-items: center; justify-content: center; float: right;"><img style="height: ${frameHeight/15}px" src="https://raw.githack.com/thoratica/EntTube/master/powered.png"></a>`
        document.getElementById('entryCanvasWrapper').appendChild(child)
        document.getElementsByClassName('entryEngine')[0].appendChild(logo)
    } else if (Entry.variableContainer.getVariableByName('EntTube').getValue() == 'entryCanvas' && document.getElementById('entryCanvas').style.display == 'none') {
        document.getElementById('entryCanvas').style.display = 'block'
        document.getElementsByClassName('entryMouseViewMinimize')[0].style.display = 'block'
        document.getElementById('youtube').remove()
        document.getElementById('logo').remove()
        videoId = Entry.variableContainer.getVariableByName('EntTube').getValue()
    }
}, 100)