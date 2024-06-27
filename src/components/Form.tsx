import { Follower } from "@/types";
import React, { ChangeEvent, FormEvent, useState } from "react";


interface FormProps{
    //onNewFollower: React.Dispatch<React.SetStateAction<Follower[]>>
    onNewFollower: (newFollower: Follower) => void
}

function Form({onNewFollower}:FormProps) {
    
    const [inputValue, setInputValues] = useState<Follower>({
        username: "",
        months: 0,
        avatar: "",
        description: "",
    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) { 
        e.preventDefault();

        /*...followers, copia todos los elementos existentes en la lista de seguidores
        inputValue agrega un nuevo seguidor al final*/
        //onNewFollower(follower => ([...follower, inputValue]))
        
        onNewFollower(inputValue)
        
    }

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {

        setInputValues({
            ...inputValue,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={inputValue.username}
                    type="text"
                    className="text"
                    name="username"
                    placeholder="username"
                    onChange={handleChange}
                />
                <input
                    value={inputValue.months}
                    type="number"
                    className="text"
                    name="months"
                    placeholder="months"
                    onChange={handleChange}
                />
                <input
                    value={inputValue.avatar}
                    type="text"
                    className="text"
                    name="avatar"
                    placeholder="avatar"
                    onChange={handleChange}
                />
                <input
                    value={inputValue.description}
                    type="text"
                    className="text"
                    name="description"
                    placeholder="description"
                    onChange={handleChange}
                />
                <button>Follow</button>
            </form>
        </>
    );
}

export { Form };
