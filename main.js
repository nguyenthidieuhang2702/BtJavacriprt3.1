// Bai 1

document.getElementById("ngayHomNay").onclick = function() {
    var ngay = document.getElementById("ngay").value;
    var thang = document.getElementById("thang").value;
    var nam = document.getElementById("nam").value;

    var ngaytiep = "";
    var thangtiep = "";
    var namtiep = "";

    //nếu ngày tháng năm thỏa mãn điều kiện của nó (nghĩa là tháng năm phải lớn hơn 0,....)
    if (nam > 0 && thang > 0 && thang < 13 && ngay > 0 && ngay <= (songaytrongthang(thang, nam))) {
        ngaytiep = ngay + 1;
        //nếu tháng nhập vào không phải tháng 12 và số ngày bằng số ngày tối đa của tháng thì ta tăng tháng lên 1 và ngày = 1
        if (thang != 12 && ngay == songaytrongthang(thang, nam)) {
            ngaytiep = 1;
            thangtiep = thang + 1;
        }
        //nếu tháng nhập vào là tháng 12 và số ngày bằng số ngày bằng 31 thì ta tăng tháng, năm lên 1 và ngày sẽ bằng 1
        else if (thang == 12 && ngay == songaytrongthang(thang, nam)) {
            ngaytiep = 1;
            namtiep = nam + 1;
            thangtiep = 1;
        } else if (thang == 2) {
            //nếu người dùng nhập vào ngày 28 thì tăng tháng lên 1 và ngày bằng 1
            if (ngay == 28) {
                ngaytiep = 1;
                thangtiep = thang + 1;
            }
        }
    }
    document.getElementById("footerNgayThang").innerHTML = ngaytiep + thangtiep + namtiep;
};
// Bai 2
document.getElementById("tinhNgay").onclick = function() {
    var thang = document.getElementById("thang").value;
    var nam = document.getElementById("nam").value;
    var soNgay = "";

    if (thang <= 1 || thang <= 12) {
        switch (thang) {
            // các tháng 1, 3, 5, 7, 8, 10 và 12 có 31 ngày.
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                soNgay = "Tháng " + thang + " có 31 ngày.";
                break;

                // các tháng 4, 6, 9 và 11 có 30 ngày
            case 4:
            case 6:
            case 9:
            case 11:
                soNgay = "Tháng " + nam + " có 30 ngày.";
                break;

                // Riêng tháng 2 nếu là năm nhuận thì có 29 ngày, còn không thì có 28 ngày.
            case 2:
                nam = scanner.nextInt();
                if ((nam % 4 == 0 && nam % 100 != 0) || (nam % 400 == 0)) {
                    soNgay = "Tháng" + thang + " năm " + nam + " có 29 ngày.";
                } else {
                    soNgay = "Tháng " + thang + " năm " + nam + " có 28 ngày.";
                }
                break;
        }
    } else {
        soNgay = "Khong ton tai thang nay";
    }



    document.getElementById("footerTinhNgay").innerHTML = soNgay;
};

// Bai 3
document.getElementById("docSo").onclick = function() {
    var So = document.getElementById("so").value;
    var donvi = So % 10;
    var chuc = So % 10;
    var tram = So / 10;
    var soHangTram = "";
    var soHangChuc = "";
    var soHangDonVi = "";
    var docSo = soHangTram + "tram" + soHangChuc + "muoi" + soHangDonVi;

    if (So < 100 || So > 999) {
        docSo = "Khong hop le !";
    } else {
        if (tram == 1) {
            soHangTram = "Mot";
        } else if (tram == 2) {
            soHangTram = "Hai";
        } else if (tram == 3) {
            soHangTram = "Ba";
        } else if (tram == 4) {
            soHangTram = "Bon";
        } else if (tram == 5) {
            soHangTram = "Nam";
        } else if (tram == 6) {
            soHangTram = "Sau";
        } else if (tram == 7) {
            soHangTram = "Bay";
        } else if (tram == 8) {
            soHangTram = "Tam";
        } else if (tram == 9) {
            soHangTram = "Chin";
        }

        if (chuc == 1) {
            soHangChuc = "Mot";
        } else if (chuc == 2) {
            soHangChuc = "Hai";
        } else if (chuc == 3) {
            soHangChuc = "Ba";
        } else if (chuc == 4) {
            soHangChuc = "Bon";
        } else if (chuc == 5) {
            soHangChuc = "Nam";
        } else if (chuc == 6) {
            soHangChuc = "Sau";
        } else if (chuc == 7) {
            soHangChuc = "Bay";
        } else if (chuc == 8) {
            soHangChuc = "Tam";
        } else if (chuc == 9) {
            soHangChuc = "Chin";
        }

        if (donvi == 1) {
            soHangDonVi = "Mot";
        } else if (donvi == 2) {
            soHangDonVi = "Hai";
        } else if (donvi == 3) {
            soHangDonVi = "Ba";
        } else if (donvi == 4) {
            soHangDonVi = "Bon";
        } else if (donvi == 5) {
            soHangDonVi = "Nam";
        } else if (donvi == 6) {
            soHangDonVi = "Sau";
        } else if (donvi == 7) {
            soHangDonVi = "Bay";
        } else if (donvi == 8) {
            soHangDonVi = "Tam";
        } else if (donvi == 9) {
            soHangDonVi = "Chin";
        }
    }

    document.getElementById("footerDocSo").innerHTML = docSo;
};

// Bai 4

document.getElementById("tim").onclick = function() {
    var SV1 = document.getElementById("ten1").value;
    var toaDoX1 = document.getElementById("toaDoX1").value;
    var toaDoY1 = document.getElementById("toaDoY1").value;
    var SV2 = document.getElementById("ten2").value;
    var toaDoX2 = document.getElementById("toaDoX2").value;
    var toaDoY2 = document.getElementById("toaDoY2").value;
    var SV3 = document.getElementById("ten3").value;
    var toaDoX3 = document.getElementById("toaDoX3").value;
    var toaDoY3 = document.getElementById("toaDoY3").value;
    var toaDoXTruong = document.getElementById("toaDoX4").value;
    var toaDoYTruong = document.getElementById("toaDoY4").value;
    var doDai1 = "";
    var doDai2 = "";
    var doDai3 = "";
    var khoangCach = "";

    // tính khoang cach
    doDai1 = Math.sqrt(Math.pow((toaDoX1 - toaDoXTruong), 2) + Math.pow((toaDoY1 - toaDoYTruong), 2));
    doDai2 = Math.sqrt(Math.pow((toaDoX2 - toaDoXTruong), 2) + Math.pow((toaDoY2 - toaDoYTruong), 2));
    doDai1 = Math.sqrt(Math.pow((toaDoX3 - toaDoXTruong), 2) + Math.pow((toaDoY3 - toaDoYTruong), 2));

    if (doDai1 >= doDai2 && doDai1 >= doDai3) {
        khoangCach = "Sinh vien xa truong nhat:" + SV1;
    } else if (doDai2 >= doDai1 && doDai2 >= doDai3) {
        khoangCach = "Sinh vien xa truong nhat:" + SV2;
    } else {
        khoangCach = "Sinh vien xa truong nhat:" + SV3;
    }

    document.getElementById("footerTim").innerHTML = khoangCach;
};