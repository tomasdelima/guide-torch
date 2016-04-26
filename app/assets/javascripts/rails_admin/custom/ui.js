//= require tagbox.js

$(document).ready(function() {
  activateTagbox()
  $('body').on('click', function () {
    setTimeout(activateTagbox, 300)
    setTimeout(activateTagbox, 500)
    setTimeout(activateTagbox, 1000)
    setTimeout(activateTagbox, 2000)
    setTimeout(activateTagbox, 3000)
  })
})

function activateTagbox () {
  $('input#document_tags').tagbox({
    items: [/* TODO: Get tags from server */],
    allowNew: true
  })
}
