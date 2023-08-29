import "./libs"
import'./navbar'

import {posts} from '../dados/dados-posts'

const sectionPosts = document.querySelector('#posts')

for(let post of posts){
let article = document.createElement('article')
article.classList.add('card')
article.classList.add('w-25')
article.innerHTML= `
<img src="${post.imagemCapa}" class="card-img-top" alt="">
<div class="card-body">
    <h5 class="${post.titulo }  </h5>
    <p class="card-text"> ${post.corpo}.</p>
    <a href="#" class="btn btn-outline-primary">Saiba Mais</a>
</div> `



}