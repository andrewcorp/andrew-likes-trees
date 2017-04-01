import {story} from './story.js'

const question = document.getElementById("question")
const options = document.getElementById("options")

const question_template = (reply) => (
  `<p onclick="render_text(${reply.next})">${reply.response}</p>`
)

const next_button_template = (current) => {
  let html
  if(story[current+1]){
    html = `<p onclick="render_text(${current + 1})">next</p>`
  }else{
    html = `<p onclick="render_text(0)">start again</p>`
  }
  return html
}

export const render_text = (current) => {
  let text = story[current].text
  let replies = story[current].replies
  question.innerHTML = text
  if(replies.length){
    options.innerHTML = replies.map(reply => question_template(reply)).join('')
  }else{
    options.innerHTML = next_button_template(current)
  }
}

export const dialogue_tree = () => {
  //make render text available to call in onclick
  window.render_text = render_text
  //render tree from the start
  render_text(0)
}
