'use strict';
// xac dinh phan tu xu ly
let btnEmailCheck = document.getElementById('btn-email-check');
let infoForm = document.querySelector('.info-form');
let infoContainer = document.querySelector('.info-container');
let emailUser = document.getElementById('email-user');
let message = document.querySelector('.message');
let emailExmple = document.querySelector('.emailExample');
// regex
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
btnEmailCheck.addEventListener('click', function () {
  let emailValue = emailUser.value;
  if (regex.test(emailValue.toLowerCase())) {
    infoForm.classList.add('hidden');
    infoContainer.classList.remove('hidden');
  } else {
    message.classList.add('invalid');
    message.textContent = 'Vui lòng nhập email.';
  }
});
emailUser.addEventListener('focus', function () {
  emailExmple.classList.remove('hidden');
});
emailUser.addEventListener('blur', function () {
  emailExmple.classList.add('hidden');
});

// job info hidden
let infoUl = document.querySelectorAll('.show-item');
let viewMore = document.querySelectorAll('.viewMore');
let viewLess = document.querySelectorAll('.viewLess');
let gridTitle = document.querySelectorAll('.grid-item h1');
console.log('gridtitle', gridTitle.length);
console.log('viewmore', viewMore.length);
console.log('viewless', viewLess.length);
console.log('infoul', infoUl.length);

function showElement(obj) {
  obj.classList.remove('hidden');
}

const hideElement = function (obj) {
  obj.classList.add('hidden');
};
//

//
// lặp qua từ grid item và thêm sự kiện
for (let i = 0; i < viewMore.length; i++) {
  // console.log(gridTitle[i]);
  // Hiển thị viewMore khi di chuột qua
  gridTitle[i].addEventListener('mouseover', function () {
    // chỉ show View More nếu không có info của item
    if (infoUl[i].classList.contains('hidden')) {
      showElement(viewMore[i]);
    }
  });
  viewMore[i].addEventListener('mouseover', function () {
    showElement(viewMore[i]);
  });
  // Ẩn view More khi di chuột ra khỏi
  gridTitle[i].addEventListener('mouseout', function () {
    hideElement(viewMore[i]);
  });
  viewMore[i].addEventListener('mouseout', function () {
    hideElement(viewMore[i]);
  });

  // Hiển thị info khi click vào View more đồng thời ẩn view more đi
  viewMore[i].addEventListener('click', function () {
    showElement(infoUl[i]);
    hideElement(viewMore[i]);
  });
  // Ẩn đi khi clck vào view Less
  viewLess[i].addEventListener('click', function () {
    hideElement(infoUl[i]);
  });
}
