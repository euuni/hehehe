function navigateWithConfirmation(url) {
  const userConfirmed = confirm("페이지로 이동하겠습니다. 계속하시겠습니까?");
  if (userConfirmed) {
      window.location.href = url;
  }
}

document.getElementById('button1').addEventListener('click', () => {
  navigateWithConfirmation("https://eunnihp.vercel.app/");
});

document.getElementById('button2').addEventListener('click', () => {
  navigateWithConfirmation("https://nextjs-lemon-six-16.vercel.app/");
});

document.getElementById('button3').addEventListener('click', () => {
  navigateWithConfirmation("https://website-three-gamma-68.vercel.app/");
});

document.getElementById('button4').addEventListener('click', () => {
  navigateWithConfirmation("https://blog2-beta-tawny.vercel.app/");
});

document.getElementById('button5').addEventListener('click', () => {
  navigateWithConfirmation("https://teamproject-sigma.vercel.app/");
});