import React, { useState, useEffect } from 'react';
import '../styles/delete.css';
import Marquee from "react-fast-marquee";
import { db } from '../firebase.config';
import {
    doc,
    deleteDoc,
    collection,
    onSnapshot,
    updateDoc,
    arrayUnion,
    query,
    orderBy,
    setDoc
} from 'firebase/firestore';

const Delete = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [trueModal, setTrueModal] = useState(false);
    const [falseModal, setFalseModal] = useState(false);

    const usersCollectionRef = collection(db, "users");
    useEffect(() => {
        onSnapshot(usersCollectionRef, (snapshot) => {
            setUsers(
                snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    };
                })
            );
        });
    }, []);

    const reset = () => {
        setEmail("");
        setPassword("");
    }

    const submit = () => {

        const user = users.filter((element) => {
            return (element.email === email && element.password === password);
        })

        if (user.length > 0) {
            setDoc(doc(db, "review", user[0].uid), {
                uid: user[0].uid,
                email: email,
            });

            setEmail("");
            setPassword("");

            setTrueModal(true);
        }
        else {
            setFalseModal(true);
        }

    }

    return (
        <>
            {
                trueModal &&
                <div className='services__modal'>
                    <div className='services__modal-content'>
                        <div className="content-header-container">
                            <div className="content-header">BudgetBuddy Verdict</div>
                            <i
                                onClick={() => {
                                    setTrueModal(false);
                                }}
                                className="uil uil-times services__modal-close"></i>
                        </div>
                        <div>
                            It was a great experience having you as our user. Your request has been successfully submitted to the admin team and your profile will be deleted within 3-5 business days.
                        </div>

                    </div>
                </div>
            }
            {
                falseModal &&
                <div className='services__modal'>
                    <div className='services__modal-content'>
                        <div className="content-header-container">
                            <div className="content-header">BudgetBuddy Verdict</div>
                            <i
                                onClick={() => {
                                    setFalseModal(false);
                                }}
                                className="uil uil-times services__modal-close"></i>
                        </div>
                        <div>
                            Wrong Email or Password. We still recommend you to stay with us in our journey but if you want to realy part ways with us then please retry with correct Email & Password.
                        </div>

                    </div>
                </div>
            }
            <div className='page-bg'>
                <div className='navbar'>BudgetBuddy🐷</div>
                <Marquee className='heading'>Enter your registered email and password 🌷</Marquee>
                <div className='flexy'>
                    <div className='box'>
                        <div className='box-heading'>To delete your account fill out this form</div>
                        <div>
                            <label htmlFor="">Email</label><br />
                            <input onChange={(event) => { setEmail(event.target.value) }} value={email} type="text" placeholder='abc@gmail.com' />
                        </div>
                        <div>
                            <label htmlFor="">Password</label><br />
                            <input onChange={(event) => { setPassword(event.target.value) }} value={password} type="password" placeholder='password' />
                        </div>
                        <div className='buttons-container'>
                            {
                                (email === "" || password === "") ?
                                    <button disabled onClick={() => { submit(); }} className='submit-button'>Submit</button>
                                    :
                                    <button onClick={() => { submit(); }} className='submit-button'>Submit</button>
                            }
                            <button onClick={() => { reset(); }}>Clear</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Delete