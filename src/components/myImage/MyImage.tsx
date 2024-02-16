import img1 from '../../static/image/1.jpg'

export const MyImage:React.FC<{}>=()=>{
    let data=  <img width="200px" src={img1} alt="" />
    let arry=[]
    for(let i=0;i<10;i++){
        arry.push(data)
      }
     
    return <>
    <h1>static 10 images</h1>
  {arry}

    {/* <img width="200px" src={img1} alt="" />
    <img width="200px" src={img1} alt="" />
    <img width="200px" src={img1} alt="" />
    <img width="200px" src={img1} alt="" />
    <img width="200px" src={img1} alt="" />
    <img width="200px" src={img1} alt="" />
    <img width="200px" src={img1} alt="" />
    <img width="200px" src={img1} alt="" /> */}
    </>
}