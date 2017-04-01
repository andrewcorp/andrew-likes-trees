import {story} from './story.js'

const question = document.getElementById("question")
const options = document.getElementById("options")

const render_link = (index,text) => `<p onclick="render_text(${index})">${text}</p>`

const question_button = (reply) => render_link(reply.next, reply.response)

const next_button = (current) => {
  let text = story[current+1] ? "next" : "start again"
  let index = story[current+1] ? current + 1 : 0
  return render_link(index,text)
}

const render_text = (current) => {
  let text = story[current].text
  let replies = story[current].replies
  question.innerHTML = text
  if(replies.length){
    options.innerHTML = replies.map(reply => question_button(reply)).join('')
  }else{
    options.innerHTML = next_button(current)
  }
}

export const dialogue_tree = () => {
  window.render_text = render_text //make render text available to call in onclick
  render_text(0) //render tree from the start
}
