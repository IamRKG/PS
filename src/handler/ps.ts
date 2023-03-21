import prisma from "../db";



const getAllPS =async (req, res) => {

  const psAll = await prisma.psname.findMany()
  res.json(psAll);
}
  


const getPS = async (req, res) => {
  const { id } = req.params
    const ps = await prisma.psname.findUnique({
      where: {id},
    })

    res.json(ps);
  }

  const createPS = async (req, res) => {
    console.log(req);
    const { name, url} = req.body
    const newPS = await prisma.psname.create({
      data:{
        name,
        url
      }
    })
  
    res.json(newPS)
  }

  export {getPS, createPS, getAllPS}