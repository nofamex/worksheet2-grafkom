# Tugas Akhir

- Nofaldi Fikrul Atmam 1906398420
- Dionisius Baskoro Samudra 1906350774

## About

Folder ini terdiri atas beberapa bagian:

1. Folder Blender Models
2. Folder TA
3. Folder Documentations
4. Readme.md

Folder `Blender models` berisikan 3D model yang digunakan pada program ini. <br/>
Folder `Documentations` berisikan dokumentasi atau gambar dari projek ini. <br />
Folder `TA` berisikan program-program yang dibutuhkan untuk menjalankan projek ini.

## How To Operate

0. Program dapat langsung di akses melalui link berikut: http://skupgaming.nofamex.tech/
1. Link video presentasi https://drive.google.com/file/d/1iHb-3qIkAEV8gzWf_x5KEnuzZEiY4vPx/view?usp=sharing
2. Buka aplikasi `command prompt` atau `terminal` <br/>
   ![Terminal](./Documentations/terminal.png "Terminal") <br/><br/>
3. Buka folder/directory `TA` melalui `command prompt` atau `terminal` <br/>
   ![Terminal](./Documentations/TA-dir.png "Terminal") <br/><br/>
4. Jalankan perintah `npm install` <br/>
   ![Terminal](./Documentations/npm-install.png "Terminal") <br/><br/>
5. Jalankan perintah `npm run start` <br/>
   ![Terminal](./Documentations/npm-start.png "Terminal") <br/><br/>
6. Buka browser dan buka halaman `http://localhost:3000` <br/>
   ![Terminal](./Documentations/browser.png "Terminal") <br/><br/>
7. Secara default, program akan menggunakan **port 3000**. Namun jika halaman tidak dapat ditemukan, periksa pada `command prompt` atau `terminal` untuk mendapatkan port yang digunakan. <br/>
   ![Terminal](./Documentations/localhost-port.png "Terminal") <br/><br/>

## Proses Pembentukan Model

Model dibentuk menggunakan aplikasi 3D Blender dan kemudian diekspor sebagai file object dengan format `.glb`. Terdapat 5 model yang digunakan pada program ini: **Ender Man, Chicken, Person, Stone, Tree**. Model **Ender Man, Chicken, Person** merupakan **hierarchy model**, sedangkan model **Stone, Tree** merupakan objek model biasa.

### Ender Man

Model dengan 6 bagian:

1. Kepala
2. Badan
3. Tangan Kanan
4. Tangan Kiri
5. Kaki Kanan
6. Kaki Kiri

Enam bagian tersebut dihubungkan dengan 5 sendi sebagai berikut:

1. Kepala-Badan
2. Badan-Tangan Kanan
3. Badan-Tangan Kiri
4. Badan-Kaki Kanan
5. Badan-Kaki Kiri

Berikut merupakan detil dari model Ender Man
![Ender Man](./Documentations/ender.png "Ender Man")

### Chicken

Model dengan 6 bagian:

1. Kepala
2. Badan
3. Sayap Kanan
4. Sayap Kiri
5. Kaki Kanan
6. Kaki Kiri

Enam bagian tersebut dihubungkan dengan 5 sendi sebagai berikut:

1. Kepala-Badan
2. Badan-Sayap Kanan
3. Badan-Sayap Kiri
4. Badan-Kaki Kanan
5. Badan-Kaki Kiri

Berikut merupakan detil dari model Chicken
![Chicken](./Documentations/chicken.png "Chicken")

### Person

Model dengan 10 bagian:

1. Kepala
2. Badan
3. Lengan Kanan
4. Tangan Kanan
5. Lengan Kiri
6. Tangan Kiri
7. Paha Kanan
8. Kaki Kanan
9. Paha Kiri
10. Kaki Kiri

Sepuluh bagian tersebut dihubungkan dengan 9 sendi sebagai berikut:

1. Kepala-Badan
2. Badan-Lengan Kanan
3. Lengan Kanan-Tangan Kanan
4. Badan-Lengan Kiri
5. Lengan Kiri-Tangan Kiri
6. Badan-Paha Kanan
7. Paha Kanan-Kaki Kanan
8. Badan-Paha Kiri
9. Paha Kiri-Kaki Kiri

Berikut merupakan detil dari model Person
![Person](./Documentations/person.png "Person")

### Stone

Berikut merupakan detil dari model Stone
![Stone](./Documentations/stone.png "Stone")

### Tree

Berikut merupakan detil dari model Tree
![Tree](./Documentations/tree.png "Tree")

## Proses Rendering Objek dan Scene

1. Membuat canvas sebagai media untuk merender model, plane dll
2. Membuat dan merender landscape komponen GroundPlane
3. Membuat dan merender background komponen BackDrop
4. Membuat dan merender camera komponen OrbitalControl, dengan memanfaatkan algoritma PerspectiveCamera, Scene
5. Membuat 3 buah lighting, dengan memanfaatkan algoritma RectAreaLight, dibuatlah 3 komponen lighting KeyLight sebagai direction light, FillLight sebagai point light dan RimLight sebagai spotlight
6. 6 buah objek yang sebelumnya sudah dibuat kemudian di render

## Algoritma Khusus Yang Digunakan

1. BoxGeometry, MeshBasicMaterial dan Mesh untuk pembentukan object dan landscape
2. OrbitalControl
3. PerspectiveCamera
4. RectAreaLight

## Log Pekerjaan

- Dionisius Baskoro Samudra:

  - Membuat model dan merendernya pada aplikasi
  - Membuat lighting, directional dan point light
  - Membuat mode wireframe dan shader
  - Membuat bayangan pada objek
  - Menulis dokumentasi
  - Membuat website jadi aesthetic

- Nofaldi Fikrul Atmam:
  - Membuat model dan merendernya pada aplikasi
  - Membuat model hierarki dapat bergerak
  - Membuat dua mode display dan interaktif
  - Menerapkan texturing pada objek
  - Membuat dokumentasi
  - Mendeploy aplikasi

## Sumber dan Referensi

- https://threejs.org/docs/#examples/en/controls/OrbitControls
- https://threejs.org/docs/#api/en/objects/Mesh
- https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
- https://github.com/pmndrs/gltfjsx
- https://codesandbox.io/s/react-three-fiber-custom-geometry-with-fragment-shader-material-vxswf
- https://codesandbox.io/s/three-point-lighting-in-react-three-fiber-52bnw?file=/src/index.js
