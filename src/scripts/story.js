export const story = [
  {
    text: "Hello, my name is Andrew. You've stumbled upon my portfolio",
    replies: []
  },
  {
    text: "How are you,anyway?",
    replies: [
      { response: "Bad", next: 2 },
      { response: "Good", next: 3 }
    ]
  },
  {
    text: "That's a shame. Is there anything I can do to help?",
    replies: [
      { response: "Yes", next: 3 },
      { response: "No", next: 5 }
    ]
  },
  {
    text: "That's great. Lets move on though. Do you want to hear what I have to say?",
    replies: [
      { response: "Yes", next: 0 },
      { response: "No", next: 5 }
    ]
  },
  {
    text: "Are you sure?",
    replies: [
      { response: "Yes", next: 5 },
      { response: "No", next: 1 }
    ]
  },
  {
    text: "Alright bye",
    replies: []
  }
]
