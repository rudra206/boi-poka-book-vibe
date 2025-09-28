import { toast } from "react-toastify";

const getStoredReadList = () => {
    //read-list
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        // already exists. do not add it
        console.log(id, 'already exists in the read list');
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);

        //ideally trigger toast from the component
        toast ('This book is added to your read list')
        
    }
}

const getStoredWishList = () => {
    //wish -list
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else {
        return [];
    }
}

const addToStoreWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        //already exists. do not add it. 
        // already exists. do not add it
        console.log(id, 'already exists in the wish list');

    }
    else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr)

        
        //ideally trigger toast from the component
        toast('This book is added to your wish list')
    }
}

export { addToStoredList, addToStoreWishList, getStoredReadList }