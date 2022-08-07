// // // // // // const ps = document.querySelectorAll('p');
// // // // // // ps.forEach((item) => {
// // // // // //     console.log(item);
// // // // // //     if (item.textContent.includes('js'))
// // // // // //         item.remove()
// // // // // // })

// // // // // // /*
// // // // // // angular

// // // // // // vue

// // // // // // react
// // // // // // */

// // // // // //create html element
// // // // // const para = document.createElement('p')
// // // // // //add content in it
// // // // // para.textContent = 'is good framework for js !'
// // // // // //append it to dom
// // // // // document.querySelector('body').appendChild(para);

// // // // // const productItems = [{
// // // // //         product: 'book1',
// // // // //         isExist: true
// // // // //     },
// // // // //     {
// // // // //         product: 'book2',
// // // // //         isExist: true
// // // // //     },
// // // // //     {
// // // // //         product: 'book3',
// // // // //         isExist: false
// // // // //     },
// // // // //     {
// // // // //         product: 'book4',
// // // // //         isExist: true
// // // // //     },
// // // // //     {
// // // // //         product: 'book5',
// // // // //         isExist: true
// // // // //     },
// // // // //     {
// // // // //         product: 'book6',
// // // // //         isExist: true
// // // // //     },
// // // // //     {
// // // // //         product: 'book7',
// // // // //         isExist: false
// // // // //     }
// // // // // ]
// // // // // const availableItem = productItems.filter((item) => {
// // // // //     return item.isExist;
// // // // // })
// // // // // const h3 = document.createElement('h3');
// // // // // h3.textContent = `number of availale item is : ${availableItem.length}`;
// // // // // document.querySelector('body').appendChild(h3);

// // // // // productItems.forEach((item) => {
// // // // //     const p = document.createElement('p');
// // // // //     p.textContent = item.product;
// // // // //     document.querySelector('body').appendChild(p);
// // // // // })

// // // // // /*

// // // // // number of availale item is : 5
// // // // // book1

// // // // // book2

// // // // // book3

// // // // // book4

// // // // // book5

// // // // // book6

// // // // // book7

// // // // // */

// // // // const add = document.querySelector('#add-product');
// // // // const remove = document.querySelector('#remove-product');
// // // // add.addEventListener('click', () => {
// // // //     console.log('add product !');
// // // // })
// // // // remove.addEventListener('click', () => {
// // // //     const ps = document.querySelectorAll('.product');
// // // //     ps.forEach((item) => {
// // // //         item.remove();
// // // //     })
// // // // })

// // // const input = document.querySelector('#text')
// // // input.addEventListener('change', (e) => {
// // //     console.log(e.target.value);
// // // })
// // function saeed(e)
// // {

// //     console.log('e.keyCode : ',e.keyCode);
// // }

// // const btn = document.querySelector('button');

// // function greet(e) {
// //     // print the event object to console
// //     console.log('key:', e.key)
// //     console.log('keyCode:', e)
// // }

// // btn.onclick = greet;
// const myElement=document.querySelector('.inp')
// myElement.addEventListener('paste', e => {
//     const reg =
// });

const peoduct = [
  {
    title: "you dont know js",
  },
  {
    title: "react tut",
  },
  {
    title: "master js",
  },
  {
    title: "best rxjs",
  },
  {
    title: "master angular",
  },
];


