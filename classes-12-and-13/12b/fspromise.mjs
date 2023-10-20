import { readFile } from 'node:fs/promises'
try {
  const data = await readFile('./notes.mdasdfasdfasdf')
  console.log(data)
} catch (e) {
  console.log(e)
}
