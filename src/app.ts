import exprss,{Application, Request, Response} from 'express';
import path from 'path';

const app:Application = exprss();
const viewsPath = path.join(__dirname, '../views')
const publicDirectoryPath = path.join(__dirname, '../public');

const port = 3070;

app.use(exprss.static(publicDirectoryPath))

app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.get('/',(req:Request,res:Response)=>
{
    res.render(`index`);
})

app.listen(port,()=>
{
    console.log(`app is listning on port no ${port}`);
})