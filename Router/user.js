import  express  from "express";

const router = express.Router();

router.get('/users/all',async(req,res)=>{
    const users = await User.find({});
    // params
    
    // const key = req.query.keyword;

    res.json({
        sucess:true,
        users,
    })
})

app.get('/users/new',async(req,res)=>{
    const {name,Email,password} = req.body;
    // will not work need middleware of json 
    const users = await User.create({
        name,
        Email,
        password
    });
    // 201 is for creation
    res.status(201).cookie('tempo','hiiz').json({
        sucess:true,
        mesaage:"Sucessful Regsitration",
    })
})

app.get('/user/special',(req,res)=>{
    res.json({
        sucess:"true",
        message:"Just Joking",
    })
})

// ALWAYS KEEP DYNAMIC ROUTING AT END BECUASE FROM TOP JS WILL MAKE THIS ROUTE FIRST
app.get('/userId/:userID',async (req,res)=>{
    const { id } = req.params;
    const user = await User.findById(id);

    res.json({
        sucess:"true",
        user,
    })
})

export default router;