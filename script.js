function Conttend() {
    return (
        <h1>this is the conttend return</h1>
    );
}


function Link() {
    return (
        <h1>this is the link return</h1>
    );
}


ReactDOM.render(
    <div>
        <h1>this is the h1 return</h1>
        <Conttend />
        <Link />
    </div>,
    document.getElementById('root'));