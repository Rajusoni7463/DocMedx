import doctorModel from "../models/doctorModel.js"


//we want this fucntionality in both admin and doctor pane thats why we are creating in this file
const changeAvailablity = async (req,res) =>{
    try{
        const {docId} = req.body
        const docData = await doctorModel.findById(docId)
        await doctorModel.findByIdAndUpdate(docId,{available:!docData.available})
        res.json({success:true,message:'Availabilty change'})
        
        

    }
    catch(e){
        console.log(e)
        res.json({success:false,message:e.message})


    }
}


const doctorList = async (req,res) =>{
    try{
        const doctors = await doctorModel.find({}).select(['-password','-email'])
        res.json({success:true,doctors})
        
        

    }
    catch(e){
        console.log(e)
        res.json({success:false,message:e.message})


    }
}




export {changeAvailablity,doctorList}