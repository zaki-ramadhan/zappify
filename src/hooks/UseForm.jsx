// src/hooks/useForm.js

import { useState } from "react";

// Ini adalah custom hook useForm yang digunakan untuk mengelola data form (seperti input name, email, dll).
// Ketika kita ingin menggunakan form dengan logika yang sama di berbagai tempat,
// kita cukup pakai hook ini tanpa menulis ulang logic yang sama di setiap komponen.

const useForm = (initialState) => {
  // Menyimpan data form (input) dengan useState. initialState adalah nilai awal form (biasanya kosong).
  const [formData, setFormData] = useState(initialState);

  // Fungsi untuk menangani perubahan pada input form.
  // Ketika user mengetik sesuatu, fungsi ini akan dijalankan.
  const handleChange = (e) => {
    const { name, value } = e.target; // Mendapatkan nama dan nilai input yang berubah
    setFormData((prevData) => ({
      ...prevData, // Menyalin data sebelumnya (agar data lainnya tidak hilang)
      [name]: value, // Memperbarui nilai input yang sesuai dengan name
    }));
  };

  // Fungsi untuk menangani saat form disubmit.
  // Biasanya digunakan untuk memproses atau mengirim data form.
  const handleSubmit = (e, callback) => {
    e.preventDefault(); // Mencegah halaman reload setelah submit
    alert("Form data submitted: ", formData); // Menampilkan data yang dikirim ke console
    if (callback) callback(formData); // Jika ada fungsi callback, kita jalankan dengan data form
  };

  // Mengembalikan data form, fungsi handleChange dan handleSubmit supaya bisa digunakan di komponen lain.
  return {
    formData,   // Form data yang akan terus diperbarui saat input berubah
    handleChange, // Fungsi untuk menangani perubahan input
    handleSubmit, // Fungsi untuk menangani submit form
  };
};

export default useForm;
