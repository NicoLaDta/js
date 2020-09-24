/*const h1 = document.querySelector('h1')
console.log(h1)

h1.classList.toggle('my-title')

window.setTimeout(() => {
  h1.classList.toggle('my-title')
}, 1000)

const allParagraphe = document.querySelector('p');
console.log(allParagraphe)

//Ajouter une classe aux elements qui ont un index pain
for (let i=0; i < allParagraphe.length; i++){
    const e1 = allParagraphe[i]
    console.log(e1)
    if (i % 2 == 0){
        e1.classList.add('even-paragraph')
    }
}*/

/*const newParagraph = document.createElement('p')
newParagraph.innerHTML = 'Ceci est un texte <strong>dynamique</strong>'
console.log(newParagraph)

document.body.appendChild(newParagraph)

setTimeout(() => {
    document.body.removeChild(newParagraph)
  }, 1000)*/

  const div = document.createElement('div')

  div.innerHTML = `
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur </p>

  <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure</p>
  
  <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure</p>
  `

  const button = document.querySelector('.see-more')
  const button2 = document.querySelector('.see-less')
  const feed = document.querySelector('.feed')
  const h1 = document.querySelector('h1')

  h1.style.textAlign = 'center'
  h1.style.fontFamily = 'Fantasy'

  const createParagraph = (parent) =>{
      const p = document.createElement('p')
      p.innerHTML='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat'
      parent.appendChild(p)
    }

  button.addEventListener('click', (event) => {
      console.log('click', event)
      //document.body.appendChild(div)
      createParagraph(feed)
  })

  button2.addEventListener('click', (event) => {
      
      const allParagraphs = feed.querySelectorAll('p')
      const lastElement = allParagraphs[allParagraphs.length - 1]
      console.log(lastElement, allParagraphs)
      if(lastElement){
          feed.removeChild(lastElement)
      }
  })

