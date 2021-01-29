const Contacts = (props) => { 
    return <div>
        <h3>{props.name}</h3>
        <p>Age: {props.age}, School: {props.school}, Graduation Year: {props.graduationYear}</p>
    </div>
}

export default Contacts;