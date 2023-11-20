// TR
const TRKDogru = document.getElementById('txtTRKDogru');
const TRKYanlis = document.getElementById('txtTRKYanlis');
const TRKNet = document.getElementById('txtTRKNet');

// INK
const INKDogru = document.getElementById('txtINKDogru');
const INKYanlis = document.getElementById('txtINKYanlis');
const INKNet = document.getElementById('txtINKNet');

// DIN
const DINDogru = document.getElementById('txtDINDogru');
const DINYanlis = document.getElementById('txtDINYanlis');
const DINNet = document.getElementById('txtDINNet');

// DIL
const DILDogru = document.getElementById('txtDILDogru');
const DILYanlis = document.getElementById('txtDILYanlis');
const DILNet = document.getElementById('txtDILNet');

// MAT
const MATDogru = document.getElementById('txtMATDogru');
const MATYanlis = document.getElementById('txtMATYanlis');
const MATNet = document.getElementById('txtMATNet');

// FEN
const FENDogru = document.getElementById('txtFENDogru');
const FENYanlis = document.getElementById('txtFENYanlis');
const FENNet = document.getElementById('txtFENNet');

// Toplamlar

const ToplamDogru = document.getElementById('txtToplamDogru');
const ToplamYanlis = document.getElementById('txtToplamYanlis');
const ToplamNet = document.getElementById('txtToplamNet');
const ToplamPuan = document.getElementById('txtToplamPuan');


// TanÄ±mlar:
const taban = 99.9;
const katsayiTRK = 4.99;
const katsayiINK = 1.8;
const katsayiDIN = 1.7;
const katsayiDIL = 2.13;
const katsayiMAT = 6.59;
const katsayiFEN = 5.61;
const dogruyanlisgoturme = 3;


function yuvarlama(sayi) {
    let yuvarlamastring = sayi.toFixed(2);
    let yuvarlanmis = Number(yuvarlamastring);
    return yuvarlanmis;
}

function nethesapla(dogrusayisi, yanlissayisi) {
    let netsayisi = dogrusayisi - (yanlissayisi / dogruyanlisgoturme);
    netsayisi = yuvarlama(netsayisi);
    return netsayisi;
}

function puanhesapla() {
    let TRKpuan = parseFloat(TRKNet.value) * katsayiTRK;
    let INKpuan = parseFloat(INKNet.value) * katsayiINK;
    let DINpuan = parseFloat(DINNet.value) * katsayiDIN;
    let DILpuan = parseFloat(DILNet.value) * katsayiDIL;
    let MATpuan = parseFloat(MATNet.value) * katsayiMAT;
    let FENpuan = parseFloat(FENNet.value) * katsayiFEN;
    let puan = taban + (TRKpuan + INKpuan + DINpuan + DILpuan + MATpuan + FENpuan);
    return puan;
}

$(".textbox2").on("click", function () {
    if ($(this).val() == "0")
        $(this).val("");
});

function sadacesayiformati(evt) {
    $(evt).on("keyup", function () {
        var o = $(this);
        o.val(o.val().replace(/[^\d]/g, ""));
    });
}
function virgullusayiformati(evt) {
    $(evt).on("keyup", function () {
        var o = $(this);
        o.val(o.val().replace(/[^\d,]/g, ""));
    });
}


function YirmiKontrol() {
    if (txtTRKDogru.value > 20) {
        alert("Soru Sayısından Büyük Olamaz!");
        txtTRKDogru.value = 20;
        ToplamDogru.value += parseFloatInt(txtTRKDogru.value);
        txtTRKYanlis.value = 0;
    }
    if (txtTRKYanlis.value > 20) {
        alert("Soru Sayısından Büyük Olamaz!");
        txtTRKYanlis.value = 20;
        txtTRKDogru.value = 0;
    }
    var txtNetTrk = (parseFloat(txtTRKDogru.value)) + (parseFloat(txtTRKYanlis.value));
    if (txtNetTrk > 20) {
        alert("Soru Sayısından Büyük Olamaz!");
        txtTRKDogru.value = 0;
        txtTRKYanlis.value = 0;
    }
    if (txtMATDogru.value > 20) {
        alert("Soru Sayısından Büyük Olamaz!");
        txtMATDogru.value = 20;
        txtMATYanlis.value = 0;
    }
    if (txtMATYanlis.value > 20) {
        alert("Soru Sayısından Büyük Olamaz!");
        txtMATYanlis.value = 20;
        txtMATDogru.value = 0;
    }
    var txtNetMat = (parseFloat(txtMATDogru.value)) + (parseFloat(txtMATYanlis.value));
    if (txtNetMat > 20) {
        alert("Soru Sayısından Büyük Olamaz!");
        txtMATDogru.value = 0;
        txtMATYanlis.value = 0;
    }
    if (txtFENDogru.value > 20) {
        alert("Soru Sayısından Büyük Olamaz!");
        txtFENDogru.value = 20;
        txtFENYanlis.value = 0;
    }
    if (txtFENYanlis.value > 20) {
        alert("Soru Sayısından Büyük Olamaz!");
        txtFENYanlis.value = 20;
        txtFENDogru.value = 0;
    }
    var txtNetFEN = (parseFloat(txtFENDogru.value)) + (parseFloat(txtFENYanlis.value));
    if (txtNetFEN > 20) {
        alert("Soru Sayısından Büyük Olamaz!");
        txtFENDogru.value = 0;
        txtFENYanlis.value = 0;
    }
    if (txtINKDogru.value > 10) {
        alert("Soru Sayısından Büyük Olamaz!");
        txtINKDogru.value = 10;
        txtINKYanlis.value = 0;
    }
    if (txtINKYanlis.value > 10) {
        alert("Soru Sayısından Büyük Olamaz!");
        txtINKYanlis.value = 10;
        txtINKDogru.value = 0;
    }
    var txtNetINK = (parseFloat(txtINKDogru.value)) + (parseFloat(txtINKYanlis.value));
    if (txtNetINK > 10) {
        alert("Soru Sayısından Büyük Olamaz!");
        txtINKDogru.value = 0;
        txtINKYanlis.value = 0;
    }
    if (txtDILDogru.value > 10) {
        alert("Soru Sayısından Büyük Olamaz!");
        txtDILDogru.value = 10;
        txtDILYanlis.value = 0;
    }
    if (txtDILYanlis.value > 10) {
        alert("Soru Sayısından Büyük Olamaz!");
        txtDILYanlis.value = 10;
        txtDILDogru.value = 0;
    }
    var txtNetDIL = (parseFloat(txtDILDogru.value)) + (parseFloat(txtDILYanlis.value));
    if (txtNetDIL > 10) {
        alert("DIN Doğru ve Yanlış Sayısı Toplam soru sayısından büyük olamaz!");
        txtDILDogru.value = 0;
        txtDILYanlis.value = 0;
    }
    if (txtDINDogru.value > 10) {
        alert("Soru Sayısından Büyük Olamaz!");
        txtDINDogru.value = 10;
        txtDINYanlis.value = 0;
    }
    if (txtDINYanlis.value > 10) {
        alert("Soru Sayısından Büyük Olamaz!");
        txtDINYanlis.value = 10;
        txtDINDogru.value = 0;
    }
    var txtNetDIN = (parseFloat(txtDINDogru.value)) + (parseFloat(txtDINYanlis.value));
    if (txtNetDIN > 10) {
        alert("DIN Doğru ve Yanlış Sayısı Toplam soru sayısından büyük olamaz!");
        txtDINDogru.value = 0;
        txtDINYanlis.value = 0;
    }
}

// TRKDogru.addEventListener("keyup", function(){
//     TRKNet.value = nethesapla(TRKDogru.value,TRKYanlis.value);
// });

// TRKYanlis.addEventListener("keyup", function(){
//    TRKNet.value = nethesapla(TRKDogru.value,TRKYanlis.value);
// })

// INKDogru.addEventListener("keyup", function(){
//    INKNet.value = nethesapla(INKDogru.value,INKYanlis.value);
// });

// INKYanlis.addEventListener("keyup", function(){
//    INKNet.value = nethesapla(INKDogru.value,INKYanlis.value);
// });

// DINDogru.addEventListener("keyup", function(){
//    DINNet.value = nethesapla(DINDogru.value,DINYanlis.value);
// });

// DINYanlis.addEventListener("keyup", function(){
//    DINNet.value = nethesapla(DINDogru.value,DINYanlis.value);
// });

// DILDogru.addEventListener("keyup", function(){
//    DILNet.value = nethesapla(DILDogru.value,DILYanlis.value);
// });

// DILYanlis.addEventListener("keyup", function(){
//    DILNet.value = nethesapla(DILDogru.value,DILYanlis.value);
// });

// MATDogru.addEventListener("keyup", function(){
//    MATNet.value = nethesapla(MATDogru.value,MATYanlis.value);
// });

// MATYanlis.addEventListener("keyup", function(){
//    MATNet.value = nethesapla(MATDogru.value,MATYanlis.value);
// });

// FENDogru.addEventListener("keyup", function(){
//    FENNet.value = nethesapla(FENDogru.value,FENYanlis.value);
// });

// FENYanlis.addEventListener("keyup", function(){
//     FENNet.value = nethesapla(FENDogru.value,FENYanlis.value);
//  });

document.addEventListener("keyup", function () {
    ToplamDogru.value = 0;
    ToplamYanlis.value = 0;
    ToplamNet.value = 0;
    ToplamPuan.value = 0;
    TRKNet.value = nethesapla(TRKDogru.value, TRKYanlis.value);
    TRKNet.value = nethesapla(TRKDogru.value, TRKYanlis.value);
    INKNet.value = nethesapla(INKDogru.value, INKYanlis.value);
    INKNet.value = nethesapla(INKDogru.value, INKYanlis.value);
    DINNet.value = nethesapla(DINDogru.value, DINYanlis.value);
    DINNet.value = nethesapla(DINDogru.value, DINYanlis.value);
    DILNet.value = nethesapla(DILDogru.value, DILYanlis.value);
    DILNet.value = nethesapla(DILDogru.value, DILYanlis.value);
    MATNet.value = nethesapla(MATDogru.value, MATYanlis.value);
    MATNet.value = nethesapla(MATDogru.value, MATYanlis.value);
    FENNet.value = nethesapla(FENDogru.value, FENYanlis.value);
    FENNet.value = nethesapla(FENDogru.value, FENYanlis.value);
    ToplamDogru.value = (parseFloat(TRKDogru.value) + parseFloat(INKDogru.value) + parseFloat(DINDogru.value) + parseFloat(DILDogru.value) + parseFloat(MATDogru.value) + parseFloat(FENDogru.value));
    ToplamYanlis.value = (parseFloat(TRKYanlis.value) + parseFloat(INKYanlis.value) + parseFloat(DINYanlis.value) + parseFloat(DILYanlis.value) + parseFloat(MATYanlis.value) + parseFloat(FENYanlis.value));
    ToplamNet.value = ((parseFloat(TRKNet.value) + parseFloat(INKNet.value) + parseFloat(DINNet.value) + parseFloat(DILNet.value) + parseFloat(MATNet.value) + parseFloat(FENNet.value))).toFixed(2);
    ToplamPuan.value = puanhesapla().toFixed(3);

});
