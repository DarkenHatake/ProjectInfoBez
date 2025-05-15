import React, {useEffect, useState} from 'react';
import CreateItemModal from './CreateItemModal';
import ItemList from './ItemList';
import JoinSubject from './JoinSubject';
import './ComponentsStyles/Object.css';
import {createSubject, getSubjects} from "../api";

const Object = () => {

    useEffect( () => {
        async function fetchData() {
            try{
                const responceSub = await getSubjects()
                setItems(responceSub.data)
                console.log(responceSub.data)
            } catch (e) {
                console.log(e)
            }

        }
        fetchData()
    }, []);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
    const [items, setItems] = useState([]);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleAddItem = async (title,/* description,*/ deadline) => {
        const response = await createSubject(title, /*description,*/ deadline);
        console.log(response);
        const responceSub = await getSubjects()
        setItems(responceSub.data)
        console.log(responceSub.data);
    };

    // Новая функция для удаления предмета
    const handleDeleteItem = (index) => {
        setItems((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    const handleOpenJoin = () => {
        setIsJoinModalOpen(true)
    }
    const handleCloseJoin = () => {
        setIsJoinModalOpen(false);
    };
    return (
        <div>
            <h1 className="object-object-title">Предметы</h1>
            <button className="object-create-item" onClick={handleOpenModal}>Создать предмет</button>
            <button className="object-join" onClick={handleOpenJoin}>Присоединиться</button>

            {/* Теперь передаем onDelete */}
            <ItemList items={items} onDelete={handleDeleteItem} />

            {isModalOpen && (
                <CreateItemModal onClose={handleCloseModal} onAddItem={handleAddItem} />
            )}

            {isJoinModalOpen && (<JoinSubject onClose={handleCloseJoin}/>)}
        </div>
    );
};

export default Object;