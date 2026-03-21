"use client"
import { useParams } from 'next/navigation'

function EditMenuPage() {
    const { id } = useParams()
    return (
        <div>Edit Menu : {id}</div>
    )
}

export default EditMenuPage