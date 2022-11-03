var express=require("express")
var mongoose=require("mongoose")
var bodyParser=require("body-parser")
const app=express()
app.use(bodyParser.json())
app.use(express.static('public'))
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({
    extended:true
}))
mongoose.connect("mongodb+srv://Braghadeesh005:sairam23@smarthealthcard.eziqeeu.mongodb.net/test",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

var db=mongoose.connection
db.on('error',()=>console.log('connection error'))
db.once('open',()=>
console.log("connected to db")
)
app.post('/card',(req,res)=>{
    var fn1=req.body.PatientName
    var fn2=req.body.Address
    var fn3=req.body.dob
    var fn4=req.body.age
    var fn5=req.body.bloodGroup
    var fn6=req.body.PhNumber
    var fn7=req.body.gender
        if(fn7=="on")
        {
            fn7="Male"
        }
        else{
            fn7="Female"
        }
    var fn8=req.body.ConsultantName
    var fn9=req.body.Hospital
    var fn10=req.body.BloodP
    var fn11=req.body.DiaB
    var fn12=req.body.Allergies
    var fn13=req.body.Disabilities
    var fn14=req.body.diabetes
    var fn15=req.body.Accidents
    var fn16=req.body.bone
    var fn17=req.body.Heart
    
    var data={
        "PatientName":fn1,
        "Address":fn2,
        "DateOfBirth":fn3,
        "Age":fn4,
        "BloodGroup":fn5,
        "PhoneNumber":fn6,
        "Gender":fn7,
        "ConsultantDoctor":fn8,
        "ConsultingHospital":fn9,
        "BloodPressureLevel":fn10,
        "SugarLevel":fn11,
        "Allergies":fn12,
        "Disabilities":fn13,
        "DiabetesMellitus":fn14,
        "Accidents":fn15,
        "BoneDislocations":fn16,
        "HeartProblems":fn17,
    }
    db.collection('PatientInfo').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Document has been inserted by "+data.PatientName)
    })
    return res.render('2ndPage',{data})
})
app.post('/qr',(req,res)=>{
   var s1=req.body.fn1
   var data={
    "PatientName":s1,
   }
    return res.render('3rdPage',{data})
})
app.get('/',(req,res)=>{
    return res.redirect('index.html')
}).listen(3000)
console.log("server started..")
