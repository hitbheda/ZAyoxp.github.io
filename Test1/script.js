var li = gsap.timeline()

li.from(".logo,.nav-center>h3,.nav-right button ,.nav-right>h3",{
    y:-10,
    duration:.5,
    delay:1,
    stagger:.1,
    opacity:0
})

li.from(".inner>h1",{
    y:100,
    duration:.7,
    delay:0,
    stagger:.3,
    opacity:0
})

li.from(".img-1",{
    x:-100,
    duration:.4,
    delay:0,
    opacity:0
})

li.from(".img-3",{
    x:100,
    duration:.4,
    delay:0,
    opacity:0
})


li.from(".img-2,.img-4",{
    y:100,
    duration:.7,
    delay:0,
    stagger:.3,
    opacity:0
})
