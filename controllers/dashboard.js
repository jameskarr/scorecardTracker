const User = require('../models/Shooter')

module.exports = {
    getShooters: async (req,res)=>{
        console.log(req.user)
        try{
            const deadLostDuck = await User.find({userId:req.user.id})
            const listedShooters = await User.find({userId:req.user.id})
            const itemsLeft = await User.countDocuments({userId:req.user.id,completed: false})
            res.render('dashboard.ejs', {domScorecard: deadLostDuck, shooter: listedShooters, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createUser: async (req, res)=>{
        try{//userID is created here. _id is default for each unique obj in the mongo.
            await User.create({shooterName: req.body.todoItem, score: 0, hitMiss: 0, completed: false, userId: req.user.id})
            console.log('User has been added!')
            res.redirect('/dashboard')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await User.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{completed: true})
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await User.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{completed: false})
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteUser: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await User.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
    addOne: async(req, res) => {
        try {
            await User.findOneAndUpdate({_id: req.body.todoIdFromJSFile}, {$inc: {score: 1}})
            console.log('Plus one')
            res.json('Plus one')
        }   catch(err){
            console.log(err)
        }
    },
    minusOne: async(req, res) => {
        try {
            await User.findOneAndUpdate({_id: req.body.todoIdFromJSFile}, {$inc: {score: -1}})
            console.log('Minus one')
            res.json('Minus one')
        }   catch(err){
            console.log(err)
        }
    },
    addOneDom: async(req, res) => {
        try {
            await User.findOne({_id: req.body.todoIdFromJSFile}, {hitMiss: 1})
            console.log('Plus one dom')
            res.json('Plus one dom')
        }   catch(err){
            console.log(err)
        }
    },
    addZeroDom: async(req, res) => {
        try {
            await User.findOne({_id: req.body.todoIdFromJSFile}, {hitMiss: 0})
            console.log('Plus zero dom')
            res.json('Plus zero dom')
        }   catch(err){
            console.log(err)
        }
    }
}    