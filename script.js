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

const things = (
    <div>
        <h1>Thing I like About Yogg Sharon</h1>
        <ol>
            <li> He an Old God</li>
            <li> Have Beautiful teeth</li>
            <li> TENTACLES</li>
            <li>And Most Important RANDOM</li>
        </ol>
    </div>
);
ReactDOM.render(
    <div>
        <h1>this is the h1 return</h1>
        <Conttend />
        <Link />
        {things}
    </div>,
    document.getElementById('root'));