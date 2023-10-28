class NguyenLieu {
  constructor(ten, soLuong, donVi) {
    this.ten = ten;
    this.soLuong = soLuong;
    this.donVi = donVi;
  }
}

class MonAn {
  constructor(ten, moTa, nguyenLieu, hd) {
      this.ten = ten;
      this.moTa = moTa;
      this.nguyenLieu = nguyenLieu;
      this.hd = hd;
  }
  capNhatSoLuongNguyenLieu(tenNguyenLieu, soLuongMoi) {
      const nguyenLieuCanCapNhat = this.nguyenLieu.find(
        (nguyenLieu) => nguyenLieu.ten === tenNguyenLieu
      );
  
      if (nguyenLieuCanCapNhat) {
        nguyenLieuCanCapNhat.soLuong = soLuongMoi;
      } else {
        console.log(`Nguyên liệu "${tenNguyenLieu}" không tồn tại trong món ăn.`);
      }
  }
}

class meal {
  constructor(ten, monAn) {
      this.ten = ten;
      this.monAn = monAn;
  }

  themMonAn(monAn) {
      this.monAn.push(monAn);
  }
  xoamonAn() {
      this.monAn = [];
  }
}

let thucDon1 = [];
let thucDon2 = [];
let thucDon3 = [];
make_menu();


window.addEventListener('load', ()=> {
  if(document.getElementById('inp_name') != null){
  const name = localStorage.getItem('NAME');
  const ages = localStorage.getItem('AGES');
  const weight = localStorage.getItem('WEIGHT');
  const height = localStorage.getItem('HEIGHT');
  
    document.getElementById('inp_name').value = name;
    document.getElementById('inp_ages').value = ages;
    document.getElementById('inp_weight').value = weight;
    document.getElementById('inp_height').value = height;

  const gender  = localStorage.getItem('GENDER');
  const Male = document.getElementById('dot-1');
  const Female = document.getElementById('dot-2');
  if (gender == "Male") 
      Male.checked = true;
  else if (gender == "Female")   Female.checked = true;


  const sickness = localStorage.getItem('SICK');
  const daithaoduong = document.getElementById('dot-1a');
  const suythanman = document.getElementById('dot-2a');
  const caohuyetap = document.getElementById('dot-3a');
  const binhthuong = document.getElementById('dot-4a');
  if (sickness == "daithaoduong") 
      daithaoduong.checked = true;
  else if (sickness == "suythanman") suythanman.checked = true;
  else if (sickness== "caohuyetap") caohuyetap.checked = true;
  else binhthuong.checked = true;

  const jobs = localStorage.getItem('JOBS');
  const laodongnang = document.getElementById('dot-1b');
  const laodongvua = document.getElementById('dot-2b');
  const laodongnhe = document.getElementById('dot-3b');
  if (jobs == "ldnang") 
      laodongnang.checked = true;
  else if (jobs == "ldvua") laodongvua.checked = true;
  else if (jobs== "ldnhe") laodongnhe.checked = true;
  }
})
  function handleSubmit () {
      const FullName = document.getElementById('inp_name').value;
      const Ages = document.getElementById('inp_ages').value;
      const Wght = document.getElementById('inp_weight').value;
      const Hght = document.getElementById('inp_height').value;
     
      var Jobs;
      var Gender;
      var Sick;
      var a = document.getElementsByName("gender");
      if(a[0].checked) Gender = a[0].value; 
          else Gender = a[1].value; 
      
      var a = document.getElementsByName("job");
      if(a[0].checked) Jobs = a[0].value;
          else if(a[1].checked) Jobs = a[1].value;
              else Jobs = a[2].value;

      var a = document.getElementsByName("sickness");
      if(a[0].checked) Sick = a[0].value;
          else if(a[1].checked) Sick = a[1].value;
              else if(a[2].checked) Sick = a[2].value;
                  else Sick = a[3].value;

      

      localStorage.setItem("SICK", Sick);
      localStorage.setItem("JOBS", Jobs);
      localStorage.setItem("GENDER", Gender);
      localStorage.setItem("NAME", FullName);
      localStorage.setItem("AGES", Ages);
      localStorage.setItem("WEIGHT", Wght);
      localStorage.setItem("HEIGHT", Hght);
  return;
  }

  function chaud(Calo) {
    //làm rỗng thực đơn
    thucDon1 = [];

    //nguyên liệu
    const yenmach = new NguyenLieu("yến mạch", 0, "gram");
    const nuoc = new NguyenLieu("nước", 0, "ml");
    const hatlanh = new NguyenLieu("hạt lanh", 0, "gram");
    const quadua = new NguyenLieu("quả dứa", 0, "gram");
    const ga = new NguyenLieu("gà", 0, "gram");
    const rauxanh = new NguyenLieu("rau xanh", 0, "gram");
    const bo = new NguyenLieu("bơ", 0, "gram");
    const hanhtay = new NguyenLieu("hành tây", 0, "gram");
    const loxanh = new NguyenLieu("lơ xanh", 0, "gram");
    const cachua = new NguyenLieu("cà chua", 0, "gram");
    const cahoi = new NguyenLieu("cá hồi", 0, "gram");
    const luamach = new NguyenLieu("lúa mạch", 0, "gram");

    //món ăn
    const chaoyenmachkhongduongvoihatlanhvaquadua = new MonAn("cháo yến mạch không đường với hạt lanh và quả dứa", "menu_img/chaoyenmachkhongduongvoihatlanhvaquadua.jpg", [yenmach, nuoc, hatlanh, quadua], "https://www.youtube.com/embed/aOfxu90TGAQ?si=u479cjtVvgelqO_3");
    const ganuongkhongdavoirauxanh = new MonAn("gà nướng không da với rau xanh", "menu_img/ganuongkhongdavoirauxanh.jpg", [ga, rauxanh, bo, hanhtay], "https://www.youtube.com/embed/jzY0G2ziPIs?si=Y-0lVCXYjAa6rIUi");
    const suploxanhvacachua = new MonAn("xúp lơ xanh và cà chua", "menu_img/suploxanhvacachua.jpg", [loxanh, cachua, nuoc], "https://www.youtube.com/embed/a7qOAxfDEe0?si=hQ_j8BWeggJql7VL");
    const cahoinuongvoiluamachvarauxanh = new MonAn("cá hồi nướng với lúa mạch và rau xanh", "menu_img/cahoinuongvoiluamachvarauxanh.jpg", [cahoi, luamach, rauxanh], "https://www.youtube.com/embed/0JOfwDLuTEU?si=zLdMBloeIsrDOQqF");

    //cập nhật số lượng
    chaoyenmachkhongduongvoihatlanhvaquadua.capNhatSoLuongNguyenLieu("yến mạch", Math.round((8.7 * Calo / 100) / 0.676));
    chaoyenmachkhongduongvoihatlanhvaquadua.capNhatSoLuongNguyenLieu("nước", 100);
    chaoyenmachkhongduongvoihatlanhvaquadua.capNhatSoLuongNguyenLieu("hạt lanh", Math.round((4.3 * Calo / 100) / 5.339));
    chaoyenmachkhongduongvoihatlanhvaquadua.capNhatSoLuongNguyenLieu("quả dứa", Math.round((2.2 * Calo / 100) / 0.5));
    ganuongkhongdavoirauxanh.capNhatSoLuongNguyenLieu("gà", Math.round((18.3 * Calo / 100) / 2.39));
    ganuongkhongdavoirauxanh.capNhatSoLuongNguyenLieu("rau xanh", Math.round((9.1 * Calo / 100) / 0.3));
    ganuongkhongdavoirauxanh.capNhatSoLuongNguyenLieu("bơ", Math.round((1.5 * Calo / 100) / 1.6));
    ganuongkhongdavoirauxanh.capNhatSoLuongNguyenLieu("hành tây", Math.round((1.5 * Calo / 100) / 0.4));
    suploxanhvacachua.capNhatSoLuongNguyenLieu("lơ xanh", Math.round((5.2 * Calo / 100) / 0.337));
    suploxanhvacachua.capNhatSoLuongNguyenLieu("cà chua", Math.round((5.2 * Calo / 100) / 0.18));
    suploxanhvacachua.capNhatSoLuongNguyenLieu("nước", 100);
    cahoinuongvoiluamachvarauxanh.capNhatSoLuongNguyenLieu("cá hồi", Math.round((17.4 * Calo / 100) / 2.082));
    cahoinuongvoiluamachvarauxanh.capNhatSoLuongNguyenLieu("lúa mạch", Math.round((10.4 * Calo / 100) / 3.54));
    cahoinuongvoiluamachvarauxanh.capNhatSoLuongNguyenLieu("rau xanh", Math.round((7 * Calo / 100) / 0.3));

    //bữa ăn
    const sang = new meal("7h", [chaoyenmachkhongduongvoihatlanhvaquadua]);
    const trua = new meal("11h", [ganuongkhongdavoirauxanh]);
    const chieu = new meal("17h", [suploxanhvacachua, cahoinuongvoiluamachvarauxanh]);

    thucDon1 = [sang, trua, chieu];
    // Thực đơn thứ 2 (Thứ 2)
    thucDon2 = [];

    // Nguyên liệu (Ingredients)
    const bun = new NguyenLieu("bún", 0, "gram");
    const thitBo = new NguyenLieu("thịt bò", 0, "gram");
    const huyetSan = new NguyenLieu("huyết sán", 0, "gram");
    const rauSong = new NguyenLieu("rau sống", "tùy nhu cầu", "");
    const giaVi = new NguyenLieu("gia vị", "tùy nhu cầu", "");
    const gaTuoi = new NguyenLieu("gà tươi", 0, "gram");
    const rauCai = new NguyenLieu("rau cải", 0, "gram");

    // Món ăn (Dishes)
    const bunBoHue = new MonAn("Bún bò Huế", "menu_img/bunbohue.jpg", [bun, thitBo, huyetSan, rauSong, giaVi], "https://www.youtube.com/embed/A-ADxIIEVGE?si=60KltxQfbNm3WrAp");
    const goiGa = new MonAn("Gỏi gà", "menu_img/goiga.jpg", [gaTuoi, rauSong, bun, giaVi], "https://www.youtube.com/embed/gMB3l7mI34U?si=hYEe1x920yHB2k5Y");
    const canhRauCaiLuoc = new MonAn("Canh rau cải luộc", "menu_img/canhraucailuoc.jpg", [rauCai, giaVi], "https://www.youtube.com/embed/GnsQ4J08VXI?si=lcadiGaMdUOCLlCB");

    // Cập nhật số lượng nguyên liệu dựa trên %
    // Bún bò Huế
    bunBoHue.capNhatSoLuongNguyenLieu("bún", Math.round((12 * Calo / 100) / 1.1));
    bunBoHue.capNhatSoLuongNguyenLieu("thịt bò", Math.round((8 * Calo / 100) / 2.5));
    bunBoHue.capNhatSoLuongNguyenLieu("huyết sán", Math.round((3 * Calo / 100) / 1.12));

    // Gỏi gà
    goiGa.capNhatSoLuongNguyenLieu("gà tươi", Math.round((9 * Calo / 100) / 1.65));
    goiGa.capNhatSoLuongNguyenLieu("bún", Math.round((5 * Calo / 100) / 1.1));

    // Canh rau cải luộc
    canhRauCaiLuoc.capNhatSoLuongNguyenLieu("rau cải", Math.round((6 * Calo / 100) / 0.65));

    // Bữa ăn (Meals)
    const sangThu2 = new meal("7h", [bunBoHue]);
    const truaThu2 = new meal("11h", [goiGa]);
    const chieuThu2 = new meal("20h", [canhRauCaiLuoc]);

    thucDon2 = [sangThu2, truaThu2, chieuThu2];

    // Thực đơn thứ 3 (Thứ 3)
    thucDon3 = [];

    // Nguyên liệu (Ingredients)
    const banhMiLuaMach = new NguyenLieu("bánh mì lúa mạch", 0, "gram");
    const trung = new NguyenLieu("trứng", 0, "gram");
    const chaCa = new NguyenLieu("chả cá", 0, "gram");
    const com = new NguyenLieu("cơm", 0, "gram");
    const gung = new NguyenLieu("gừng", 0, "gram");
    const biDo = new NguyenLieu("bí đỏ", 0, "gram");
    const hatSen = new NguyenLieu("hạt sen", 0, "gram");
    const giaVi3 = new NguyenLieu("gia vị", "tùy nhu cầu", "");

    // Món ăn (Dishes)
    const banhMiNuongTrungTrangChaCa = new MonAn("Bánh mì nướng trứng tráng chả cá", "menu_img/banhminuongtrungtrangchaca.jpg", [banhMiLuaMach, trung, chaCa], "https://www.youtube.com/embed/CSruC_f2Zrw?si=_g7LKT615At2yVPI");
    const comGaHapGung = new MonAn("Cơm gà hấp gừng", "menu_img/comgahaprung.jpg", [com, ga, gung, rauSong, giaVi3], "https://www.youtube.com/embed/yDjhvD3tuag?si=zHRODSG6b8pPW6fL");
    const canhBiDoHatSenLuoc = new MonAn("Canh bí đỏ và hạt sen luộc", "menu_img/canhbidohatsenluoc.jpg", [biDo, hatSen, giaVi3], "https://www.youtube.com/embed/GnTgkbssjVM?si=uIIWriTS3ZRe4pbe");

    // Cập nhật số lượng nguyên liệu dựa trên %
    // Bánh mì nướng trứng tráng chả cá
    banhMiNuongTrungTrangChaCa.capNhatSoLuongNguyenLieu("bánh mì lúa mạch", Math.round((12 * Calo / 100) / 2.591));
    banhMiNuongTrungTrangChaCa.capNhatSoLuongNguyenLieu("trứng", Math.round((7 * Calo / 100) / 1.551));
    banhMiNuongTrungTrangChaCa.capNhatSoLuongNguyenLieu("chả cá", Math.round((5 * Calo / 100) / 0.84));

    // Cơm gà hấp gừng
    comGaHapGung.capNhatSoLuongNguyenLieu("cơm", Math.round((15 * Calo / 100) / 0.13));
    comGaHapGung.capNhatSoLuongNguyenLieu("gà", Math.round((10 * Calo / 100) / 2.39));
    comGaHapGung.capNhatSoLuongNguyenLieu("gừng", Math.round((3 * Calo / 100) / 0.796));

    // Canh bí đỏ và hạt sen luộc
    canhBiDoHatSenLuoc.capNhatSoLuongNguyenLieu("bí đỏ", Math.round((6 * Calo / 100) / 0.261));
    canhBiDoHatSenLuoc.capNhatSoLuongNguyenLieu("hạt sen", Math.round((4 * Calo / 100) / 0.889));

    // Bữa ăn (Meals)
    const sangThu3 = new meal("7h", [banhMiNuongTrungTrangChaCa]);
    const truaThu3 = new meal("11h", [comGaHapGung]);
    const chieuThu3 = new meal("20h", [canhBiDoHatSenLuoc]);

    thucDon3 = [sangThu3, truaThu3, chieuThu3];
  }

  function stmud(Calo) {
    //làm rỗng thực đơn
    thucDon1 = [];

    //nguyên liệu
    const banhmiluamach = new NguyenLieu("bánh mì lúa mạch", 0, "gram");
    const mutdau = new NguyenLieu("mứt dâu", 0, "gram");
    const bohatlanh = new NguyenLieu("bơ hạt lanh", 0, "gram");
    const com = new NguyenLieu("cơm", 0, "gram");
    const thitga = new NguyenLieu("thịt gà", 0, "gram");
    const rauxanh = new NguyenLieu("rau xanh", "tùy nhu cầu", "");
    const banhmi = new NguyenLieu("bánh mì", 0, "gram");
    const hanhtay = new NguyenLieu("hành tây", "tùy nhu cầu", "");
    const hatlanh = new NguyenLieu("hạt lanh", 0, "gram");
    const cahoi = new NguyenLieu("cá hồi", 0, "gram");
    const luamach = new NguyenLieu("lúa mạch", 0, "gram");

    //món ăn
    const banhmiluamachvoimutdauvabohatlanh = new MonAn("bánh mì lúa mạch với mứt dâu và bơ hạt lanh", "menu_img/banhmiluamachvoimutdauvabohatlanh.jpg", [banhmiluamach, mutdau, bohatlanh]);
    const comtrangvoithitganuong = new MonAn("cơm trắng với thịt gà nướng(loại bỏ da) và rau xanh", "menu_img/comtrangvoithitganuong.jpg", [com, thitga, rauxanh], "https://www.youtube.com/embed/jzY0G2ziPIs?si=QejWOqhT3bIOIbk6");
    const banhmisandwichhapvoihanhtayvahatlanh = new MonAn("bánh mì sandwich hấp với hành tây và hạt lanh", "menu_img/banhmisandwichhapvoihanhtayvahatlanh.jpeg", [banhmi, hanhtay, hatlanh]);
    const cahoinuongvoiluamachvarauxanh = new MonAn("cá hồi nướng với lúa mạch và rau xanh", "menu_img/cahoinuongvoiluamachvarauxanh.jpg", [cahoi, luamach, rauxanh], "https://www.youtube.com/embed/0JOfwDLuTEU?si=H_6gCDJN8ZN85fNF");

    //cập nhật số lượng
    banhmiluamachvoimutdauvabohatlanh.capNhatSoLuongNguyenLieu("bánh mì lúa mạch", Math.round((11.1 * Calo / 100) / 2.591));
    banhmiluamachvoimutdauvabohatlanh.capNhatSoLuongNguyenLieu("mứt dâu", Math.round((6.7 * Calo / 100) / 6));
    banhmiluamachvoimutdauvabohatlanh.capNhatSoLuongNguyenLieu("bơ hạt lanh", Math.round((4.4 * Calo / 100) / 8.29));
    comtrangvoithitganuong.capNhatSoLuongNguyenLieu("cơm", Math.round((14.8 * Calo / 100) / 1.3));
    comtrangvoithitganuong.capNhatSoLuongNguyenLieu("thịt gà", Math.round((8.9 * Calo / 100) / 2.39));
    banhmisandwichhapvoihanhtayvahatlanh.capNhatSoLuongNguyenLieu("bánh mì", Math.round((7.4 * Calo / 100) / 2.646));
    banhmisandwichhapvoihanhtayvahatlanh.capNhatSoLuongNguyenLieu("hạt lanh", Math.round((5.6 * Calo / 100) / 5.339));
    cahoinuongvoiluamachvarauxanh.capNhatSoLuongNguyenLieu("cá hồi", Math.round((14.8 * Calo / 100) / 2.082));
    cahoinuongvoiluamachvarauxanh.capNhatSoLuongNguyenLieu("lúa mạch", Math.round((8.9 * Calo / 100) / 3.54));

    //bữa ăn
    const sang = new meal("7h", [banhmiluamachvoimutdauvabohatlanh]);
    const trua = new meal("11h", [comtrangvoithitganuong]);
    const chieu = new meal("17h", [banhmisandwichhapvoihanhtayvahatlanh, cahoinuongvoiluamachvarauxanh]);

    thucDon1 = [sang, trua, chieu];

    // Define ingredients
    thucDon2 = []
    const banhmiluamach3 = new NguyenLieu("Bánh mì lúa mạch", 0, "gram");
    const hantay3 = new NguyenLieu("Hành tây", 0, "gram");
    const giaVi3 = new NguyenLieu("Gia vị", "tùy nhu cầu", "");
    const com4 = new NguyenLieu("Cơm", 0, "gram");
    const thitbo3 = new NguyenLieu("Thịt bò", 0, "gram");
    const rauxalach2 = new NguyenLieu("Rau xà lách", "tùy nhu cầu", "");
    const goiBuoiTom2 = new NguyenLieu("Bưởi", 0, "gram");
    const tom2 = new NguyenLieu("Tôm", 0, "gram");
    const rausong2 = new NguyenLieu("Rau sống", "tùy nhu cầu", "");
    const giaVi2 = new NguyenLieu("Gia vị", "tùy nhu cầu", "");

    // Define dishes for Tuesday
    const banhmiluamachhanhtayxao2 = new MonAn("Bánh mì lúa mạch và hành tây xào", "menu_img/banhmiluamachhanhtayxao.jpg", [banhmiluamach3, hantay3, giaVi3], "https://www.youtube.com/embed/WXdLC_Hrq0o?si=pR11nyWR4MAc3lCs");
    const comthitbonuongrauxalach2 = new MonAn("Cơm, thịt bò nướng, rau xà lách", "menu_img/comthitbonuongrauxalach.jpg", [com4, thitbo3, rauxalach2, giaVi2], "https://www.youtube.com/embed/6NQuG-30C_o?si=amXnd47J7t6exMUp");
    const goibuoi2 = new MonAn("Gỏi bưởi với tôm", "menu_img/goibuoi.jpg", [goiBuoiTom2, tom2, rausong2, giaVi2], "https://www.youtube.com/embed/DQ2iYH2dnLg?si=TKkRWgJXuULRZdYe");

    // Update ingredient quantities based on the given percentages
    banhmiluamachhanhtayxao2.capNhatSoLuongNguyenLieu("Bánh mì lúa mạch", Math.round((15 * Calo / 100) / 2.591));
    banhmiluamachhanhtayxao2.capNhatSoLuongNguyenLieu("Hành tây", Math.round((4 * Calo / 100) / 0.397));

    comthitbonuongrauxalach2.capNhatSoLuongNguyenLieu("Cơm", Math.round((15 * Calo / 100) / 1.3));
    comthitbonuongrauxalach2.capNhatSoLuongNguyenLieu("Thịt bò", Math.round((10 * Calo / 100) / 2.5));

    goibuoi2.capNhatSoLuongNguyenLieu("Bưởi", Math.round((8 * Calo / 100) / 0.38));
    goibuoi2.capNhatSoLuongNguyenLieu("Tôm", Math.round((6 * Calo / 100) / 0.99));

    // Define meals for Tuesday
    const tuesdayBreakfast2 = new meal("7h", [banhmiluamachhanhtayxao2]);
    const tuesdayLunch2 = new meal("11h", [comthitbonuongrauxalach2]);
    const tuesdayDinner2 = new meal("20h", [goibuoi2]);
    thucDon2 = [tuesdayBreakfast2, tuesdayLunch2, tuesdayDinner2];

    // Define ingredients
    thucDon3 = [];
    const chaoluamach3 = new NguyenLieu("Cháo lúa mạch", 0, "gram");
    const hatoccho4 = new NguyenLieu("Hạt óc chó", 0, "gram");
    const hanhtim2 = new NguyenLieu("Hành tím", 0, "gram");
    const com5 = new NguyenLieu("Cơm", 0, "gram");
    const thitga2 = new NguyenLieu("Thịt gà", 0, "gram");
    const bapluoc2 = new NguyenLieu("Bắp", 0, "gram");
    const hamberlualuamach2 = new NguyenLieu("Bánh mì lúa mạch", 0, "gram");
    const burgerchay2 = new NguyenLieu("Burger chay", 0, "gram");
    const rausong3 = new NguyenLieu("Rau sống", "tùy nhu cầu", "");

    // Define dishes for Thursday
    const chaoluamachhatoccho3 = new MonAn("Cháo lúa mạch với hạt óc chó", "menu_img/chaoluamachhatoccho.jpg", [chaoluamach3, hatoccho4, hanhtim2], "https://www.youtube.com/embed/0qyhQzBpaRo?si=-aqg71BMsDsrM6zo");
    const comthitganuongbapluoc3 = new MonAn("Cơm, thịt gà nướng, bắp luộc", "menu_img/comthitganuongbapluoc.jpg", [com5, thitga2, bapluoc2, giaVi3], "https://www.youtube.com/embed/n0yFgB60iCc?si=vbi0m-LDr-P5JH0O");
    const hamburgerchay3 = new MonAn("Hamburger chay", "menu_img/hamburgerchay.jpg", [hamberlualuamach2, burgerchay2, rausong3, giaVi3], "https://www.youtube.com/embed/EGPO3HNxHRE?si=H5am4N9if5vKaJps");

    // Update ingredient quantities based on the given percentages
    chaoluamachhatoccho3.capNhatSoLuongNguyenLieu("Cháo lúa mạch", Math.round((12 * Calo / 100) / 0.676));
    chaoluamachhatoccho3.capNhatSoLuongNguyenLieu("Hạt óc chó", Math.round((3 * Calo / 100) / 6.544));
    chaoluamachhatoccho3.capNhatSoLuongNguyenLieu("Hành tím", Math.round((2 * Calo / 100) / 0.719));

    comthitganuongbapluoc3.capNhatSoLuongNguyenLieu("Cơm", Math.round((15 * Calo / 100) / 1.3));
    comthitganuongbapluoc3.capNhatSoLuongNguyenLieu("Thịt gà", Math.round((9 * Calo / 100) / 2.39));
    comthitganuongbapluoc3.capNhatSoLuongNguyenLieu("Bắp", Math.round((4 * Calo / 100) / 1.77));

    hamburgerchay3.capNhatSoLuongNguyenLieu("Bánh mì lúa mạch", Math.round((10 * Calo / 100) / 2.591));
    hamburgerchay3.capNhatSoLuongNguyenLieu("Burger chay", Math.round((7 * Calo / 100) / 2.949));

    // Define meals for Thursday
    const thursdayBreakfast = new meal("7h", [chaoluamachhatoccho3]);
    const thursdayLunch = new meal("11h", [comthitganuongbapluoc3]);
    const thursdayDinner = new meal("20h", [hamburgerchay3]);
    thucDon3 = [thursdayBreakfast, thursdayLunch, thursdayDinner];
  }

  function dtdud(Calo) {
    //làm rỗng thực đơn
    thucDon1 = [];

    //nguyên liệu
    const gaonep = new NguyenLieu("gạo nếp", 0, "gram");
    const dauxanh = new NguyenLieu("đậu xanh", 0, "gram");
    const giolua = new NguyenLieu("giò lụa", 0, "gram");
    const thanhlong = new NguyenLieu("thanh long", 0, "gram");
    const com = new NguyenLieu("cơm", 0, "gram");
    const thitgata = new NguyenLieu("thịt gà ta", 0, "gram");
    const muopdang = new NguyenLieu("mướp đắng", 0, "gram");
    const suadaunanh = new NguyenLieu("sữa đậu nành", 0, "ml");
    const catroi = new NguyenLieu("cá trôi", 0, "gram");
    const mangtuoi = new NguyenLieu("măng tươi", 0, "gram");
    const dauan = new NguyenLieu("dầu ăn", 0, "gram");
    const dauphu = new NguyenLieu("đậu phụ", 0, "gram");
  
    //món ăn
    const coman = new MonAn("cơm", "menu_img/com.jpg", [com], "https://www.youtube.com/embed/QJZUwiJhKZ0?si=SZ4Xn1WNYqWB8AxW")
    const xoidauxanh = new MonAn("Xôi đậu xanh", "menu_img/xoidauxanh.jpg", [gaonep, dauxanh, giolua], "https://www.youtube.com/embed/w2CHbo08N9E?si=lgTC8W9nYqCwYwBS");
    const comthitgarang = new MonAn("cơm thịt gà rang", "menu_img/comthitgarang.jpg", [com, thitgata], "https://www.youtube.com/embed/T34SqjyEe2A?si=LsPcPbiAwkQgJQsb");
    const muopdangluoc = new MonAn("mướp đắng luộc", "menu_img/muopdangluoc.jpg", [muopdang], "https://www.youtube.com/embed/S3ChgcwtU_k?si=uKrA1ruKRQ8mP_lk");
    const cakho = new MonAn("cá kho", "menu_img/cakho.jpg", [catroi], "https://www.youtube.com/embed/bjuDaFy6VkU?si=B7XK0_8Ad9urH5P2");
    const mangxao = new MonAn("măng xào", "menu_img/mangxao.jpg", [mangtuoi, dauan], "https://www.youtube.com/embed/OsH8a8A2g-k?si=s2L54ncc61TEgNsx");
    const dauphuluoc = new MonAn("đậu phụ luộc", "menu_img/dauphuluoc.jpg", [dauphu], "https://www.youtube.com/embed/0sZARyRmgZM?si=-5FcxQU2N8mVpkCx");
    const quatuoi = new MonAn("thanhlong", "menu_img/thanhlong.jpg", [thanhlong]);
    const sua = new MonAn("sữa đậu nành", "menu_img/suadaunanh.jpg", [suadaunanh]);

    //bữa ăn
    const sang = new meal("7h", [xoidauxanh, quatuoi]);
    const trua = new meal("11h", [comthitgarang, muopdangluoc, sua]);
    const chieu = new meal("17h", [coman, cakho, mangxao, dauphuluoc]);

    //cập nhật số lượng
    xoidauxanh.capNhatSoLuongNguyenLieu("gạo nếp", Math.round((12 * Calo / 100) / 0.97));
    xoidauxanh.capNhatSoLuongNguyenLieu("đậu xanh", Math.round((0.3 * Calo / 100) / 3.47));
    xoidauxanh.capNhatSoLuongNguyenLieu("giò lụa", Math.round((6 * Calo / 100) / 2.3));
    quatuoi.capNhatSoLuongNguyenLieu("thanh long", Math.round((9 * Calo / 100) / 0.6));
    comthitgarang.capNhatSoLuongNguyenLieu("cơm", Math.round((15 * Calo / 100) / 1.3));
    comthitgarang.capNhatSoLuongNguyenLieu("thịt gà ta", Math.round((9 * Calo / 100) / 2.39));
    muopdangluoc.capNhatSoLuongNguyenLieu("mướp đắng", Math.round((5 * Calo / 100) / 0.334));
    sua.capNhatSoLuongNguyenLieu("sữa đậu nành", Math.round((4.3 * Calo / 100) / 0.54));
    coman.capNhatSoLuongNguyenLieu("cơm", Math.round((15 * Calo / 100) / 1.3));
    cakho.capNhatSoLuongNguyenLieu("cá trôi", Math.round((7.1 * Calo / 100) / 1.27));
    mangxao.capNhatSoLuongNguyenLieu("măng tươi", Math.round((4 * Calo / 100) / 0.2));
    mangxao.capNhatSoLuongNguyenLieu("dầu ăn", Math.round((10 * Calo / 100) / 8.841));
    dauphuluoc.capNhatSoLuongNguyenLieu("đậu phụ", Math.round((5 * Calo / 100) / 0.76));

    //cập nhật thực đơn
    thucDon1 = [sang, trua, chieu];

    // Define ingredients
    thucDon2 = [];
    const banhmiluamach2 = new NguyenLieu("Bánh mì lúa mạch", 0, "gram");
    const hantay2 = new NguyenLieu("Hành tây", 0, "gram");
    const giaVi2 = new NguyenLieu("Gia vị", "tùy nhu cầu", "");
    const duahau = new NguyenLieu("Dưa hấu", 0, "gram");
    const com2 = new NguyenLieu("Cơm", 0, "gram");
    const thitbo2 = new NguyenLieu("Thịt bò", 0, "gram");
    const rauxalach = new NguyenLieu("Rau xà lách", "tùy nhu cầu", "");
    const yoghurt = new NguyenLieu("Yoghurt thấp calo", 0, "ml");
    const cahoi2 = new NguyenLieu("Cá hồi", 0, "gram");
    const bapxao = new NguyenLieu("Bắp", 0, "gram");
    const goiBuoiTom = new NguyenLieu("Bưởi", 0, "gram");
    const tom = new NguyenLieu("Tôm", 0, "gram");

    // Define dishes for Tuesday
    const banhmiluamachhanhtayxao = new MonAn("Bánh mì lúa mạch và hành tây xào", "menu_img/banhmiluamachhanhtayxao.jpg", [banhmiluamach2, hantay2, giaVi2], "https://www.youtube.com/embed/WXdLC_Hrq0o?si=pR11nyWR4MAc3lCs");
    const duahautuoi = new MonAn("Dưa hấu tươi", "menu_img/duahautuoi.jpg", [duahau]);
    const comthitbonuongrauxalach = new MonAn("Cơm, thịt bò nướng, rau xà lách", "menu_img/comthitbonuongrauxalach.jpg", [com2, thitbo2, rauxalach, giaVi2], "https://www.youtube.com/embed/6NQuG-30C_o?si=amXnd47J7t6exMUp");
    const yoghurtthapcalo = new MonAn("Yoghurt thấp calo", "menu_img/yoghurtthapcalo.jpg", [yoghurt], "https://www.youtube.com/embed/AgNtOOa8dg8?si=VfpGs3xMewyzb2hb");
    const comcahoi = new MonAn("Cơm, cá hồi nướng, bắp xào", "menu_img/comcahoi.jpg", [com2, cahoi2, bapxao, dauan, giaVi2], "https://www.youtube.com/embed/PkmygIYaIYQ?si=4zndK3tBzR8Kevx_");
    const goibuoi = new MonAn("Gỏi bưởi với tôm", "menu_img/goibuoi.jpg", [goiBuoiTom, tom, rauxalach, giaVi2], "https://www.youtube.com/embed/DQ2iYH2dnLg?si=TKkRWgJXuULRZdYe");

    // Update ingredient quantities based on the given percentages
    banhmiluamachhanhtayxao.capNhatSoLuongNguyenLieu("Bánh mì lúa mạch", Math.round((15 * Calo / 100) / 2.591));
    banhmiluamachhanhtayxao.capNhatSoLuongNguyenLieu("Hành tây", Math.round((4 * Calo / 100) / 3.97));

    duahautuoi.capNhatSoLuongNguyenLieu("Dưa hấu", Math.round((9 * Calo / 100) / 0.304));

    comthitbonuongrauxalach.capNhatSoLuongNguyenLieu("Cơm", Math.round((15 * Calo / 100) / 1.3));
    comthitbonuongrauxalach.capNhatSoLuongNguyenLieu("Thịt bò", Math.round((10 * Calo / 100) / 2.5));

    yoghurtthapcalo.capNhatSoLuongNguyenLieu("Yoghurt thấp calo", Math.round((4.3 * Calo / 100) / 0.588));

    comcahoi.capNhatSoLuongNguyenLieu("Cơm", Math.round((15 * Calo / 100) / 1.3));
    comcahoi.capNhatSoLuongNguyenLieu("Cá hồi", Math.round((8.5 * Calo / 100) / 2.08));
    comcahoi.capNhatSoLuongNguyenLieu("Bắp", Math.round((4 * Calo / 100) / 1.77));
    comcahoi.capNhatSoLuongNguyenLieu("Dầu ăn", Math.round((10 * Calo / 100) / 8.841));

    goibuoi.capNhatSoLuongNguyenLieu("Bưởi", Math.round((8 * Calo / 100) / 0.38));
    goibuoi.capNhatSoLuongNguyenLieu("Tôm", Math.round((6 * Calo / 100) / 0.99));

    // Define meals for Tuesday
    const tuesdayBreakfast = new meal("7h", [banhmiluamachhanhtayxao, duahautuoi]);
    const tuesdayLunch = new meal("11h", [comthitbonuongrauxalach, yoghurtthapcalo]);
    const tuesdayDinner = new meal("17h", [comcahoi]);
    thucDon2 = [tuesdayBreakfast, tuesdayLunch, tuesdayDinner];

    // Define ingredients
    thucDon3 = [];
    const chaoluamach = new NguyenLieu("Cháo lúa mạch", 0, "gram");
    const hatoccho3 = new NguyenLieu("Hạt óc chó", 0, "gram");
    const hanhtim = new NguyenLieu("Hành tím", 0, "gram");
    const hatlanh2 = new NguyenLieu("Hạt lanh", 0, "gram");
    const hatbingo = new NguyenLieu("Hạt bí ngô", 0, "gram");
    const com3 = new NguyenLieu("Cơm", 0, "gram");
    const thitga = new NguyenLieu("Thịt gà", 0, "gram");
    const bapluoc = new NguyenLieu("Bắp", 0, "gram");
    const gavii2 = new NguyenLieu("Gia vị", 0, "gram");
    const traituoitai = new NguyenLieu("Dâu", 0, "gram");
    const hamberlualuamach = new NguyenLieu("Bánh mì lúa mạch", 0, "gram");
    const burgerchay = new NguyenLieu("Burger chay", 0, "gram");
    const rausong = new NguyenLieu("Rau sống", "tùy nhu cầu", "");
    const giavithapcalo = new NguyenLieu("Gia vị thấp calo", "tùy nhu cầu", "");

    // Define dishes for Wednesday
    const chaoluamachhatoccho = new MonAn("Cháo lúa mạch với hạt óc chó", "menu_img/chaoluamachhatoccho.jpg", [chaoluamach, hatoccho3, hanhtim], "https://www.youtube.com/embed/0qyhQzBpaRo?si=kbkHDJzoeQ-v3He1");
    const hatlanhhatbingo = new MonAn("Hạt lanh và hạt bí ngô", "menu_img/hatlanhhatbingo.jpg", [hatlanh2, hatbingo], "");
    const comthitganuongbapluoc = new MonAn("Cơm, thịt gà nướng, bắp luộc", "menu_img/comthitganuongbapluoc.jpg", [com3, thitga, bapluoc, gavii2], "https://www.youtube.com/embed/n0yFgB60iCc?si=u0I67_Om2DSG6RKQ");
    const salattraicayhatoccho = new MonAn("Salat trái cây với hạt óc chó", "menu_img/salattraicayhatoccho.jpg", [traituoitai, hatoccho3], "https://www.youtube.com/embed/ovhgTtPwweM?si=D4nNSNoZvmVIN2b-");
    const comnangcap = new MonAn("Cơm cá hồi", "menu_img/comcahoi.jpg", [com3, cahoi2, rauxalach, gavii2], "https://www.youtube.com/embed/_IT0F8S6hz0?si=qEUK1y1iGMF1Zqe0");
    const hamburgerchay = new MonAn("Hamburger chay", "menu_img/hamburgerchay.jpg", [hamberlualuamach, burgerchay, rausong, giavithapcalo], "https://www.youtube.com/embed/EGPO3HNxHRE?si=4b_9xnsovtuVMbQm");

    // Update ingredient quantities based on the given percentages
    chaoluamachhatoccho.capNhatSoLuongNguyenLieu("Cháo lúa mạch", Math.round((12 * Calo / 100) / 0.676));
    chaoluamachhatoccho.capNhatSoLuongNguyenLieu("Hạt óc chó", Math.round((3 * Calo / 100) / 6.544));
    chaoluamachhatoccho.capNhatSoLuongNguyenLieu("Hành tím", Math.round((2 * Calo / 100) / 0.719));

    hatlanhhatbingo.capNhatSoLuongNguyenLieu("Hạt lanh", Math.round((5 * Calo / 100) / 5.339));
    hatlanhhatbingo.capNhatSoLuongNguyenLieu("Hạt bí ngô", Math.round((4 * Calo / 100) / 4.46));

    comthitganuongbapluoc.capNhatSoLuongNguyenLieu("Cơm", Math.round((15 * Calo / 100) / 1.3));
    comthitganuongbapluoc.capNhatSoLuongNguyenLieu("Thịt gà", Math.round((9 * Calo / 100) / 2.39));
    comthitganuongbapluoc.capNhatSoLuongNguyenLieu("Bắp", Math.round((4 * Calo / 100) / 1.77));

    salattraicayhatoccho.capNhatSoLuongNguyenLieu("Dâu", Math.round((9 * Calo / 100) / 0.458));
    salattraicayhatoccho.capNhatSoLuongNguyenLieu("Hạt óc chó", Math.round((3.5 * Calo / 100) / 6.544));

    comnangcap.capNhatSoLuongNguyenLieu("Cơm", Math.round((15 * Calo / 100) / 1.3));
    comnangcap.capNhatSoLuongNguyenLieu("Cá hồi tươi", Math.round((8 * Calo / 100) / 2.08));
    comnangcap.capNhatSoLuongNguyenLieu("Rau xào", Math.round((4 * Calo / 100) / 0.4));

    hamburgerchay.capNhatSoLuongNguyenLieu("Bánh mì lúa mạch", Math.round((10 * Calo / 100) / 2.591));
    hamburgerchay.capNhatSoLuongNguyenLieu("Burger chay", Math.round((7 * Calo / 100) / 2.949));

    // Define meals for Wednesday
    const wednesdayBreakfast = new meal("7h", [chaoluamachhatoccho, hatlanhhatbingo]);
    const wednesdayLunch = new meal("11h", [comthitganuongbapluoc, salattraicayhatoccho]);
    const wednesdayDinner = new meal("17h", [comnangcap, hamburgerchay]);
    thucDon3 = [wednesdayBreakfast, wednesdayLunch, wednesdayDinner];

  }

  function bth(Calo) {
    // Thực đơn thứ 2 (Thứ 2)
    thucDon1 = [];

    // Nguyên liệu (Ingredients)
    const bun = new NguyenLieu("bún", 0, "gram");
    const thitBo = new NguyenLieu("thịt bò", 0, "gram");
    const huyetSan = new NguyenLieu("huyết sán", 0, "gram");
    const rauSong = new NguyenLieu("rau sống", "tùy nhu cầu", "");
    const giaVi = new NguyenLieu("gia vị", "tùy nhu cầu", "");
    const gaTuoi = new NguyenLieu("gà tươi", 0, "gram");
    const rauCai = new NguyenLieu("rau cải", 0, "gram");
    const ga = new NguyenLieu("gà", 0, "gram");

    // Món ăn (Dishes)
    const bunBoHue = new MonAn("Bún bò Huế", "menu_img/bunbohue.jpg", [bun, thitBo, huyetSan, rauSong, giaVi], "https://www.youtube.com/embed/A-ADxIIEVGE?si=60KltxQfbNm3WrAp");
    const goiGa = new MonAn("Gỏi gà", "menu_img/goiga.jpg", [gaTuoi, rauSong, bun, giaVi], "https://www.youtube.com/embed/gMB3l7mI34U?si=hYEe1x920yHB2k5Y");
    const canhRauCaiLuoc = new MonAn("Canh rau cải luộc", "menu_img/canhraucailuoc.jpg", [rauCai, giaVi], "https://www.youtube.com/embed/GnsQ4J08VXI?si=lcadiGaMdUOCLlCB");

    // Cập nhật số lượng nguyên liệu dựa trên %
    // Bún bò Huế
    bunBoHue.capNhatSoLuongNguyenLieu("bún", Math.round((12 * Calo / 100) / 1.1));
    bunBoHue.capNhatSoLuongNguyenLieu("thịt bò", Math.round((8 * Calo / 100) / 2.5));
    bunBoHue.capNhatSoLuongNguyenLieu("huyết sán", Math.round((3 * Calo / 100) / 1.12));

    // Gỏi gà
    goiGa.capNhatSoLuongNguyenLieu("gà tươi", Math.round((9 * Calo / 100) / 1.65));
    goiGa.capNhatSoLuongNguyenLieu("bún", Math.round((5 * Calo / 100) / 1.1));

    // Canh rau cải luộc
    canhRauCaiLuoc.capNhatSoLuongNguyenLieu("rau cải", Math.round((6 * Calo / 100) / 0.65));

    // Bữa ăn (Meals)
    const sangThu2 = new meal("7h", [bunBoHue]);
    const truaThu2 = new meal("11h", [goiGa]);
    const chieuThu2 = new meal("20h", [canhRauCaiLuoc]);

    thucDon1 = [sangThu2, truaThu2, chieuThu2];

    // Thực đơn thứ 3 (Thứ 3)
    thucDon2 = [];

    // Nguyên liệu (Ingredients)
    const banhMiLuaMach = new NguyenLieu("bánh mì lúa mạch", 0, "gram");
    const trung = new NguyenLieu("trứng", 0, "gram");
    const chaCa = new NguyenLieu("chả cá", 0, "gram");
    const com = new NguyenLieu("cơm", 0, "gram");
    const gung = new NguyenLieu("gừng", 0, "gram");
    const biDo = new NguyenLieu("bí đỏ", 0, "gram");
    const hatSen = new NguyenLieu("hạt sen", 0, "gram");
    const giaVi3 = new NguyenLieu("gia vị", "tùy nhu cầu", "");

    // Món ăn (Dishes)
    const banhMiNuongTrungTrangChaCa = new MonAn("Bánh mì nướng trứng tráng chả cá", "menu_img/banhminuongtrungtrangchaca.jpg", [banhMiLuaMach, trung, chaCa], "https://www.youtube.com/embed/CSruC_f2Zrw?si=_g7LKT615At2yVPI");
    const comGaHapGung = new MonAn("Cơm gà hấp gừng", "menu_img/comgahaprung.jpg", [com, ga, gung, rauSong, giaVi3], "https://www.youtube.com/embed/yDjhvD3tuag?si=zHRODSG6b8pPW6fL");
    const canhBiDoHatSenLuoc = new MonAn("Canh bí đỏ và hạt sen luộc", "menu_img/canhbidohatsenluoc.jpg", [biDo, hatSen, giaVi3], "https://www.youtube.com/embed/GnTgkbssjVM?si=uIIWriTS3ZRe4pbe");

    // Cập nhật số lượng nguyên liệu dựa trên %
    // Bánh mì nướng trứng tráng chả cá
    banhMiNuongTrungTrangChaCa.capNhatSoLuongNguyenLieu("bánh mì lúa mạch", Math.round((12 * Calo / 100) / 2.591));
    banhMiNuongTrungTrangChaCa.capNhatSoLuongNguyenLieu("trứng", Math.round((7 * Calo / 100) / 1.551));
    banhMiNuongTrungTrangChaCa.capNhatSoLuongNguyenLieu("chả cá", Math.round((5 * Calo / 100) / 0.84));

    // Cơm gà hấp gừng
    comGaHapGung.capNhatSoLuongNguyenLieu("cơm", Math.round((15 * Calo / 100) / 1.3));
    comGaHapGung.capNhatSoLuongNguyenLieu("gà", Math.round((10 * Calo / 100) / 2.39));
    comGaHapGung.capNhatSoLuongNguyenLieu("gừng", Math.round((3 * Calo / 100) / 0.796));

    // Canh bí đỏ và hạt sen luộc
    canhBiDoHatSenLuoc.capNhatSoLuongNguyenLieu("bí đỏ", Math.round((6 * Calo / 100) / 0.261));
    canhBiDoHatSenLuoc.capNhatSoLuongNguyenLieu("hạt sen", Math.round((4 * Calo / 100) / 0.889));

    // Bữa ăn (Meals)
    const sangThu3 = new meal("7h", [banhMiNuongTrungTrangChaCa]);
    const truaThu3 = new meal("11h", [comGaHapGung]);
    const chieuThu3 = new meal("20h", [canhBiDoHatSenLuoc]);

    thucDon2 = [sangThu3, truaThu3, chieuThu3];

    // Define ingredients
    thucDon3 = [];
    const oatmeal = new NguyenLieu("Bột yến mạch", 0, "gram");
    const raungon = new NguyenLieu("rau sống", "tùy nhu cầu", "");
    const hatoccho = new NguyenLieu("Hạt óc chó", 0, "gram");
    const dau = new NguyenLieu("Dâu", 0, "gram");
    const sua = new NguyenLieu("Sữa hạt", 0, "ml");
    const oatmealgia = new NguyenLieu("Gia vị", 0, "gram");
    const comtam = new NguyenLieu("Cơm tấm", 0, "gram");
    const suonnuong = new NguyenLieu("Sườn nướng", 0, "gram");
    const nuocmampha = new NguyenLieu("Nước mắm pha", 0, "ml");
    const comtamgia = new NguyenLieu("Gia vị", "tùy nhu cầu", "");
    const catim = new NguyenLieu("Cà tím", 0, "gram");
    const bidogia = new NguyenLieu("Bí đỏ", 0, "gram");
    // Define dishes for Wednesday
    const oatmealhatochovaudau = new MonAn("Bột yến mạch với hạt óc chó và dâu", "menu_img/oatmealvoihatocchovadau.jpeg", [oatmeal, hatoccho, dau, sua, oatmealgia], "https://www.youtube.com/embed/aOfxu90TGAQ?si=eEn_XSJXmferORWW");
    const comtamsuonnuong = new MonAn("Cơm tấm sườn nướng", "menu_img/comtamsuonnuong.jpg", [comtam, suonnuong, raungon, nuocmampha, comtamgia], "https://www.youtube.com/embed/VuZoI4WRW9Q?si=LSek7N8qINFupS6K");
    const canhcatimvabidoluoc = new MonAn("Canh cà tím và bí đỏ luộc", "menu_img/canhcatimvabidoluoc.jpg", [catim, bidogia], "https://www.youtube.com/embed/FzoKQF6M7QU?si=s5hbNEB0SwcHtNwU");

    // Update ingredient quantities based on the given percentages
    oatmealhatochovaudau.capNhatSoLuongNguyenLieu("Bột yến mạch", Math.round((12 * Calo / 100) / 0.676));
    oatmealhatochovaudau.capNhatSoLuongNguyenLieu("Hạt óc chó", Math.round((4 * Calo / 100) / 6.544));
    oatmealhatochovaudau.capNhatSoLuongNguyenLieu("Dâu", Math.round((4 * Calo / 100) / 0.458));
    oatmealhatochovaudau.capNhatSoLuongNguyenLieu("Sữa hạt", Math.round((3 * Calo / 100) / 4));

    comtamsuonnuong.capNhatSoLuongNguyenLieu("Cơm tấm", Math.round((12 * Calo / 100) / 1.3));
    comtamsuonnuong.capNhatSoLuongNguyenLieu("Sườn nướng", Math.round((8 * Calo / 100) / 2.77)); 
    comtamsuonnuong.capNhatSoLuongNguyenLieu("Nước mắm pha", Math.round((3 * Calo / 100) / 3.95));

    canhcatimvabidoluoc.capNhatSoLuongNguyenLieu("Cà tím", Math.round((5 * Calo / 100) / 0.249));
    canhcatimvabidoluoc.capNhatSoLuongNguyenLieu("Bí đỏ", Math.round((5 * Calo / 100) / 0.261));

    // Define meals for Wednesday
    const wednesdayMorning = new meal("7h", [oatmealhatochovaudau]);
    const wednesdayLunch = new meal("11h", [comtamsuonnuong]);
    const wednesdayDinner = new meal("20h", [canhcatimvabidoluoc]);

    // Create the menu for Wednesday
    thucDon3 = [wednesdayMorning, wednesdayLunch, wednesdayDinner];

  }

  
  function make_menu() {
    const Ages = localStorage.getItem('AGES');
    const Wght = localStorage.getItem('WEIGHT');
    const Hght = localStorage.getItem('HEIGHT'); 
    const Gender = localStorage.getItem('GENDER');
    const Sick = localStorage.getItem('SICK');
    const Jobs = localStorage.getItem('JOBS');
    var BMR, Calo, BMI;
    if(Gender == "MALE")
        BMR = 88.362 + (13.397 * Wght) + (4.799 * Hght) - (5.677 * Ages);
    else
        BMR = 447.593 + (9.247 * Wght) + (3.098 * Hght) - (4.330 * Ages);
    if(Jobs == "ldnhe")
        Calo = BMR * 1.375;
    else if(Jobs == "ldvua")
        Calo = BMR * 1.55;
    else
        Calo = BMR * 1.725;
    BMI = Wght / ((Hght / 100) * (Hght / 100));
    if(BMI < 18.5)
      Calo = Calo + 100;
    else if(BMI >= 25)
      Calo = Calo - 100;
    
    if(Sick == "daithaoduong"){
        dtdud(Calo);
    } 
    else if(Sick == "suythanman"){
        stmud(Calo);
    }
    else if(Sick == "caohuyetap"){
        chaud(Calo);
    }
    else if(Sick == "binhthuong"){
        bth(Calo);
    }
    if(document.getElementById("menu") != null) {
      buoi = localStorage.getItem("BUOI");
      let ulElement = document.getElementById("menu");
      for(i=0; i<thucDon1[buoi].monAn.length; i++) {
        let liElement = document.createElement("li");
        let divElement = document.createElement("div");
        let hElement = document.createElement("h2");
        let inputElement = document.createElement("input");
        let imgElement = document.createElement("img");
        let aElement = document.createElement("a");
        aElement.href = "monan.html";
        liElement.classList = "card";
        liElement.id_monan = i;
        liElement.addEventListener('click', function() {
          localStorage.setItem("MonAn", liElement.id_monan);
          localStorage.setItem("Thucdon", 1);
        });
        divElement.classList = "img";
        imgElement.src = thucDon1[buoi].monAn[i].moTa;
        imgElement.alt = "img";
        imgElement.draggable = "false";
        inputElement.type = "submit";
        inputElement.value = "xem nguyên liệu";
        hElement.textContent = thucDon1[buoi].monAn[i].ten;
        divElement.appendChild(imgElement);
        liElement.appendChild(divElement);
        liElement.appendChild(hElement);
        liElement.appendChild(inputElement);
        aElement.appendChild(liElement);
        ulElement.appendChild(aElement);
      }

      ulElement = document.getElementById("menu2");
      for(i=0; i<thucDon2[buoi].monAn.length; i++) {
        let liElement = document.createElement("li");
        let divElement = document.createElement("div");
        let hElement = document.createElement("h2");
        let inputElement = document.createElement("input");
        let imgElement = document.createElement("img");
        let aElement = document.createElement("a");
        aElement.href = "monan.html";
        liElement.classList = "card";
        liElement.id_monan = i;
        liElement.addEventListener('click', function() {
          localStorage.setItem("MonAn", liElement.id_monan);
          localStorage.setItem("Thucdon", 2);
        });
        divElement.classList = "img";
        imgElement.src = thucDon2[buoi].monAn[i].moTa;
        imgElement.alt = "img";
        imgElement.draggable = "false";
        inputElement.type = "submit";
        inputElement.value = "xem nguyên liệu";
        hElement.textContent = thucDon2[buoi].monAn[i].ten;
        divElement.appendChild(imgElement);
        liElement.appendChild(divElement);
        liElement.appendChild(hElement);
        liElement.appendChild(inputElement);
        aElement.appendChild(liElement);
        ulElement.appendChild(aElement);
      }

      ulElement = document.getElementById("menu3");
      for(i=0; i<thucDon3[buoi].monAn.length; i++) {
        let liElement = document.createElement("li");
        let divElement = document.createElement("div");
        let hElement = document.createElement("h2");
        let inputElement = document.createElement("input");
        let imgElement = document.createElement("img");
        let aElement = document.createElement("a");
        aElement.href = "monan.html";
        liElement.classList = "card";
        liElement.id_monan = i;
        liElement.addEventListener('click', function() {
          localStorage.setItem("MonAn", liElement.id_monan);
          localStorage.setItem("Thucdon", 3);
        });
        divElement.classList = "img";
        imgElement.src = thucDon3[buoi].monAn[i].moTa;
        imgElement.alt = "img";
        imgElement.draggable = "false";
        inputElement.type = "submit";
        inputElement.value = "xem nguyên liệu";
        hElement.textContent = thucDon3[buoi].monAn[i].ten;
        divElement.appendChild(imgElement);
        liElement.appendChild(divElement);
        liElement.appendChild(hElement);
        liElement.appendChild(inputElement);
        aElement.appendChild(liElement);
        ulElement.appendChild(aElement);
      }
    }

    if(document.getElementById("yt_vd") != null) {
      thucdon = localStorage.getItem("Thucdon");
      if(thucdon == 1) {
        buoi = localStorage.getItem("BUOI");
        monan = localStorage.getItem("MonAn");
        ten = document.getElementById("ten_monan");
        ten.textContent = thucDon1[buoi].monAn[monan].ten;
        tb = document.getElementById("bang");
        for(i = 0; i<thucDon1[buoi].monAn[monan].nguyenLieu.length; i++) {
          console.log(thucDon1[buoi].monAn[monan].nguyenLieu[i].ten);
          trE = document.createElement("tr");
          tdE1 = document.createElement("td");
          tdE2 = document.createElement("td");
          tdE1.textContent = thucDon1[buoi].monAn[monan].nguyenLieu[i].ten;
          tdE2.textContent = thucDon1[buoi].monAn[monan].nguyenLieu[i].soLuong + " " + thucDon1[buoi].monAn[monan].nguyenLieu[i].donVi;
          trE.appendChild(tdE1);
          trE.appendChild(tdE2);
          tb.appendChild(trE);
        }
        hinh = document.getElementById("hinh");
        hinh.src = thucDon1[buoi].monAn[monan].moTa;
        if(thucDon1[buoi].monAn[monan].hd != null){
          vd = document.getElementById("yt_vd");
          ifr = document.createElement("iframe");
          ifr.width = "560";
          ifr.height = "315";
          console.log(thucDon1[buoi].monAn[monan].hd);
          ifr.src = thucDon1[buoi].monAn[monan].hd;
          ifr.title = "YouTube video player";
          ifr.frameborder = "0";
          ifr.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
          ifr.allowfullscreen = true;
          vd.appendChild(ifr);
        }
      } 
      else if(thucdon == 2) {
        buoi = localStorage.getItem("BUOI");
        monan = localStorage.getItem("MonAn");
        ten = document.getElementById("ten_monan");
        ten.textContent = thucDon2[buoi].monAn[monan].ten;
        tb = document.getElementById("bang");
        for(i = 0; i<thucDon2[buoi].monAn[monan].nguyenLieu.length; i++) {
          console.log(thucDon2[buoi].monAn[monan].nguyenLieu[i].ten);
          trE = document.createElement("tr");
          tdE1 = document.createElement("td");
          tdE2 = document.createElement("td");
          tdE1.textContent = thucDon2[buoi].monAn[monan].nguyenLieu[i].ten;
          tdE2.textContent = thucDon2[buoi].monAn[monan].nguyenLieu[i].soLuong + " " + thucDon2[buoi].monAn[monan].nguyenLieu[i].donVi;
          trE.appendChild(tdE1);
          trE.appendChild(tdE2);
          tb.appendChild(trE);
        }
        hinh = document.getElementById("hinh");
        hinh.src = thucDon2[buoi].monAn[monan].moTa;
        if(thucDon2[buoi].monAn[monan].hd != null){
          vd = document.getElementById("yt_vd");
          ifr = document.createElement("iframe");
          ifr.width = "560";
          ifr.height = "315";
          console.log(thucDon2[buoi].monAn[monan].hd);
          ifr.src = thucDon2[buoi].monAn[monan].hd;
          ifr.title = "YouTube video player";
          ifr.frameborder = "0";
          ifr.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
          ifr.allowfullscreen = true;
          vd.appendChild(ifr);
        }
      } else {
        buoi = localStorage.getItem("BUOI");
        monan = localStorage.getItem("MonAn");
        ten = document.getElementById("ten_monan");
        ten.textContent = thucDon3[buoi].monAn[monan].ten;
        tb = document.getElementById("bang");
        for(i = 0; i<thucDon3[buoi].monAn[monan].nguyenLieu.length; i++) {
          console.log(thucDon3[buoi].monAn[monan].nguyenLieu[i].ten);
          trE = document.createElement("tr");
          tdE1 = document.createElement("td");
          tdE2 = document.createElement("td");
          tdE1.textContent = thucDon3[buoi].monAn[monan].nguyenLieu[i].ten;
          tdE2.textContent = thucDon3[buoi].monAn[monan].nguyenLieu[i].soLuong + " " + thucDon3[buoi].monAn[monan].nguyenLieu[i].donVi;
          trE.appendChild(tdE1);
          trE.appendChild(tdE2);
          tb.appendChild(trE);
        }
        hinh = document.getElementById("hinh");
        hinh.src = thucDon3[buoi].monAn[monan].moTa;
        if(thucDon3[buoi].monAn[monan].hd != null){
          vd = document.getElementById("yt_vd");
          ifr = document.createElement("iframe");
          ifr.width = "560";
          ifr.height = "315";
          console.log(thucDon3[buoi].monAn[monan].hd);
          ifr.src = thucDon3[buoi].monAn[monan].hd;
          ifr.title = "YouTube video player";
          ifr.frameborder = "0";
          ifr.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
          ifr.allowfullscreen = true;
          vd.appendChild(ifr);
        }
      }
    }
    if(document.getElementById("text") != null) {
      a = document.getElementById("text");
      a.textContent = "";
      if(localStorage.getItem('SICK') == null) {
        a.textContent = "Hãy vào setting điền thông tin để xây dựng thực đơn."
      }
      else {
        benh = localStorage.getItem('SICK');
        if(benh == "daithaoduong") {
          a.innerHTML += "Dinh dưỡng đóng vai trò quan trọng trong quản lý đái tháo đường và có thể giúp kiểm soát mức đường huyết của bạn. Dưới đây là một số lời khuyên về ăn uống và dinh dưỡng: <br>";
          a.innerHTML += "<br> + Tuân thủ kế hoạch ăn uống: Thực hiện theo kế hoạch ăn uống hàng ngày và không bỏ bữa. Chia bữa ăn thành các bữa nhỏ để kiểm soát đường huyết trong suốt cả ngày. <br>";
          a.innerHTML += "<br> + Cân đối dinh dưỡng: Ưu tiên thức ăn giàu chất xơ như rau xanh, quả, hạt, ngũ cốc nguyên hạt. Giảm tiêu thụ thức ăn nhanh chóng, thức ăn chứa nhiều đường và thức ăn chứa nhiều chất béo bão hòa. <br>"
          a.innerHTML += "<br> + Kiểm soát lượng carbohydrate: Tìm hiểu về số lượng carbohydrate trong các loại thức ăn và thức uống và hạn chế lượng carbohydrate hàng ngày. Ưu tiên lựa chọn carbohydrate phức hợp (như lúa mạch, lúa mạch nguyên hạt) thay vì carbohydrate đơn giản (đường, mì trắng). <br> <br> + Theo dõi cỡ khẩu phần: Hạn chế ăn quá nhiều một lần, đặc biệt đối với carbohydrate. Theo dõi cỡ khẩu phần và tuân thủ việc ăn theo đúng chỉ định của bác sĩ hoặc chuyên gia dinh dưỡng. <br> <br> + Quản lý trọng lượng cơ thể: Đối với những người bị thừa cân hoặc béo phì, giảm cân có thể giúp cải thiện quản lý đường huyết. Hỏi ý kiến bác sĩ hoặc chuyên gia dinh dưỡng về kế hoạch giảm cân phù hợp. <br> <br> + Kiểm soát đường huyết: Đo mức đường huyết đều đặn theo hướng dẫn của bác sĩ. Tuân thủ toa thuốc và/hoặc tiêm insulin nếu được chỉ định. <br> <br> + Tránh uống rượu và hút thuốc lá: Rượu và thuốc lá có thể ảnh hưởng đến mức đường huyết và sức kháng của bạn, vì vậy nên tránh chúng hoàn toàn hoặc giảm bớt sử dụng. <br>"
          if(BMI < 18.5)
            a.innerHTML += "<br> Bạn hiện tại đang khá gầy, nên thực đơn hằng ngày lượng calo sẽ tăng thêm khoảng 100 đến khi nào cân nặng có đạt mức chuẩn.";
          else
          if(BMI >= 25)
            a.innerHTML += "<br> Bạn hiện tại đang thừa cân, nên thực đơn hằng ngày lượng calo sẽ giảm khoảng 100 đến khi cân nặng của bạn đạt mức chuẩn.";
          else 
            a.innerHTML += "<br> Cân nặng hiện tại của bạn đang ở mức chuẩn nên thực đơn của bạn lượng calo sẽ ở mức bình thường."
        } 

        if(benh == "suythanman") {
          a.innerHTML += "Việc quản lý dinh dưỡng đúng cách là rất quan trọng đối với người bị suy thận mạn. Dưới đây là một số lời khuyên về ăn uống và dinh dưỡng cho bạn: <br> <br> + Kiểm soát lượng protein: Người bị suy thận mạn thường cần giới hạn lượng protein trong khẩu phần hàng ngày. Protein quá nhiều có thể gây gia tăng học môn thải độc tố do suy thận, gây áp lực cho thận và tăng nguy cơ các vấn đề về thận. Hãy thảo luận với bác sĩ hoặc chuyên gia dinh dưỡng để xác định lượng protein phù hợp cho bạn. <br> <br> + Hạn chế natri: Hạn chế lượng natri (muối) trong khẩu phần ăn. Muối có thể gây tăng huyết áp và gây căng thẳng cho thận. Tránh thức ăn chế biến có nhiều muối như thực phẩm đóng hộp và đồ ăn nhanh. <br> <br> + Điều chỉnh lượng kali: Một số người bị CKD cần điều chỉnh lượng kali trong khẩu phần ăn do thận không thể loại bỏ kali một cách hiệu quả. Thức ăn giàu kali bao gồm chuối, cam, khoai lang, và cà chua. Hãy thảo luận với bác sĩ hoặc chuyên gia dinh dưỡng để biết bạn cần điều chỉnh mức kali như thế nào. <br> <br> + Uống đủ nước: Uống đủ nước để duy trì sự cân bằng nước trong cơ thể. Tuy nhiên, hãy theo dõi sự tăng của lượng nước nếu bạn có yếu tố nguy cơ sưng. <br> <br> + Hạn chế phosphat: Hạn chế thức ăn và đồ uống có chứa nhiều phosphat, bởi vì suy thận mạn thường dẫn đến tăng nồng độ phosphat trong máu. <br> <br> + Theo dõi đường huyết: Nếu bạn có suy thận mạn do tiểu đường (CKD do tiểu đường), hãy kiểm soát đường huyết cẩn thận bằng cách tuân thủ kế hoạch ăn uống và thay đổi dựa trên hướng dẫn của bác sĩ. <br> <br> + Chất béo và carbohydrate: Theo dõi lượng chất béo và carbohydrate bạn tiêu thụ, đặc biệt là nếu bạn cần kiểm soát cân nặng hoặc có vấn đề về đường huyết. <br>";
          if(BMI < 18.5)
            a.innerHTML += "<br> Bạn hiện tại đang khá gầy, nên thực đơn hằng ngày lượng calo sẽ tăng thêm khoảng 100 đến khi nào cân nặng có đạt mức chuẩn.";
          else
          if(BMI >= 25)
            a.innerHTML += "<br> Bạn hiện tại đang thừa cân, nên thực đơn hằng ngày lượng calo sẽ giảm khoảng 100 đến khi cân nặng của bạn đạt mức chuẩn.";
          else 
            a.innerHTML += "<br> Cân nặng hiện tại của bạn đang ở mức chuẩn nên thực đơn của bạn lượng calo sẽ ở mức bình thường."
        } 

        if(benh == "caohuyetap") {
          a.innerHTML += "Ăn uống và dinh dưỡng có vai trò quan trọng trong việc quản lý cao huyết áp. Dưới đây là một số lời khuyên về ăn uống và dinh dưỡng cho bạn: <br> <br> + Hạn chế muối (natri): Hạn chế lượng muối trong khẩu phần ăn. Muối là một trong những yếu tố chính gây tăng huyết áp.Tránh thức ăn chế biến có nhiều muối như thực phẩm đóng hộp, thức ăn nhanh, và gia vị chứa natri. <br> <br> + Tăng cường kali: Kali có thể giúp làm giảm áp lực máu. Thực phẩm giàu kali bao gồm chuối, cam, khoai lang, cà chua, và nhiều loại rau xanh.Tuy nhiên, nên thảo luận với bác sĩ trước khi thay đổi lượng kali trong khẩu phần ăn, đặc biệt nếu bạn có vấn đề về chức năng thận. <br> <br> + Cân đối dinh dưỡng: Theo một chế độ ăn uống cân đối, bao gồm nhiều rau xanh, quả, ngũ cốc nguyên hạt, protein từ cá, gà, và thịt gia cầm không mỡ.Hạn chế tiêu thụ thịt đỏ và thực phẩm chứa chất béo bão hòa. <br> <br> + Kiểm soát lượng đường: Hạn chế tiêu thụ đường và thức ăn có nhiều đường, bởi vì cường độ đường trong máu có thể ảnh hưởng đến huyết áp. Hạn chế đồ uống có cồn: Uống cồn có thể tăng huyết áp, vì vậy nên hạn chế tiêu thụ nếu bạn có cao huyết áp hoặc tiêu thụ một cách có kiểm soát. Giảm cân nếu cần: Nếu bạn có thừa cân hoặc béo phì, giảm cân có thể giúp cải thiện áp lực máu. Theo dõi lượng caffeine: Đôi khi, caffeine từ cà phê, trà, và nước ngọt có chứa caffeine có thể tăng huyết áp. Hãy thảo luận với bác sĩ về việc giới hạn caffeine trong khẩu phần ăn uống của bạn. <br> <br> + Theo dõi huyết áp: Theo dõi huyết áp của bạn theo hướng dẫn của bác sĩ. <br>";
          if(BMI < 18.5)
            a.innerHTML += "<br> Bạn hiện tại đang khá gầy, nên thực đơn hằng ngày lượng calo sẽ tăng thêm khoảng 100 đến khi nào cân nặng có đạt mức chuẩn.";
          else
          if(BMI >= 25)
            a.innerHTML += "<br> Bạn hiện tại đang thừa cân, nên thực đơn hằng ngày lượng calo sẽ giảm khoảng 100 đến khi cân nặng của bạn đạt mức chuẩn.";
          else 
            a.innerHTML += "<br> Cân nặng hiện tại của bạn đang ở mức chuẩn nên thực đơn của bạn lượng calo sẽ ở mức bình thường."
        } 

        if(benh == "binhthuong") {
          a.innerHTML += "Dinh dưỡng là một phần quan trọng của sức khỏe và cảm thấy tốt trong cuộc sống hàng ngày. Dưới đây là một số lời khuyên về ăn uống và dinh dưỡng cho bạn: <br> <br> + Cân đối dinh dưỡng: Hãy ăn đa dạng các loại thực phẩm, bao gồm rau xanh, quả, ngũ cốc nguyên hạt, protein từ thịt, cá, đậu hủ, và hạt. Hạn chế thức ăn chứa nhiều đường, chất béo bão hòa, và muối. <br> <br> + Kiểm soát khẩu phần: Theo dõi cỡ khẩu phần để đảm bảo bạn ăn đúng lượng. Hạn chế tiêu thụ thức ăn chứa nhiều calorie mà không cung cấp nhiều dinh dưỡng, như thức ăn nhanh và đồ ngọt. <br> <br> + Uống đủ nước: Uống đủ nước trong suốt ngày để duy trì sự cân bằng nước trong cơ thể. Nước là lựa chọn tốt nhất, nhưng bạn cũng có thể uống nước trái cây tự nhiên hoặc nước chanh để thêm hương vị. <br> <br> + Ăn thường xuyên: Hãy ăn ít nhất 3 bữa chính mỗi ngày và bổ sung bằng các bữa ăn nhẹ nếu cần thiết. Tránh bỏ bữa, vì điều này có thể dẫn đến tăng cảm giác thèm ăn và tiêu thụ nhiều calorie hơn vào các bữa chính sau đó. Hạn chế thức ăn chế biến: Ưu tiên thức ăn tươi ngon và ít thức ăn chế biến như thực phẩm đóng hộp và đồ ăn nhanh. Thức ăn tươi ngon thường cung cấp nhiều dinh dưỡng hơn. <br> <br> + Theo dõi lượng caffeine và alcohol: Uống caffeine và alcohol một cách có kiểm soát. Một lượng lớn caffeine có thể gây loạn nhịp tim và lo lắng, trong khi alcohol có thể gây tác động xấu đến gan và não. <br> <br> + Một lối sống hoạt động: Kết hợp chế độ ăn uống lành mạnh với việc tập thể dục thường xuyên. Hoạt động thể dục giúp duy trì cân nặng, cải thiện sức khỏe tim mạch và tăng cường tinh thần. <br> <br> + Theo dõi cân nặng: Theo dõi cân nặng của bạn và thực hiện điều chỉnh khi cần thiết để duy trì trạng thái cân đối. <br>";
          if(BMI < 18.5)
            a.innerHTML += "<br> Bạn hiện tại đang khá gầy, nên thực đơn hằng ngày lượng calo sẽ tăng thêm khoảng 100 đến khi nào cân nặng có đạt mức chuẩn.";
          else
          if(BMI >= 25)
            a.innerHTML += "<br> Bạn hiện tại đang thừa cân, nên thực đơn hằng ngày lượng calo sẽ giảm khoảng 100 đến khi cân nặng của bạn đạt mức chuẩn.";
          else 
            a.innerHTML += "<br> Cân nặng hiện tại của bạn đang ở mức chuẩn nên thực đơn của bạn lượng calo sẽ ở mức bình thường."
        } 
      }
    }

  }

  function sang() {
    localStorage.setItem("BUOI", 0);
  }

  function trua() {
    localStorage.setItem("BUOI", 1);
  }

  function chieu() {
    localStorage.setItem("BUOI", 2);
  }

