export default {
  name: 'learnMore',
  title: 'Learn More Page',
  type: 'document',
  fields: [
    // text on the left
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'upcomingCourseStart', title: 'Upcoming Course Start', type: 'date'},
    {name: 'upcomingCourseEnd', title: 'Upcoming Course End', type: 'date'},
    {name: 'earlyBirdCost', title: 'Early Bird Cost', type: 'number'},
    {name: 'earlyBirdEnd', title: 'Early Bird Date End', type: 'date'},
    {name: 'cost', title: 'Regular Cost', type: 'number'},
    {name: 'deposit', title: 'Deposit Fee', type: 'number'},
    {name: 'fullPaymentDueDate', title: 'Full Payment Due Date', type: 'date'},
    {name: 'applyDeadline', title: 'Deadline To Apply', type: 'date'},
    {name: 'cancelBy', title: 'Cancel By Date', type: 'date'},
    // image and links on the right
    {name: 'pstLink', title: 'PST Schedule Link', type: 'url'},
    {name: 'mstLink', title: 'MST Schedule Link', type: 'url'},
    {name: 'cstLink', title: 'CST Schedule Link', type: 'url'},
    {name: 'estLink', title: 'EST Schedule Link', type: 'url'},
    {
      name: 'exampleSchedulePart1',
      title: 'Example Schedule Part 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'exampleSchedulePart2',
      title: 'Example Schedule Part 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    // tangible results
    {name: 'IPKnowledge', title: 'IP Knowledge Increase Number', type: 'string'},
    {name: 'skills', title: 'Skills and Knowledge Increase', type: 'string'},
    {name: 'network', title: 'Network & Alliance Building Increase', type: 'string'},
  ],
}
