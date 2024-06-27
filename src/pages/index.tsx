import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import { List } from "@/components/List";
import { Follower } from "@/types";
import { Form } from "@/components/Form";
const inter = Inter({ subsets: ["latin"] });



const initial_state = [
    {
        username: "player",
        months: 3,
        avatar: "https://i.pravatar.cc/150?u=player",
        description: "Description of player"
    },
    {
        username: "gamer",
        months: 5,
        avatar: "https://i.pravatar.cc/150?u=gamer",
    }
]

export default function Home() {

    //const [followers, setFollowers] = useState<Array<Follower>>();
    const [followers, setFollowers] = useState<Follower[]>([]);

    useEffect(() =>{
        setFollowers(initial_state)
    }, [])

    function onHandleNewFollower(newFollower: Follower){
        setFollowers(follower => [...follower, newFollower]);
    }

    return(
        <>
            <List follower={followers}/>
            <Form onNewFollower={onHandleNewFollower}/>
        </>
    )

  
}
