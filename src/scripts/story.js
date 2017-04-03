export const story = [
  {
    text: "Hello there",
    // text: "Hello, my name is Andrew. You've stumbled upon my portfolio",
    replies: []
  },
  {
    text: "Intro 1",
    replies: []
  },
  {
    text: "Intro 2",
    replies: []
  },
  {
    text: "Intro 3",
    replies: []
  },
  {
    text: "How are you, anyway?",
    replies: [
      //dont care about the answer really
      { response: "Good", next: 5 },
      { response: "Bad", next: 5 }
    ]
  },
  {
    text: "Ok. Is there anything you'd like to ask me?",
    replies: [
      { response: "What do you do?", next: 7 },
      { response: "Why don't you tell me about yourself?", next: 6 },
      { response: "How can I get in touch with you?", next: 16 },
      { response: "Tell me something cool", next: 17 }, //random fact generator,
      { response: "Nah that's OK", next: 19 }  //go to end
    ]
  },
  {
    //work
    text: "We talking in a work sense or on a deeper level?",
    replies: [
      { response: "Work", next: 8 }, // go to work 1
      { response: "Lets get deep", next: 12 }, // go to self 1
    ]
  },
  {
    //work
    text: "Well I make websites. I like to dabble in stuff like",
    replies: []
  },
  {
    //work
    text: "Work 1",
    replies: []
  },
  {
    //work
    text: "Work 2",
    replies: []
  },
  {
    //work
    text: "Work 3",
    replies: []
  },
  {
    //repeat work
    text: "And that's pretty much it. Have you got all that or do you need me to start again?",
    replies: [
      { response: "Got it.", next: 5 },
      { response: "I wasn't paying attention.", next: 7 },
      { response: "I've gotta go.", next: 19 } //go to end
    ]
  },
  {
    //about self
    text: "About self 1",
    replies: []
  },
  {
    //about self
    text: "About self 2",
    replies: []
  },
  {
    //about self
    text: "About self 3",
    replies: []
  },
  {
    //repeat self
    text: "Now you know everything there is to know. Did you need me to go over anything again?",
    replies: [
      { response: "Tell me about 1", next: 12 },
      { response: "Tell me about 2", next: 13 },
      { response: "Tell me about 3", next: 14 },
      { response: "OK thanks. I feel like I really know you.", next: 5 },
      { response: "I've gotta go.", next: 19 } //go to end
    ]
  },
  {
    //contact
    text: "I've got a few ways you can see what I'm up to.",
    replies: [
      { response: "Phone", link: 'http://www.google.com'},
      { response: "Email", link: 'http://www.google.com'},
      { response: "Github", link: 'http://www.google.com'},
      { response: "LinkedIn", link: 'http://www.google.com'},
      { response: "Ok cool", next: 5},
    ]
  },
  {
    //we're done here
    text: "Random fact",
    replies: []
  },
  {
    //we're done here
    text: "Wanna hear another one?",
    replies: [
      { response: "Alright", next: 17},
      { response: "Nah", next: 5}
    ]
  },
  {
    //we're done here
    text: "Alright bye",
    replies: []
  }
]
