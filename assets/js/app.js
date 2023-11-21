const taban = 187.5;
const katsayiTRK = 4.99;
const katsayiINK = 1.8;
const katsayiDIN = 1.7;
const katsayiDIL = 2.13;
const katsayiMAT = 6.59;
const katsayiFEN = 5.61;
const dogruyanlisgoturme = 3;

function guncelleNet(dogruId, yanlisId, netId, toplamSoruSayisi) {
    const dogru = parseInt(document.getElementById(dogruId).value) || 0;
    const yanlis = parseInt(document.getElementById(yanlisId).value) || 0;
    const net = dogru - (yanlis / 3).toFixed(2);
    document.getElementById(netId).value = net;

    // Toplam soru sayısını kontrol et
    const toplamSoru = dogru + yanlis;
    if (toplamSoru > toplamSoruSayisi) {
        alert("Toplam soru sayısı " + toplamSoruSayisi + " olmalıdır.");
        document.getElementById(dogruId).value = "";
        document.getElementById(yanlisId).value = "";
        document.getElementById(netId).value = "";
    }
}

function hesaplaPuan() {
    const netTRK = parseFloat(document.getElementById('netTRK').value) || 0;
    const netINK = parseFloat(document.getElementById('netINK').value) || 0;
    const netDIN = parseFloat(document.getElementById('netDIN').value) || 0;
    const netDIL = parseFloat(document.getElementById('netDIL').value) || 0;
    const netMAT = parseFloat(document.getElementById('netMAT').value) || 0;
    const netFEN = parseFloat(document.getElementById('netFEN').value) || 0;

    const toplamNet = netTRK + netINK + netDIN + netDIL + netMAT + netFEN;

    const lgsPuan = toplamNet === 0 ? 0 : taban + (netTRK * katsayiTRK) + (netINK * katsayiINK) + (netDIN * katsayiDIN) + (netDIL * katsayiDIL) + (netMAT * katsayiMAT) + (netFEN * katsayiFEN) + dogruyanlisgoturme;

    document.getElementById('sonuc').innerText = "LGS Puanınız: " + lgsPuan.toFixed(2);
    document.getElementById('toplamNet').innerText = "Toplam Net: " + toplamNet.toFixed(2);
}
