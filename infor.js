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
    const chaoyenmachkhongduongvoihatlanhvaquadua = new MonAn("cháo yến mạch không đường với hạt lanh và quả dứa", "sau này sẽ là địa chỉ của hình món ăn :v", [yenmach, nuoc, hatlanh, quadua], "https://youtube.com/shorts/vVVYkvxPAG0?si=bWOv7hiDvcyVIku0");
    const ganuongkhongdavoirauxanh = new MonAn("gà nướng không da với rau xanh", "sau này sẽ là địa chỉ của hình món ăn :v", [ga, rauxanh, bo, hanhtay], "https://youtu.be/jzY0G2ziPIs?si=QyJJNqeSSNalqIn-");
    const suploxanhvacachua = new MonAn("xúp lơ xanh và cà chua", "sau này sẽ là địa chỉ của hình món ăn :v", [loxanh, cachua, nuoc], "https://youtu.be/a7qOAxfDEe0?si=cbNRRJm9K8qM5nhK");
    const cahoinuongvoiluamachvarauxanh = new MonAn("cá hồi nướng với lúa mạch và rau xanh", "sau này sẽ là địa chỉ của hình món ăn :v", [cahoi, luamach, rauxanh], "https://youtu.be/0JOfwDLuTEU?si=GxUPZmlZMYYjXFbC");

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
    const rauxanh = new NguyenLieu("rau xanh", 0, "gram");
    const banhmi = new NguyenLieu("bánh mì", 0, "gram");
    const hanhtay = new NguyenLieu("hành tây", 0, "gram");
    const hatlanh = new NguyenLieu("hạt lanh", 0, "gram");
    const cahoi = new NguyenLieu("cá hồi", 0, "gram");
    const luamach = new NguyenLieu("lúa mạch", 0, "gram");

    //món ăn
    const banhmiluamachvoimutdauvabohatlanh = new MonAn("bánh mì lúa mạch với mứt dâu và bơ hạt lanh", "menu_img/banhmiluamachvoimutdauvabohatlanh.jpg", [banhmiluamach, mutdau, bohatlanh]);
    const comtrangvoithitganuong = new MonAn("cơm trắng với thịt gà nướng(loại bỏ da) và rau xanh", "menu_img/comtrangvoithitganuong.jpg", [com, thitga, rauxanh], "https://youtu.be/jzY0G2ziPIs?si=QyJJNqeSSNalqIn-");
    const banhmisandwichhapvoihanhtayvahatlanh = new MonAn("bánh mì sandwich hấp với hành tây và hạt lanh", "menu_img/banhmisandwichhapvoihanhtayvahatlanh.jpeg", [banhmi, hanhtay, hatlanh]);
    const cahoinuongvoiluamachvarauxanh = new MonAn("cá hồi nướng với lúa mạch và rau xanh", "menu_img/cahoinuongvoiluamachvarauxanh.jpg", [cahoi, luamach, rauxanh], "https://youtu.be/0JOfwDLuTEU?si=GxUPZmlZMYYjXFbC");

    //cập nhật số lượng
    banhmiluamachvoimutdauvabohatlanh.capNhatSoLuongNguyenLieu("bánh mì lúa mạch", Math.round((11.1 * Calo / 100) / 2.591));
    banhmiluamachvoimutdauvabohatlanh.capNhatSoLuongNguyenLieu("mứt dâu", Math.round((6.7 * Calo / 100) / 6));
    banhmiluamachvoimutdauvabohatlanh.capNhatSoLuongNguyenLieu("bơ hạt lanh", Math.round((4.4 * Calo / 100) / 8.29));
    comtrangvoithitganuong.capNhatSoLuongNguyenLieu("cơm", Math.round((14.8 * Calo / 100) / 1.3));
    comtrangvoithitganuong.capNhatSoLuongNguyenLieu("thịt gà", Math.round((8.9 * Calo / 100) / 2.39));
    comtrangvoithitganuong.capNhatSoLuongNguyenLieu("rau xanh", Math.round((5.9 * Calo / 100) / 0.3));
    banhmisandwichhapvoihanhtayvahatlanh.capNhatSoLuongNguyenLieu("bánh mì", Math.round((7.4 * Calo / 100) / 2.646));
    banhmisandwichhapvoihanhtayvahatlanh.capNhatSoLuongNguyenLieu("hành tây", Math.round((5.6 * Calo / 100) / 0.397));
    banhmisandwichhapvoihanhtayvahatlanh.capNhatSoLuongNguyenLieu("hạt lanh", Math.round((5.6 * Calo / 100) / 5.339));
    cahoinuongvoiluamachvarauxanh.capNhatSoLuongNguyenLieu("cá hồi", Math.round((14.8 * Calo / 100) / 2.082));
    cahoinuongvoiluamachvarauxanh.capNhatSoLuongNguyenLieu("lúa mạch", Math.round((8.9 * Calo / 100) / 3.54));
    cahoinuongvoiluamachvarauxanh.capNhatSoLuongNguyenLieu("rau xanh", Math.round((5.9 * Calo / 100) / 0.3));

    //bữa ăn
    const sang = new meal("7h", [banhmiluamachvoimutdauvabohatlanh]);
    const trua = new meal("11h", [comtrangvoithitganuong]);
    const chieu = new meal("17h", [banhmisandwichhapvoihanhtayvahatlanh, cahoinuongvoiluamachvarauxanh]);

    thucDon1 = [sang, trua, chieu];
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
    const coman = new MonAn("cơm", "menu_img/com.jpg", [com], "https://youtu.be/QJZUwiJhKZ0?si=2FG0LqTBvA2j97Zi")
    const xoidauxanh = new MonAn("Xôi đậu xanh", "menu_img/xoidauxanh.jpg", [gaonep, dauxanh, giolua], "https://youtu.be/w2CHbo08N9E?si=9UIfljiTL-1l96SF");
    const comthitgarang = new MonAn("cơm thịt gà rang", "menu_img/comthitgarang.jpg", [com, thitgata], "https://youtu.be/T34SqjyEe2A?si=WSlm7XduhwFdfWqM");
    const muopdangluoc = new MonAn("mướp đắng luộc", "menu_img/muopdangluoc.jpg", [muopdang], "https://youtu.be/S3ChgcwtU_k?si=9u54QbxmkKXGiOx3");
    const cakho = new MonAn("cá kho", "menu_img/cakho.jpg", [com, catroi], "https://youtu.be/bjuDaFy6VkU?si=3iPocF-QlqQHDGs_");
    const mangxao = new MonAn("măng xào", "menu_img/mangxao.jpg", [mangtuoi, dauan], "https://youtu.be/OsH8a8A2g-k?si=EuMvUsrNazFNWPkk");
    const dauphuluoc = new MonAn("đậu phụ luộc", "menu_img/dauphuluoc.jpg", [dauphu], "https://youtu.be/0sZARyRmgZM?si=tweCwn6Fh478MRoM");
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
  }

  
  function make_menu() {
    const Ages = localStorage.getItem('AGES');
    const Wght = localStorage.getItem('WEIGHT');
    const Hght = localStorage.getItem('HEIGHT'); 
    const Gender = localStorage.getItem('GENDER');
    const Sick = localStorage.getItem('SICK');
    const Jobs = localStorage.getItem('JOBS');
    var BMR, Calo;
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
    
    if(Sick == "daithaoduong"){
        dtdud(Calo);
    } 
    else if(Sick == "suythanman"){
        stmud(Calo);
    }
    else if(Sick == "caohuyetap"){
        chaud(Calo);
    }
    // else if(Sick == "binhthuong"){

    // }
    if(document.getElementById("menu") != null) {
      if(localStorage.getItem("BUOI") == "sang")
        buoi = 0;
      else if(localStorage.getItem("BUOI") == "trua")
        buoi = 1;
      else 
        buoi = 2;
      let ulElement = document.getElementById("menu");
      for(i=0; i<thucDon1[buoi].monAn.length; i++) {
        let liElement = document.createElement("li");
        let divElement = document.createElement("div");
        let hElement = document.createElement("h2");
        let inputElement = document.createElement("input");
        let imgElement = document.createElement("img");
        liElement.classList = "card";
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
        ulElement.appendChild(liElement);
      }
    }
    // if(document.getElementById("ten_thucdon") != null)
    //   document.getElementById("ten_thucdon").innerHTML = thucDon1[0].monAn[0].nguyenLieu[0].soLuong + " " + thucDon1[0].monAn[0].nguyenLieu[0].donVi;
  }

  function sang() {
    localStorage.setItem("BUOI", "sang");
  }

  function trua() {
    localStorage.setItem("BUOI", "trua");
  }

  function chieu() {
    localStorage.setItem("BUOI", "chieu");
  }