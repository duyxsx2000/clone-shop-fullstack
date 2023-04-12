import mongoose from "mongoose";

const dataX = new mongoose.Schema({
    name: String,
    gia: Number,
    soluong: String,
    img: String
  });
const dataAccount = new mongoose.Schema({
    acc: String,
    pass:String,
    taikhoan: Number,
    sdt: String
  });

  export const dataAccountX = mongoose.model('dataS',dataAccount,'account')
  export const dataXX = mongoose.model('data',dataX,'index');
