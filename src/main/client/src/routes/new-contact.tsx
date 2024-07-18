import React from "react";
import { Button, ButtonGroup, Stack } from "react-bootstrap";


interface NewContact {
    firstname: string;
    lastname: string;
    initial: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone:string; 
    notes:string;  
}

export default function NewContact() {
    const [contact, setContact] = React.useState<NewContact>({
        firstname: "",
        lastname: "",
        initial: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone:"", 
        notes:""
    });

    return(
        <div id="newcontact">
            <div>
                <h1>
                    {contact.firstname || contact.lastname ? (
                        <>{contact.firstname} {contact.lastname}</>                        
                    ) :(<i>No contact found</i>)} {""}
                </h1>
                {contact.notes && <p>{contact.notes}</p>}
            </div>
            <div>
                <ButtonGroup aria-label="Contact Edit">
                    <Stack direction="horizontal" gap={1}>
                        <Button variant="primary" href="/editcontact">Edit</Button>
                        <Button variant="danger" href="/deletecontact">Delete</Button>
                    </Stack>
                </ButtonGroup>
            </div>
        </div>
    );
}