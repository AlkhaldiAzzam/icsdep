// $("#nav-home-tab").on('click',()=>{

//     $("#nav-home-tab").tab("show")

//     console.log("meeee")
// })
$('body').click(()=>{
    $("#myTab a").removeClass("active")
    $("#nav-tabContent div").removeClass("show active")
})


$('.special.cards .image').dimmer({
    on: 'hover'
  });