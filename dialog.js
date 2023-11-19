const customDialog = document.getElementById('customDialog');
const closeButton = document.getElementsByClassName('close')[0];
const openDialog = document.getElementById('open-dialog')

function openCustomDialog() {
  customDialog.style.display = 'block';
}

function closeCustomDialog() {
  customDialog.style.display = 'none';
}

openDialog.addEventListener('click', () => customDialog.style.display = 'block');
closeButton.addEventListener('click', closeCustomDialog);

