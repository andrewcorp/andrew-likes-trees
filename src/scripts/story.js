export const story = [
  {
    text: "Hello, my name is Andrew. You've stumbled upon my portfolio",
    replies: []
  },
  {
    text: "Sometimes I like to stand in the street at night and drink beer.",
    replies: []
  },
  {
    text: "How are you,anyway?",
    replies: [
      { response: "Bad", next: 3 },
      { response: "Good", next: 4 }
    ]
  },
  {
    text: "That's a shame. Is there anything I can do to help?",
    replies: [
      { response: "Yes", next: 4 },
      { response: "No", next: 6 }
    ]
  },
  {
    text: "That's great. Lets move on though. Do you want to hear what I have to say?",
    replies: [
      { response: "Yes", next: 0 },
      { response: "No", next: 6 }
    ]
  },
  {
    text: "Are you sure?",
    replies: [
      { response: "Yes", next: 6 },
      { response: "No", next: 2 }
    ]
  },
  {
    text: "Alright bye",
    replies: []
  }
]
