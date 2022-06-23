const openModal = document.querySelector('.openModal');
const modal = document.querySelector('#myModal');
const span = document.querySelector('.close');
const success = document.querySelector('.modal-submit');
const modalContent = document.querySelector('.modal-content');

const form = document.querySelector('.modal-form');
const formSubmit = form.querySelector('.modal-button-submit-form');
const phone = form.querySelector('.modal-input-phone');
const checkbox = form.querySelector('.modal-input-checkbox');

openModal.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
    success.style.display = 'none';
    modalContent.style.display = 'block';

}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      success.style.display = 'none';
      modalContent.style.display = 'block';

    }
  }

  // --------------------------------------------------------------------form validate

const getSuccess = () => {
    modalContent.style.display = 'none';
    success.style.display = 'flex';
}

const closeModal = () => {
    modal.style.display = "none";
    success.style.display = 'none';
    modalContent.style.display = 'block';
}

const validate = (e) => {
    e.preventDefault();
    console.log(e)
    console.log('phone ' + phone.value,', checked ' + checkbox.checked);
    if (phone.value && checkbox.checked === true) {
        //form.submit();
        getSuccess();
    }
    setTimeout(closeModal, 3000);
}

form.addEventListener('submit', validate);

// ------------------------------------------------------mask input tel

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});

// --------------------------------------------------------------------sidebar

const buttonSidebar = document.querySelector('.mobile-img');
const sidebar = document.querySelector('.sidebar');

const goSidebar = () => {
    sidebar.classList.toggle('goSidebar');
}

buttonSidebar.addEventListener('click', goSidebar)

// -------------------------------------------------------------------------burger

var menuButton = document.querySelector('.menuButton');
var menu = document.querySelector('.burger-menu');

menuButton.addEventListener ('click', click)

function click(){
  menuButton.classList.toggle('menuButton-active')
  menu.classList.toggle('header-active');
  langToggle.classList.toggle('languageTogglerNavActive')
  console.log('клик')
}