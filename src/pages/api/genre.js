import prisma from '../../database'
import addGenre from '../../services/genre/addGenre'


export default async function handler(req, res) {
  if(req.method !== 'POST') res.status(404).json({message: 'Not Found'})

  const {name} = JSON.parse(req.body)

  await addGenre(name)
  
  res.status(200).json({ name })
}