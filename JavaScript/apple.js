////////////////////////導覽列的div等標籤建立/////////////////////////////////
let head_item = [ '商店','MAC','iPad','iPhone','Watch','Airpod','TV和家庭','Apple獨家','配件','支援服務'];

let nav = document.createElement('nav');
nav.setAttribute('class','navbar navbar-expand-lg navbar-light bg-dark');
let head_div = document.createElement('div');
head_div.setAttribute('class','container Hd_flex');
let nav_btn = document.createElement('button');
nav_btn.setAttribute('class','navbar-toggler');
nav_btn.setAttribute('data-bs-toggle','collapse');
nav_btn.setAttribute('data-bs-target','#navbarNav');

let nav_span =document.createElement('span');
nav_span.setAttribute('class','navbar-toggler-icon shadowHD')


let nav_div = document.createElement('div');
nav_div.setAttribute('class','collapse navbar-collapse justify-content-center flex-grow-0');
nav_div.setAttribute('id','navbarNav');

let nav_ul = document.createElement('ul');
nav_ul.setAttribute('class','navbar-nav justify-content-center');

let nav_icon = document.createElement('img');
nav_icon.setAttribute('class','nav-item me-4');
nav_icon.setAttribute('src','https://store.storeimages.cdn-apple.com/8756/store.apple.com/shop/rs-globalelements/dist/tw/ac-globalnav-dist/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_small.svg')

head_div.appendChild(nav_icon);
nav_btn.appendChild(nav_span);
head_div.appendChild(nav_btn);

////////////////////////內容建立的div等標籤建立/////////////////////////////////
let contain = document.createElement('div');
contain.setAttribute('class','container m-auto d-flex flex-wrap');

let product_photo = document.createElement('div');
product_photo.setAttribute('class','col-md-7 col-12')
let photo_img = document.createElement('img');
photo_img.setAttribute('src','https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-202009?wid=443&hei=535&fmt=jpeg&qlt=95&.v=1599066777000');

let product = document.createElement('div');
product.setAttribute('class','accordion col-md-5 col-12');
product.setAttribute('id','accordionExample');

let product_price = document.createElement('div');
product_price.setAttribute('class','col-12 border mt-4 bg-secondary text-dark bg-opacity-25');
product_price.setAttribute('style','height: 200px; font-size: 30px');

let example = {
            外觀:{ 
                    太空灰色:{ 
                        picture: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-spacegray-202009?wid=470&hei=556&fmt=png-alpha&.v=1598650646000", 
                        color: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/finish-spacegray-201903?wid=204&amp;hei=204&amp;fmt=png-alpha&amp;.v=1552422652805'
                    },
                    銀色:{ 
                        picture: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-silver-202009?wid=470&hei=556&fmt=png-alpha&.v=1598650645000", 
                        color: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/finish-silver-201903?wid=204&amp;hei=204&amp;fmt=png-alpha&amp;.v=1552422655664"
                    },
                    綠色:{ 
                        picture: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-green-202009?wid=470&hei=556&fmt=png-alpha&.v=1598650644000", 
                        color: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/finish-green-202009?wid=204&amp;hei=204&amp;fmt=jpeg&amp;qlt=80&amp;.v=1599240136000"
                    },
                    玫瑰金色:{ 
                        picture: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-gold-202009?wid=470&hei=556&fmt=png-alpha&.v=1598650644000", 
                        color: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/finish-gold-202009?wid=204&amp;hei=204&amp;fmt=jpeg&amp;qlt=80&amp;.v=1599240136000"
                    },
                    天藍色:{ 
                        picture: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-blue-202009?wid=470&hei=556&fmt=png-alpha&.v=1598650644000", 
                        color: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/finish-blue-202009?wid=204&amp;hei=204&amp;fmt=png-alpha&amp;.v=1599240136000"
                    }
                },
            儲存裝置:["32G","128G"],
            連線能力:["Wi-Fi","Wi-Fi + 行動網路"]
        }
window.onload = function(){
    ////////////////////////建立導覽列//////////////////////////
    head_item.forEach(item =>{
        let nav_a = document.createElement('a');
        nav_a.setAttribute('class','nav-link active text-white fs-6');
        let nav_li = document.createElement('li');
        nav_li.setAttribute('class','nav-item me-4');
        nav_a.innerText = item;
        nav_li.appendChild(nav_a);
        nav_ul.appendChild(nav_li);
    })

    
    nav_div.appendChild(nav_ul);
    head_div.appendChild(nav_div);

    nav.appendChild(head_div);
    document.body.appendChild(nav);


    /////////////////////////建立內容//////////////////////////
    let num = ["One","Two","three"];
    let i = 0;
    let s = 1;//不同顏色不同id

    Object.keys(example).forEach(index => {
        
        if( index != "外觀"){
            i ++;
        }
        let item_view = document.createElement('h2');//3
        item_view.setAttribute('class','accordion-header');
        item_view.setAttribute('id',`heading${num[i]}`);

        let view_btn = document.createElement('button');//4
        view_btn.setAttribute('class','accordion-button');
        view_btn.setAttribute('data-bs-toggle','collapse');
        view_btn.setAttribute('data-bs-target',`#collapse${num[i]}`);

        let div = document.createElement('div');
        div.setAttribute('class','d-flex flex-wrap');

        let product_item = document.createElement('div');//2
        product_item.setAttribute('class','accordion-item');

        
        view_btn.innerText = index;
        
        item_view.appendChild(view_btn);

        let view_info = document.createElement('div');//3
        view_info.setAttribute('class','accordion-collapse collapse show');
        view_info.setAttribute('id',`collapse${num[i]}`);
        view_info.setAttribute('data-bs-parent','#accordionExample');
        // view_info.setAttribute('style','display: flex');

        if( index != "外觀"){
            example[index].forEach(item =>{
                let info_1 = document.createElement('div');//4
                info_1.setAttribute('class','accordion-body');
                let info_fun = document.createElement('div');
                info_fun.setAttribute('class','border border-secondary rounded text-center');
                info_fun.setAttribute('style','width: 200px; margin: 20px 10px; padding: 10px');
                info_fun.setAttribute('data-bs-toggle','collapse');
                info_fun.setAttribute('data-bs-target',`#collapse${num[i]}`);
                info_fun.setAttribute('data-price',`${item}`);

                info_1.innerText = item;
                info_fun.appendChild(info_1);
                div.appendChild(info_fun);
                view_info.appendChild(div);
            })
        }
        else{
            Object.keys(example.外觀).forEach( detail =>{
                let info_1 = document.createElement('div');//4
                info_1.setAttribute('class','accordion-body');
                let color = document.createElement('img');
                color.setAttribute('src',`${example.外觀[detail].color}`);
                color.setAttribute('style','width: 25px');
                let info_fun = document.createElement('div');
                info_fun.setAttribute('class','border border-secondary rounded text-center');
                info_fun.setAttribute('style','width: 200px; margin: 20px 10px; padding: 10px');
                info_fun.setAttribute('id',`color_${s}`);
                info_fun.setAttribute('data-color',`${detail}`);
                
                info_fun.setAttribute('data-bs-toggle','collapse');
                info_fun.setAttribute('data-bs-target',`#collapse${num[i]}`);

                info_1.innerText = detail;

                info_fun.appendChild(color);
                info_fun.appendChild(info_1);
                div.appendChild(info_fun);
                view_info.appendChild(div);
                s++;
            })
        }
        product_item.appendChild(item_view);
        product_item.appendChild(view_info);
        product.appendChild(product_item);

        
    });

    product_price.innerText = 'NT$18,900';

    product.appendChild(product_price);
    product_photo.appendChild(photo_img);
    contain.appendChild(product_photo);
    contain.appendChild(product);
    
    
    document.body.appendChild(contain);

    ///////////////////////更改平板圖片功能///////////////////////////////
    document.getElementById('color_1').addEventListener("click",function () {
        let value = document.getElementById('color_1').dataset.color;
        photo_img.setAttribute('src',`${example.外觀[value].picture}`); 
        
    })
    document.getElementById('color_2').addEventListener("click",function () {
        let value = document.getElementById('color_2').dataset.color;
        photo_img.setAttribute('src',`${example.外觀[value].picture}`); 
        
    })
    document.getElementById('color_3').addEventListener("click",function () {
        let value = document.getElementById('color_3').dataset.color;
        photo_img.setAttribute('src',`${example.外觀[value].picture}`); 
        
    })
    document.getElementById('color_4').addEventListener("click",function () {
        let value = document.getElementById('color_4').dataset.color;
        photo_img.setAttribute('src',`${example.外觀[value].picture}`); 
        
    })
    document.getElementById('color_5').addEventListener("click",function () {
        let value = document.getElementById('color_5').dataset.color;
        photo_img.setAttribute('src',`${example.外觀[value].picture}`); 
        
    })


    /////////////////////////更改不同條件價格///////////////////////////////
    let tt = '"32G"';
    document.querySelector("div[data-price="+tt+"]").addEventListener("click",function () {
        product_price.innerText = 'NT$18,900';

        product_price.setAttribute('data-mem',`${document.querySelector("div[data-price="+tt+"]").dataset.price}`);
    })

    let pp = '"128G"';
    document.querySelector("div[data-price="+pp+"]").addEventListener("click",function () {
        product_price.innerText = 'NT$23,900';

        product_price.setAttribute('data-mem',`${document.querySelector("div[data-price="+pp+"]").dataset.price}`);
    })


    let cc = '"Wi-Fi"';
    document.querySelector("div[data-price="+cc+"]").addEventListener("click",function () {
        if(product_price.dataset.mem == document.querySelector("div[data-price="+tt+"]").dataset.price){
            product_price.innerText = 'NT$18,900';
        }
        else if(product_price.dataset.mem == document.querySelector("div[data-price="+pp+"]").dataset.price){
            product_price.innerText = 'NT$23,900';
        }
    })

    let aa = '"Wi-Fi + 行動網路"';
    document.querySelector("div[data-price="+aa+"]").addEventListener("click",function () {
        if(product_price.dataset.mem == document.querySelector("div[data-price="+tt+"]").dataset.price){
            product_price.innerText = 'NT$23,200';
        }
        else if(product_price.dataset.mem == document.querySelector("div[data-price="+pp+"]").dataset.price){
            product_price.innerText = 'NT$28,200';
        }
    })

}
