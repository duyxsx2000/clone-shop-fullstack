import  express  from "express";
import mongoose from "mongoose";
import  {dataXX,dataAccountX}  from "../model/model.js";

export const getDataAccount = async function(req,res){
    const dataA = await dataAccountX.find()
    res.send(dataA)
}

export const  getData = async function(req,res){
   const dataG = await dataXX.find();
   res.send(dataG)
}

export const postData = async function(req,res){
    console.log(req.body);
    const  newData = req.body;
    
   
    await dataXX.create(newData);
    res.json('gooo');

}
export const login = async function(req,res){
   
    const users =  await dataAccountX.find({acc:req.body.acc})

  
    console.log('jjj',users);
    if(users[0]){
        console.log('thanh cong');
     
       const passW = users[0].pass;
       if(passW==req.body.pass){
        console.log('mat khau chinh xac');
       res.status(200).json({data:users,notification:'dang nhap thanh cong'})
    }else{ console.log('mat khau sai');
        res.status(200).json({notification:'sai mat khau'})
    }
        
    }else{
        console.log('that bai');
       res.status(200).json({notification:'account khong ton tai'})
    }
}
export const register = async function(req,res){
    console.log(req.body);
    const newData = (req.body);
    await dataAccountX.create(newData)
    res.json('hhhh')
}
export const upDataUser = async function(req,res){
    const newDataUser = (req.body.data[0].acc);
    const acc = req.body.data[0].acc;
    const taikhoan = req.body.data[0].taikhoan;
    await dataAccountX.updateOne({acc:acc},{taikhoan:taikhoan})
    console.log(newDataUser);
}
export const getDataUser = async function(req,res){
    const dataA = await dataAccountX.find()
    res.send(dataA)
}
