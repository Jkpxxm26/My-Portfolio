const donateButton = document.getElementById('donateBtn');
const amountInput = document.getElementById('donateAmount');
const totalShow = document.getElementById('totalShow');
let totel = 0;

const getMoney = () => {
    const money = amountInput.value;

    if (money !== "" && Number(money) > 0) {
        totel = Number(money) + totel;
        totalShow.innerText = totel;
        amountInput.value = '';
        alert("ขอบคุณสำหรับโดเนทครับ");
    } else {
        alert("กรุณากรอกจำนวนเงินให้ถูกต้อง");
    }
}

donateButton.addEventListener('click', getMoney);
