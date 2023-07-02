import Button from '@mui/material/Button';

export default function Child({childToParent}) {
    const data = "This is data from Child Component to the Parent Component."
    return (
        <div>
            <Button onClick={() => childToParent(data)}>Click Child</Button>
        </div>
    )
}