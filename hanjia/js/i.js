
//                                                    horizontal//水平滑动  vertical//垂直滑动          
        var swiper =new Swiper('.swiper-container',
                               {
                                speed:3000,
                                direction:'horizontal',//水平滑动
                                loop:true,//循环
                                autoplay:true,//自动轮播
                                initialSlide:0,
                                spaceBetween: 30,
                                effect: 'cube',//切换效果
                                autoplay:{
                                    delay:1500
                                },
                                // 如果需要分页器
                                pagination:{ el:'.swiper-pagination',
                                clickable:true,
                                           },
                        
//                        navigation: {
//                        nextEl: '.swiper-button-next',
//                        prevEl: '.swiper-button-prev',
//                            },
//                                //前进后退按钮                             
                    })