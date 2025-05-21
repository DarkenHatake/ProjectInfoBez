import React, {useEffect, useState} from 'react';
import CreateItemModal from './CreateItemModal';
import ItemList from './ItemList';
import JoinSubject from './JoinSubject';
import './ComponentsStyles/Object.css';
import {createSubject, getSubjects,deleteSubject} from "../api";

const Object = () => {

    const [items, setItems] = useState([]);
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

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleAddItem = (title, description) => {
        createSubject(title, description)
            .then(() => {
                console.log('Предмет создан')
                // После успешного создания предмета запрашиваем обновлённый список
                return getSubjects();
            })
            .then((response) => {
                // Обновляем состояние с новыми данными
                setItems(response.data);
                console.log('Список предметов обновлён:', response.data);
            })
            .catch((error) => {
                console.error('Ошибка при добавлении предмета:', error);
            });
    };

    // Новая функция для удаления предмета
    const handleDeleteItem = (index) => {
        deleteSubject(index)
        .then(() => {
            getSubjects().then((response) => {
                setItems(response.data)
            })
        })
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