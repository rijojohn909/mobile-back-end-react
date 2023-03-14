const db = require('./db')

// get all mobiles
const allMobiles = ()=>{
    return db.Mobile.find().then((result)=>{
        if(result){
            return {
                statusCode:200,
                mobiles:result
            }
        }
        else{
            return {
                statusCode:404,
                message:"No data is available"
            }
        }
    })
}

// get a particular Mobiles details
const getAMobile = (id)=>{
    return db.Mobile.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                mobile:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"No data is available"
            }
        }
    })
}

// add Mobiles
const addMobile =( id,
    name,
   image,
    price,
    waranty,
    Charger,
    memory,
    ram
   )=>{
    return db.Mobile.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:401,
                message:"Mobile Already Exist!"
            }
        }
        else{
            const newMobile = new db.Mobile({
                id,
                name,
                image,
                 price,
                 waranty,
                 Charger,
                 memory,
                 ram
            })
            newMobile.save()
            return{
                statusCode:200,
                message:"New Mobile Added Successfully..."
            }
        }
    })
}

// Delete a particular Mobile
const deleteMobile = (id)=>{
    return db.Mobile.deleteOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:"Mobile Removed Successfully..."
            }
        }
        else{
            return{
                statusCode:404,
                message:"No data is available"
            }
        }
    })
}

// update Mobile
const editMobile =(id,
    name,
    image,
     price,
     waranty,
     charger,
     memory,
     ram)=>{
    return db.Mobile.findOne({id}).then((result)=>{
        if(result){
           result.id= id,
           result.name=name,
           result.image=image,
           result.price=price,
           result.waranty=waranty,
           result.charger=charger,
           result.memory=memory,
           result.ram=ram
            result.save()
            return{
                statusCode:200,
                message:"Data Updated Successfully"
            }
        }
        else{
            return{
                statusCode:404,
                message:"No data is available"
            }
        }
    })
    }

module.exports={
    allMobiles,
    getAMobile,
    addMobile,
    deleteMobile,
    editMobile
    
}