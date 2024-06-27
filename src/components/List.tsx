/* eslint-disable @next/next/no-img-element */

import { Follower } from "@/types";

interface Props {
    follower: Array<Follower>;
}

function List({ follower }: Props) {
    return (
        <div>
            <ul>
                {follower?.map((follower) => {
                    return (
                        <li key={follower.username}>
                            <h3>{follower.username}</h3>
                            <img src={follower.avatar} width="150px" alt=""/>
                            <p>{follower.months} meses</p>
                            <p>{follower.description}</p>
                        </li>
                    );
                })}
            </ul>

        </div>
    );
}

export { List };
