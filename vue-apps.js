var app1 = new Vue({
  el: '#app1',
  data: {
    message: 'Heyo World',
    title: 'This page was loaded at ' + new Date()
  }
})

Vue.component('dog-listing', {
  props: ['dog'],
  template: '<li>{{dog.name}}, {{dog.breed}}</li>'
})

var app2 = new Vue({
  el: '#app2',
  data: {
    message: 'I too am an app.',
    seen: true,
    dogs: [
      {name: 'Fluffkins', breed: 'devil-dog'},
      {name: 'Chachi', breed: 'chihuahua'},
      {name: 'Maximus', breed: 'great dane'}
    ]
  }
})
