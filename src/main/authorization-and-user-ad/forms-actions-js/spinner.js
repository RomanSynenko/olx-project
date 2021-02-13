function spinnerClassAdd() {
   document.querySelector('.wrap-spinner').classList.add('is-active');
};

function spinnerClassRemove() {
   document.querySelector('.wrap-spinner').classList.remove('is-active');
};

export { spinnerClassAdd, spinnerClassRemove };