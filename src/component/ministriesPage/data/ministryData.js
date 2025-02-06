export const ministries = [
  {
    id: 1,
    name: "Children",
    image: require("../../../assets/image/CouncilImg.png"),
    para1:
      'The formation of a trust like the "PastorsFellowship, Fellowship of Pentecostal Church Pastors" in the 1980s reflects a significant step towards strengthening unity and support among Pentecostal pastors. This type of fellowship would have provided a platform for pastoral collaboration, spiritual encouragement, and resource sharing, which are key aspects of nurturing the growth of Pentecostal communities.',
    para2:
      "The transition from the Pastors Fellowship to the Federation of Pentecostal Churches (FPC) in 3.10.2006 marked a key moment of structural and organizational development for the group. With this shift, the leadership also expanded, with several key individuals taking on roles that would help steer the vision and growth of the FPC.",
    subMinistries: [
      {
        id: 101,
        title: "Taking care of the Children",
        image: require("../../../assets/image/CouncilImg.png"),
        excerpt:
          'The formation of a trust like the "PastorsFellowship, Fellowship of Pentecostal Church Pastors" in the 1980s reflects a significant step towards strengthening ',
        content: [
          {
            type: "text",
            value:
              "Our summer camp was a fantastic experience! Activities included:",
          },
          {
            type: "list",
            value: [
              "Arts & Crafts",
              "Bible Story Sessions",
              "Outdoor Games",
              "Music and Dance",
            ],
          },
          {
            type: "image",
            value: require("../../../assets/image/event-title.png"),
          },

          {
            type: "text",
            value:
              "This helped children grow in faith while making lifelong friendships.",
          },
        ],
      },
      {
        id: 102,
        title: "Sunday School Activities",
        image: require("../../../assets/image/CouncilImg.png"),
        excerpt: "Engaging activities for children every Sunday.",
        content: [
          {
            type: "text",
            value:
              "Every Sunday, we organize interactive activities for children.",
          },
          {
            type: "image",
            value: require("../../../assets/image/ministry.png"),
          },
          {
            type: "list",
            value: [
              "Bible Lessons",
              "Group Prayers",
              "Storytelling",
              "Interactive Games",
            ],
          },
        ],
      },
    ],
  },
  
];
