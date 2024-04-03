import { createContext, useEffect, useReducer, useState } from "react";


export const MyContacts = createContext();

const Context = ({ children }) => {
    const [sortDirection, setSortDirection] = useState(true);
    const handlerSortByUsername = () => {
        handlerSortable('username'); 
        setSortDirection(!sortDirection); 
    };

    const reducer = (users, action) => {
        switch (action.type) {
            case "SET_USERS":
                return action.payload;
            case "SORT": return [...users].sort((a, b) => {
                if (sortDirection) {
                    return b[action.payload].localeCompare(a[action.payload]);
                } else {
                    return a[action.payload].localeCompare(b[action.payload]); 
                }
                return users;
            })
            case "SEARCH": return users.map((elem) => {
                if (elem.username.includes(action.payload)) {
                return {...elem, isVisible: true}
                } else {
                 return { ...elem, isVisible: false };
                
            }})
            // case "SEARCH": return users.filter(elem =>
            //     elem.username.includes(action.payload));
            default: return users;
        }
    }

    const [contacts, setContacts] = useState([]);
    const [users, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => {
                response = response.map((elem) => { return { ...elem, isVisible: true } });
                return response;
            })
            .then(json => setContacts(json));
    }, []);

    useEffect(() => {
        dispatch({ type: "SET_USERS", payload: contacts });
    }, [contacts]);

    console.log(contacts);
    console.log(users);

    const handlerSortable = (field) => {
        dispatch({type:"SORT", payload: field});
    }

    
    
    const Sortable = ({ onClick, icon }) => {
        return (
            <span onClick={onClick} style={{ cursor: 'pointer' }}>
                {icon}
            </span>
        );
    }

    const handlerSearch = (str) => {
        console.log(str);
        dispatch({ type: "SEARCH", payload: str });
    }

    const value = { users, handlerSortable, handlerSearch, Sortable, handlerSortByUsername, sortDirection };
    console.log(users)

    return (
        <MyContacts.Provider value = {value}> {children} </MyContacts.Provider>
    )
};


export default Context;