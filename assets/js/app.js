const taban = 99.9;
const katsayiTRK = 4.99;
const katsayiINK = 1.8;
const katsayiDIN = 1.7;
const katsayiDIL = 2.13;
const katsayiMAT = 6.59;
const katsayiFEN = 5.61;
const dogruyanlisgoturme = 3;

const body = document.querySelector("body");


function guncelleNet(dogruId, yanlisId, netId, toplamSoruSayisi) {
    const dogru = parseInt(document.getElementById(dogruId).value) || 0;
    const yanlis = parseInt(document.getElementById(yanlisId).value) || 0;
    const net = (dogru - yanlis / 3).toFixed(2);
    document.getElementById(netId).value = net;

    // Toplam soru sayısını kontrol et
    const toplamSoru = dogru + yanlis;
    if (toplamSoru > toplamSoruSayisi) {
        // alert("Toplam soru sayısı " + toplamSoruSayisi + " olmalıdır.");
        showAlert("danger", "Toplam soru sayısı " + toplamSoruSayisi + " olmalıdır.");
        document.getElementById(dogruId).value = "0";
        document.getElementById(yanlisId).value = "0";
        document.getElementById(netId).value = "0";
    }
}

function guncelleToplamDogru() {
    const dogruTRK = parseInt(document.getElementById('dogruTRK').value) || 0;
    const dogruINK = parseInt(document.getElementById('dogruINK').value) || 0;
    const dogruDIN = parseInt(document.getElementById('dogruDIN').value) || 0;
    const dogruDIL = parseInt(document.getElementById('dogruDIL').value) || 0;
    const dogruMAT = parseInt(document.getElementById('dogruMAT').value) || 0;
    const dogruFEN = parseInt(document.getElementById('dogruFEN').value) || 0;

    const toplamDogru = dogruTRK + dogruINK + dogruDIN + dogruDIL + dogruMAT + dogruFEN;

    document.getElementById('toplamDogru').value = toplamDogru;
    // console.log(toplamDogru);
}

function guncelleToplamYanlis() {
    const yanlisTRK = parseInt(document.getElementById('yanlisTRK').value) || 0;
    const yanlisINK = parseInt(document.getElementById('yanlisINK').value) || 0;
    const yanlisDIN = parseInt(document.getElementById('yanlisDIN').value) || 0;
    const yanlisDIL = parseInt(document.getElementById('yanlisDIL').value) || 0;
    const yanlisMAT = parseInt(document.getElementById('yanlisMAT').value) || 0;
    const yanlisFEN = parseInt(document.getElementById('yanlisFEN').value) || 0;

    const toplamYanlis = yanlisTRK + yanlisINK + yanlisDIN + yanlisDIL + yanlisMAT + yanlisFEN;

    document.getElementById('toplamYanlis').value = toplamYanlis;
    // console.log(toplamYanlis);
}


function hesaplaPuan() {
    const netTRK = parseFloat(document.getElementById('netTRK').value) || 0;
    const netINK = parseFloat(document.getElementById('netINK').value) || 0;
    const netDIN = parseFloat(document.getElementById('netDIN').value) || 0;
    const netDIL = parseFloat(document.getElementById('netDIL').value) || 0;
    const netMAT = parseFloat(document.getElementById('netMAT').value) || 0;
    const netFEN = parseFloat(document.getElementById('netFEN').value) || 0;

    const dogruTRK = document.getElementById('dogruTRK').value;
    const dogruINK = document.getElementById('dogruINK').value;
    const dogruDIN = document.getElementById('dogruDIN').value;
    const dogruDIL = document.getElementById('dogruDIL').value;
    const dogruMAT = document.getElementById('dogruMAT').value;
    const dogruFEN = document.getElementById('dogruFEN').value;

    if (dogruTRK == 0 || dogruINK == 0 || dogruDIN == 0 || dogruDIL == 0 || dogruMAT == 0 || dogruFEN == 0) {
        // alert("Formu Tamamen Doldurmalısınız! Lütfen Tekrar Deneyin");
        // showAlert("Formu Tamamen Doldurmalısınız! Lütfen Tekrar Deneyin.", "danger");
        showAlert("danger", "Formu Tamamen Doldurmalısınız! Lütfen Tekrar Deneyin.");
        return;
    }

    const lgsPuan = taban + (netTRK * katsayiTRK) + (netINK * katsayiINK) + (netDIN * katsayiDIN) + (netDIL * katsayiDIL) + (netMAT * katsayiMAT) + (netFEN * katsayiFEN) + dogruyanlisgoturme;
    const toplamNet = netTRK + netINK + netDIN + netDIL + netMAT + netFEN;

    // showAlert("İşlem Başarıyla Tamamlandı", "Okey");
    showAlert("success", "İşlem başarıyla tamamlandı.");

    document.getElementById('toplamNet').value = toplamNet.toFixed(2);
    document.getElementById('sonuc').innerText = "LGS Puanınız: " + lgsPuan.toFixed(2);
}

function activateInput(e) {
    var input = document.getElementById(e);
    if (input.value === '0') {
        input.value = '';
    }
}

function deactivateInput(e) {
    var input = document.getElementById(e);
    if (input.value === '') {
        input.value = '0';
    }
}

//eski alert

//   function showAlert(type, message) {
//     removeAlerts();
//     const alert = document.createElement("div");
//     const closeButton = document.createElement("button");

//     alert.className = `alert alert-${type} alert-dismissible fade show mt-3`;
//     alert.textContent = message;
//     alert.style = "margin-bottom: -41px;";

//     closeButton.className = "close";
//     closeButton.type = "button";
//     closeButton.ariaLabel = "Close";
//     closeButton.setAttribute("data-dismiss", "alert");
//     closeButton.innerHTML = "<span aria-hidden='true'>&times;</span>";

//     kral.appendChild(alert);
//     alert.appendChild(closeButton);

//     setTimeout(function () {
//         alert.remove();
//     }, 3000)
// }

function showAlert(type, message) {
    removeAlerts();
    const alert = document.createElement("div");
    const closeButton = document.createElement("button");

    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    alert.style = "position: fixed; right: 5px; bottom: 0px; z-index: 9999; max-width: 387px;"

    closeButton.className = "close";
    closeButton.type = "button";
    closeButton.ariaLabel = "Close";
    closeButton.setAttribute("data-dismiss", "alert");
    closeButton.setAttribute("aria-hidden", "true");
    closeButton.innerHTML = "×";

    body.appendChild(alert);
    alert.appendChild(closeButton);

    setTimeout(function () {
        alert.remove();
    }, 3000)
}


function removeAlerts() {
    const errorAlert = document.querySelector(".alert-danger");
    const successAlert = document.querySelector(".alert-success");
    if (errorAlert) {
        errorAlert.remove();
    }
    if (successAlert) {
        successAlert.remove();
    }
}


// Mobil ekranda placeholder silinme kodu

document.addEventListener('DOMContentLoaded',function(){
    const input = document.querySelectorAll('input');

    input.forEach(function(inputs){
        if(window.innerWidth <= 768){
            inputs.removeAttribute('placeholder');
        }
        else{
            inputs.setAttribute('placeholder','Bir Değer Giriniz')
        }
    })
});

removePlaceholderOnMobile();

window.addEventListener('resize', function(){
    removePlaceholderOnMobile();
})

//devam edilecek modal

// function showAlert(message, title){
//     // removeAlerts();
//     const modal = document.createElement("div");
//     const modalDialog = document.createElement("div");
//     const modalContent = document.createElement("div");
//     const modalHeader = document.createElement("div");
//     const modalTitle = document.createElement("h5");
//     const modalBody = document.createElement("div");
//     const modalFooter = document.createElement("div");
//     const closeButton = document.createElement("button");
//     const times = document.createElement("span");

//     modal.className = "modal fade";
//     modal.id = "uyariModal";
//     modal.setAttribute("tabindex","-1");
//     modal.setAttribute("role","dialog");
//     modal.setAttribute("aria-labelledby","modalLabel");
//     modal.setAttribute("aria-hidden","true");

//     modalDialog.className = "modal-dialog";
//     modalDialog.setAttribute("role","document");
    
//     modalContent.className = "modal-content";

//     modalHeader.className = "modal-header";

//     modalTitle.className = "modal-title";
//     modalTitle.innerHTML = title;
//     modalTitle.id = "modalLabel";

//     modalBody.className = "modal-body";
//     modalBody.innerHTML = message;
//     modalFooter.className = "modal-footer";

//     closeButton.className = "close"
//     closeButton.setAttribute("data-dismiss","modal");
//     closeButton.setAttribute("aria-label","Close");

//     times.setAttribute("aria-hidden", "true");
//     times.innerHTML = "&times;";

//     document.body.appendChild(modal);
//     modal.appendChild(modalDialog);
//     modalDialog.appendChild(modalContent);
//     modalContent.appendChild(modalHeader);
//     modalHeader.appendChild(modalTitle);
//     modalHeader.appendChild(closeButton);
//     closeButton.appendChild(times);
//     modalContent.appendChild(modalBody);
//     modalContent.appendChild(modalFooter);
// }