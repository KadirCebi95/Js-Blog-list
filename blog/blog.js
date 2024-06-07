// let domain = 'https://proje-bir.altayagency.com'

// window.onload = () => listele()

// const cek = x => document.getElementById(x).value;

// const ekle = async () => {
//     let newObj = {
//         baslik: cek('ad'),
//         aciklama: cek('aciklama'),
//         gorsel: cek('gorsel')
//     }

//     let setting = {
//         method:"POST",
//         headers:{ "Content-Type":"application/json"},
//         body:JSON.stringify(newObj)
//     }

//     let response = await fetch(`${domain}/api/blog/create`, setting)

//     if(response.status == 200) listele()
// }

// const listele = async () =>  {
//     let alan = document.getElementById('alan');
//     alan.innerHTML = "";

//     let bloglar;

//     await fetch(`${domain}/api/blog/list`)
//     .then((response) => response.json() )
//     .then((data) => bloglar = data )
//     .catch(console.error())

//     bloglar['blogs'].forEach(element => {
//         let tr = document.createElement('tr');
//         tr.innerHTML =
//         `
//         <th><input value="${element.baslik}" id="adGuncelle-${element.id}"></th>
//         <th><input value="${element.aciklama}" id="aciklamaGuncelle-${element.id}"></th>
//         <th><input value="${element.gorsel}" id="gorselGuncelle-${element.id}"></th>
//         <th>
//         <button class="btn btn-danger" type="button" onclick="sil(${element.id})">sil</button>
//         <button class="btn btn-success" type="button" onclick="guncelle(${element.id})">guncelle</button>
//         </th>
//         `
//         alan.appendChild(tr);
//     });
// }

// const sil = async id => {
//     let response = await fetch(`${domain}/api/blog/delete/${id}`, {method:"DELETE"})

//     if(response.status == 200) listele()
// };

// const guncelle = async id => {
//     let guncelObje = {
//         baslik: cek(`adGuncelle-${id}`),
//         aciklama: cek(`aciklamaGuncelle-${id}`),
//         gorsel: cek(`gorselGuncelle-${id}`),
//     }

//     let settings = {
//         method:"PUT",
//         headers:{"Content-Type":"application/json"},
//         body:JSON.stringify(guncelObje),
//     }

//     let response = await fetch(`${domain}/api/blog/update/${id}`, settings)

//     if(response.status == 200) listele();
// }

// window.onload = function () {
//   listele();
// };

// const veriEkle = async () => {
//   let baslik = document.getElementById("baslik").value;
//   let aciklama = document.getElementById("aciklama").value;
//   let gorsel = document.getElementById("gorsel").value;

//   let ekleObj = {
//     baslik: baslik,
//     aciklama: aciklama,
//     gorsel: gorsel,
//   };

//   let response = await fetch(
//     "https://proje-bir.altayagency.com/api/blog/create",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(ekleObj),
//     }
//   );
//   if (response.status == 200) {
//     listele();
//   }
// };

// const listele = async () => {
//   let alan = document.getElementById("alan");
//   alan.innerHTML = "";

//   let bloglar;

//   let response = await fetch("https://proje-bir.altayagency.com/api/blog/list")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => (bloglar = data))
//     .catch(console.error());

//   bloglar["blogs"].forEach((element) => {
//     let tr = document.createElement("tr");
//     tr.innerHTML = `
//         <th><input value="${element.baslik}" id="guncelleBaslik-${element.id}"></th>
//         <th><input value="${element.aciklama}" id="guncelleAciklama-${element.id}"></th>
//         <th><input value="${element.gorsel}" id="guncelleGorsel-${element.id}"></th>
//         <th>
//         <button class="btn btn-danger" type="button" onclick="sil(${element.id})">sil</button>
//         <button class="btn btn-success" type="button" onclick="guncelle(${element.id})">guncelle</button>
//         </th>
//         `;
//     alan.appendChild(tr);
//   });
// };

// let sil = async (id) => {
//   let response = await fetch(
//     `https://proje-bir.altayagency.com/api/blog/delete/${id}`,
//     {
//       method: "DELETE",
//     }
//   );
//   if (response.status == 200) {
//     listele();
//   }
// };
// let guncelle = async (id) => {
//   let baslik = document.getElementById(`guncelleBaslik-${id}`).value;
//   let aciklama = document.getElementById(`guncelleAciklama-${id}`).value;
//   let gorsel = document.getElementById(`guncelleGorsel-${id}`).value;

//   let guncObje = {
//     baslik: baslik,
//     aciklama: aciklama,
//     gorsel: gorsel,
//   };

//   let response = await fetch(
//     `https://proje-bir.altayagency.com/api/blog/update/${id}`,
//     {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(guncObje),
//     }
//   );

//   if (response.status == 200) {
//     listele();
//   }
// };

let domain = 'https://proje-bir.altayagency.com';

window.onload = async ()=> {
  await blogList();
  listele();

}
let blog;

let blogList = async ()=> {
  let url = `${domain}/api/blog/list`;
  let response = await fetch(url)
  .then(response => response.json())
  .then(data => blog = data)
  .catch(console.error())
}



const cek = (id) => {
  return document.getElementById(id);
}

const ekle = async ()=> {

  let ekleObje = {
    id:0,
    baslik:cek('baslik').value,
    aciklama:cek('aciklama').value,
    gorsel:cek('gorsel').value
  };
  let url = `${domain}/api/blog/create`;

  let settings = {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(ekleObje)
  };

  let response = await fetch(url,settings);
  let gelen = await response.json();
  ekleObje.id = gelen.id;

  blog['blogs'].push(ekleObje);

  if(response.status == 200) listele();

}

const listele = async ()=> {
  let alan = cek('alan');
  alan.innerHTML = '';

  blog['blogs'].forEach(element => {
    let tr = document.createElement("tr");
    tr.innerHTML = 
    `
    <th><input value="${element.baslik}" type="text" id="baslik-${element.id}"></th>
    <th><input value="${element.aciklama}" type="text" id="aciklama-${element.id}"></th>
    <th><input value="${element.gorsel}" type="text" id="gorsel-${element.id}"></th>
    <th>
    <button class="btn btn-danger" type="button" onclick="sil(${element.id})">Sil</button>
    <button class="btn btn-success" type="button" onclick="guncelle(${element.id})">Guncelle</button>
    </th>
    `;
    alan.appendChild(tr);
  });
};

const guncelle = async (id)=> {
  let guncelleObje = {
    ad:cek(`baslik-${id}`).value,
    aciklama:cek(`aciklama-${id}`).value,
    gorsel:cek(`gorsel-${id}`).value
  };
  let url = `${domain}/api/blog/update/${id}`;

  let settings = {
    method:"PUT",
   headers: { "Content-Type": "application/json" },
    body:JSON.stringify(guncelleObje)
  };

  let response = await fetch(url,settings);

  let index = blog['blogs'].findIndex(data => data.id == id);

  blog['blogs'][index].baslik = guncelleObje.baslik;
  blog['blogs'][index].aciklama = guncelleObje.aciklama;
  blog['blogs'][index].gorsel= guncelleObje.gorsel;

  if(response.status == 200) listele();

}

const sil = async(id)=> {
  blog['blogs'] = blog['blogs'].filter((data) => (data.id != id));
  listele();
  console.log(blog);
  let url = `${domain}/api/blog/delete/${id}`;
  let settings = {method:"DELETE"};
  let response = await fetch(url,settings)
  if(response.status == 200) listele();
}

const temizle = ()=> {
  let ad = cek('baslik').value ='';
  let aciklama = cek('aciklama').value = '';
  let gorsel = cek('gorsel').value = '';
}
