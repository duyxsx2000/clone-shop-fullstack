import  express  from "express";
import mongoose from "mongoose";
import  {dataXX,dataAccountX}  from "../model/model.js";
import { createToken, verifyToken } from "../JWTaction.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();
export const getDataAccount = async function(req,res){
    const dataA = await dataAccountX.find()
    res.send(dataA)
}

export const  getData = async function(req,res){
   const dataG = await dataXX.find();
   res.send(dataG)
}

export const postData = async function(req,res){
    const  newData = req.body;
    await dataXX.create(newData);
    res.json('done');

}

export const login = async function(req,res){
    const users =  await dataAccountX.find({acc:req.body.acc})
    if(users[0]){
        
       const passW = users[0].pass;

       if(passW==req.body.pass){
         
        const token = createToken(users[0].acc)
        
         res.status(200).json({data:users,notification:'dang nhap thanh cong',token:token})
    }else{ 
        res.status(200).json({notification:'sai mat khau'})
    }
        
    }else{
       
       res.status(200).json({notification:'account khong ton tai'})
    }
}

export const register = async function(req,res){
  
    const newData = (req.body);
    await dataAccountX.create(newData)
    res.json('done')
}

export const upDataUser = async function(req,res){
    
    const token = req.body.headers.Authorization
    const key = process.env.ACCESS_TOKEN_SECRET
    const acc = req.body.resInPost.data[0].acc;
    const taikhoan = req.body.resInPost.data[0].taikhoan;
    if (!token) {
        return res.status(401).json({ message: "Chưa đăng nhập" });
    }
      
    const jwtToken = verifyToken(token)
    if(!jwtToken){
        res.status(401).json({ message: "Token không hợp lệ" })
    }
    
    await dataAccountX.updateOne({acc:acc},{taikhoan:taikhoan})
    res.json('done')
    
}

export const getDataUser = async function(req,res){
    const dataA = await dataAccountX.find()
    res.send(dataA)
}
