'use strict';

var gProjs
const STORAGE_KEY = 'projs'


function getProj(id){
    const proj = gProjs.find(proj => proj.id === id)
    return proj
}

function getProjs() {    
    var projs = gProjs
    return projs
}

function createProjects(){
    
    var projs = loadFromStorage(STORAGE_KEY)
    var projs = {}
    if (!projs || !projs.length) {
    
        projs = [createProject('in_picture','in-picture','Picture telling story',
        'In each question you have 2 answers and you need to select the right one',
        'https://rinatbrandes.github.io/in-picture/',['Html','css','java']),
        createProject('mine_sweeper','Mine Sweeper','Find the bombs',
        'In this game you need to try to find all the boms','https://rinatbrandes.github.io/MineSweeper/',
        ['html','js']),
        createProject('touch_the_numbers','Touch the nums','Numbers by there are order',
        'You need to start with number 1 and continue until the end - you can select level',
        'https://rinatbrandes.github.io/touch-the-nums/',['css','javaScript']),
        createProject('ball_board','Ball board','You need to collect all the ball',
        'In this game you need to collect all the balls without being eaten',
        'https://rinatbrandes.github.io/ball-board/',['javeScript','Html','Css']),
        createProject('chess','Chess','Play chess',
        'Chess is a game for two players - white and black. The white player is in charge of the army of white tools while the black player is in charge of the army of black tools.',
        'https://rinatbrandes.github.io/chess/',['js','css']),
        createProject('books_shop','Book Shop','Let the manger to organize the shop',
        'The aplication allow the manager to organize the books, set the price, etc..',
        'https://rinatbrandes.github.io/books-shop/',['controoler','services'])
        
    ]
    }
    gProjs = projs
    saveToStorage(STORAGE_KEY,gProjs)
}

function createProject(id,name,title,desc,url,labels,img){
    return {
         id: id,
         name: name,
         title: title,
         desc: desc,
         url: url,
         publishedAt: Date.now(),
         labels: labels,
         }
}


function setDateTime(userDate){

    var date = new Date(userDate).toISOString()
    date = date.replace('T', ' ')
    date = date.replace('Z', ' ')
    var res = date.substr(0,19)

    return res
}