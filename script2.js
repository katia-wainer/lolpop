var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim-2'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'data 9.json', 
    rendererSettings:{
    preserveAspectRatio: 'xMidYMid meet'},
        
    }
 );