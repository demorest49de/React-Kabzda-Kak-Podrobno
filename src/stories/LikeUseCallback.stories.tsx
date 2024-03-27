import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'UseMemo hook'
}

export const LikeUseCallback = () => {
    console.log(' LikeUseCallback: ', LikeUseCallback);
    let [counter, setCounter] = useState<number>(0)

    let [books, setBooks]
        = useState<string[]>(['React', 'JS', 'CSS', 'HTML'])

    // const newArray = useMemo(() => {
    //     const newArray = books.filter(u => u.toLowerCase().indexOf('a') > -1)
    //     return newArray
    // }, [books])

    const addBook = () => {
        console.log(' books: ', books);
        const newBooks = [...books, 'Angular_' + new Date().getTime()]
        setBooks(newBooks)
    }

    const memoizedAddBook = useMemo(() => {
        return addBook
    }, [books])

    const memoizedAddBook2 = useCallback(
        addBook
        , [books])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>increase counter</button>
            {counter}
            <Book
                // books={books}
                addBook={memoizedAddBook2}/>
        </>
    );
};

const BooksSecret = (props: {
    // books: string[],
    addBook: () => void
}) => {
    console.log(' Book Secret: ');
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
        {
            // props.books.map((book) => <div key={book}>{book}</div>)
        }</div>
}

const Book = React.memo(BooksSecret)