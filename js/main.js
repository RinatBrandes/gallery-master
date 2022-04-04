'use strict';

initPage();

function initPage() {
  setProfile();
  createProjects();
  renderPortfolio();
}

function renderPortfolio() {
  var projs = getProjs()

  const strHTML = projs.map(
    (proj) => `   
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1" onclick="renderProject('${proj.id}')">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${proj.id}.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
          </div>
        </div>`
  )
  var elPortfolio = document.querySelector('.grid')
  elPortfolio.innerHTML = strHTML.join('')
}

function renderProject(id) {
  var proj = getProj(id)

  const strHTML = `<h2>${proj.name}</h2>
                <p class="item-intro text-muted">${proj.title}</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/${
                  proj.id
                }.jpg" alt="">
                <p>${proj.desc}</p>
                <button class="btn btn-info" onclick="gotoProj('${
                  proj.url
                }')">Try me</button>
                <ul class="list-inline">
                  <li>Date: ${setDateTime(proj.publishedAt)}</li>
                  <li >Category: <span class="badge badge-info">${
                    proj.labels
                  }</span></li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                <i class="fa fa-times"></i>
                Close Project</button>`
  var elProj = document.querySelector(".modal-body")
  elProj.innerHTML = strHTML
}

function gotoProj(url) {
  window.open(url, "_blank")
}

function setProfile() {
  $(".about-description").text(
    "My name is Rinat and in these days i'm a creator.\n I'm creating necklace,\n i'm croching scarves, hats, dolls, bags and more. I'm making works and pictures from paper called Quling. And know i'm learing to developed web site"
  )
}

function sendMessage() {
  //close the Contact message
  var elAside = document.querySelector(".offcanvas-aside")
  elAside.style.right = -80 + "vw"

  var elMail = document.querySelector(".mail").value
  var elSubject = document.querySelector(".subject").value
  var elMessage = document.querySelector(".message").value
  var link =
    "https://mail.google.com/mail/?view=cm&fs=1&to=" +
    elMail +
    "&su=" +
    elSubject +
    "&body=" +
    elMessage
  
  window.open(link, "_blank")
}
