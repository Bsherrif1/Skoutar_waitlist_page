function List() {

    const fruits = [{ name: "apple", calories: 30 },
    { id: 1, name: "banana", calories: 35 },
    { id: 2, name: "pineapple", calories: 40 },
    { id: 3, name: "dates", calories: 45 },
    { id: 4, name: "orange", calories: 50 }];

    // fruits.sort((a, b)) => a.name.localeCompare(b.name));
    fruits.sort((a, b) => a.name.localeCompare(b.name))
    const listItems = fruits.map(fruit => <li key={fruits.id}>{fruit.name} : &nbsp; <b>{fruit.calories}</b> </li>);

    return (<ol>{listItems}</ol>);
}
export default List