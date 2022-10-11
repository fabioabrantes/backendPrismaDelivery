import express,{Request,Response} from 'express';

type IUser = {
  name:string;
  description:string;
  suap:number;
}

const app = express();
//middleware
app.use(express.json());


app.get('/users',(request,response)=>{
  response.status(200).json({
    name:"fabio",
  });

})

app.get('/user/:id',(request,response)=>{
  const id = request.params.id;
  const amor = request.query.amor;
  response.status(200).json({
    id,
    amor
  });

})

app.post('/user',(request,response)=>{
  const {name,description, suap} = <IUser>request.body;
  
  response.status(200).json({
    name,description,suap
  })
})

app.listen(3333,() => {
  console.log('server on port 3333')
})

