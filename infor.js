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

var thucDon1 = [];
var thucDon2 = [];


window.addEventListener('load', ()=> {
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

      }
      else if(Sick == "caohuyetap"){

      }
      else if(Sick == "binhthuong"){

      }

      localStorage.setItem("SICK", Sick);
      localStorage.setItem("JOBS", Jobs);
      localStorage.setItem("GENDER", Gender);


      localStorage.setItem("NAME", FullName);
      localStorage.setItem("AGES", Ages);
      localStorage.setItem("WEIGHT", Wght);
      localStorage.setItem("HEIGHT", Hght);
  return;
  }

  function dtdud(Calo) {
    //làm rỗng thực đơn
    thucDon1 = [];
    thucDon2 = [];

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
    const coman = new MonAn("cơm", "sau này sẽ là địa chỉ của hình món ăn :v", [com], "https://youtu.be/QJZUwiJhKZ0?si=2FG0LqTBvA2j97Zi")
    const xoidauxanh = new MonAn("Xôi đậu xanh", "sau này sẽ là địa chỉ của hình món ăn :v", [gaonep, dauxanh, giolua], "https://youtu.be/w2CHbo08N9E?si=9UIfljiTL-1l96SF");
    const comthitgarang = new MonAn("cơm thịt gà rang", "sau này sẽ là địa chỉ của hình món ăn :v", [com, thitgata], "https://youtu.be/T34SqjyEe2A?si=WSlm7XduhwFdfWqM");
    const muopdangluoc = new MonAn("mướp đắng luộc", "sau này sẽ là địa chỉ của hình món ăn :v", [muopdang], "https://youtu.be/S3ChgcwtU_k?si=9u54QbxmkKXGiOx3");
    const cakho = new MonAn("cá kho", "sau này sẽ là địa chỉ của hình món ăn :v", [com, catroi], "https://youtu.be/bjuDaFy6VkU?si=3iPocF-QlqQHDGs_");
    const mangxao = new MonAn("măng xào", "sau này sẽ là địa chỉ của hình món ăn :v", [mangtuoi, dauan], "https://youtu.be/OsH8a8A2g-k?si=EuMvUsrNazFNWPkk");
    const dauphuluoc = new MonAn("đậu phụ luộc", "sau này sẽ là địa chỉ của hình món ăn :v", [dauphu], "https://youtu.be/0sZARyRmgZM?si=tweCwn6Fh478MRoM");
    const quatuoi = new MonAn("thanhlong", "sau này sẽ là địa chỉ của hình món ăn :v", [thanhlong]);
    const sua = new MonAn("sữa đậu nành", "sau này sẽ là địa chỉ của hình món ăn :v", [suadaunanh]);

    //bữa ăn
    const sang = new meal("7h", [xoidauxanh]);
    const sangphu = new meal("9h", [quatuoi]);
    const trua = new meal("11h", [comthitgarang, muopdangluoc]);
    const truaphu = new meal("14h", [sua]);
    const chieu = new meal("17h", [coman, cakho, mangxao]);
    const chieuphu = new meal("20h", [dauphuluoc]);

    //cập nhật số lượng
    xoidauxanh.capNhatSoLuongNguyenLieu("gạo nếp", 12 * Calo / 100);
    xoidauxanh.capNhatSoLuongNguyenLieu("đậu xanh", 0.3 * Calo / 100);
    xoidauxanh.capNhatSoLuongNguyenLieu("giò lụa", 6 * Calo / 100);
    quatuoi.capNhatSoLuongNguyenLieu("thanh long", 9 * Calo / 100)
    comthitgarang.capNhatSoLuongNguyenLieu("cơm", 15 * Calo / 100);
    comthitgarang.capNhatSoLuongNguyenLieu("thịt gà ta", 9 * Calo / 100);
    muopdangluoc.capNhatSoLuongNguyenLieu("mướp đắng", 5 * Calo / 100);
    sua.capNhatSoLuongNguyenLieu("sữa đậu nành", 4.3 * Calo / 100)
    coman.capNhatSoLuongNguyenLieu("cơm", 15 * Calo / 100);
    cakho.capNhatSoLuongNguyenLieu("cá trôi", 7.1 * Calo / 100);
    mangxao.capNhatSoLuongNguyenLieu("măng tươi", 4 * Calo / 100);
    mangxao.capNhatSoLuongNguyenLieu("dầu ăn", 10 * Calo / 100);
    dauphuluoc.capNhatSoLuongNguyenLieu("đậu phụ", 5 * Calo / 100);

    //cập nhật thực đơn
    thucDon1 = [sang, sangphu, trua, truaphu, chieu, chieuphu];
  }

  
  
