import { useState } from 'react'

export default function CreateNoteForm() {
    const [formData, setFormData] = useState({
        // put here what the user will be filling out
        title: '',
        body: '',
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            // this will dynamically update our state
            // e.target.name selects the corresponding key that we want to update dynamically
            [e.target.name]: e.target.value
        })
    }

  return (
    <form action="">
        <input type="text" placeholder='Enter Title' name='title' value={formData.title} onChange={handleChange}/>
        <input type="text" placeholder='Enter Body' name='body' value={formData.body} onChange={handleChange}/>
        <input type="submit" />
    </form>
  )
}
