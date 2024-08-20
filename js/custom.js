$(function () {
    $(`.to-top`).on(`click`, function () {
        $(`html, body`).animate({ scrolltop: 0 }, 1000)
    })
})