import { Button, TextField } from '@mui/material'

export default function Step3() {
  return (
    <div>
      <h1>Write a short review</h1>
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
      />
      <br />
      <Button variant="contained" href="/">
        Done
      </Button>
    </div>
  )
}
