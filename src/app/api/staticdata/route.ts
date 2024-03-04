import path from 'path'
import { promises as fs } from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const jsonDirectory = path.join(process.cwd(), 'data')
  const fileContents = await fs.readFile(
    jsonDirectory + '/schedules.json',
    'utf8'
  )
  return new NextResponse(fileContents, {
    status: 200,
  })
}
