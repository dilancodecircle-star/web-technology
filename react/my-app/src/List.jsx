function List() {
    const fruits = [{ id: 1, name: 'apple', calories: 78 },
    { id: 2, name: 'banana', calories: 80 },
    { id: 3, name: 'orange', calories: 90 }];
    const fruitItems = fruits.map(f => <li key={f.key}>{f.name} {f.calories}</li>);
    return (< ol >
        {fruitItems}
    </ol >);
}
export default List